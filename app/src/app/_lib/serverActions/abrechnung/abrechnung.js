import excuteQuery from "@/app/_lib/db";

export default async function Abrechnung(){

    //Parse and evaliuate Shopping
    let shoppingDataRaw = await excuteQuery({query:"SELECT * FROM shopping WHERE isActive= 1 AND Date BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE();"});
    let shoppingData={
        corgi:{
            sumPayed: 0,
            dept:0,
        },
        minla:{
            sumPayed: 0,
            dept: 0,
        },
    }

    for(let entry of shoppingDataRaw){
        if(entry.Payer === "corgi"){
            shoppingData.corgi.sumPayed += entry.CorgiAmount + entry.MinlaAmount;
            shoppingData.minla.dept += entry.MinlaAmount;
        }else{
            shoppingData.minla.sumPayed += entry.CorgiAmount + entry.MinlaAmount;
            shoppingData.corgi.dept += entry.CorgiAmount;
        }
    }

    //Get Drive Data
    let driveData = {
        distanceDriven: {
            lpg: {
                corgi: 0,
                minla: 0,
                both: 0
            },
            super:{
                corgi: 0,
                minla: 0,
                both: 0
            }
        }
    }
    let driveDataRaw = await  excuteQuery({query:"SELECT Payer,SUM(DISTANCE) AS distance FROM drive WHERE Date BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE() AND isActive= 1 GROUP BY Payer;"});
    for(let drive of driveDataRaw){
        driveData.distanceDriven["lpg"][drive.Payer] += drive.distance;
    }
    let fuelOffsetRaw = await excuteQuery({query:"SELECT COUNT(ID) AS count FROM fuel WHERE Date BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE() AND Type='lpg' AND isActive= 1; "});
    let fuelOffset = fuelOffsetRaw[0].count + 1

    let fuelData = {
        super:{
            corgi: 0,
            minla: 0
        },
        lpg:{
            corgi: 0,
            minla: 0
        }
    }
    let fuelGasRaw = await excuteQuery({query:"SELECT * FROM fuel WHERE Type='lpg' AND isActive= 1 ORDER BY ID DESC LIMIT ?", values: [fuelOffset]})
    fuelGasRaw.shift();
    for(let entry of fuelGasRaw){
        fuelData["lpg"][entry.Payer] += entry.Price;
    }
    fuelOffsetRaw = await excuteQuery({query:"SELECT COUNT(ID) AS count FROM fuel WHERE Date BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE() AND Type='super' AND isActive= 1; "});
    fuelOffset = fuelOffsetRaw[0].count + 1
    if(fuelOffset > 1){
        let fuelSuperRaw = await excuteQuery({query:"SELECT * FROM fuel WHERE Type='super' AND isActive= 1 ORDER BY ID DESC LIMIT ?", values: [fuelOffset]});
        let superKilometer = await excuteQuery({query: "SELECT Payer, SUM(DISTANCE) AS dist FROM drive WHERE isActive= 1 AND Date BETWEEN ? AND ? GROUP BY Payer", values:[fuelSuperRaw[fuelSuperRaw.length -1].Date, fuelSuperRaw[0].Date]})

        fuelSuperRaw.shift()

        for(let entry of fuelSuperRaw){
            fuelData["super"][entry.Payer] += entry.Price;
        }

        for(let drive of superKilometer){
            driveData.distanceDriven["super"][drive.Payer] += drive.dist;
        }
    }

    await excuteQuery({
        query:"INSERT INTO abrechnung (distanceDrivenLPGCorgi, distanceDrivenLPGMinla,distanceDrivenLPGBoth,distanceDrivenSuperCorgi,distanceDrivenSuperMinla,distanceDrivenSuperBoth,lpgPayedByCorgi,lpgPayedByMinla,superPayedByCorgi,superPayedByMinla,shoppingCorgiPayed,shoppingCorgiDeptToMinla,shoppingMinlaPayed,shoppingMinlaDeptToCorgi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        values: [
            driveData.distanceDriven.lpg.corgi,
            driveData.distanceDriven.lpg.minla,
            driveData.distanceDriven.lpg.both,
            driveData.distanceDriven.super.corgi,
            driveData.distanceDriven.super.minla,
            driveData.distanceDriven.super.both,
            fuelData.lpg.corgi,
            fuelData.lpg.minla,
            fuelData.super.corgi,
            fuelData.super.corgi,
            shoppingData.corgi.sumPayed,
            shoppingData.corgi.dept,
            shoppingData.minla.sumPayed,
            shoppingData.minla.dept
        ]
    })
}
