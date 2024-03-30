'use client';
import {useState} from "react";

async function getData(){
    //const data = await fetch("http://localhost:3000/api/test")
    let data = {
        days: [
            {
                day: "10011",
                entrys:[
                    {
                        id: 1,
                        driver: "Minla",
                        name: "KFC Food holen",
                        distance: 19.80,
                        paying: 3
                    },
                    {
                        id: 1,
                        driver: "Minla",
                        name: "KFC Food holen",
                        distance: 19.80,
                        paying: 3
                    }
                ]
            },
            {
                day: "1034",
                entrys:[
                    {
                        id: 4,
                        driver: "Corgi",
                        name: "Lorem ipsum",
                        distance: 41.1,
                        paying: 1
                    }
                ]
            }
        ]
    }
    return data
}
export default async function DrivePage(){
    const data = await getData()
    console.log(data)
    return(
        <p> "ji"</p>
    )
}