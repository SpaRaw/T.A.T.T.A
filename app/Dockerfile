
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stufe 2: Ausführen der Anwendung in einem schlankeren Image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]