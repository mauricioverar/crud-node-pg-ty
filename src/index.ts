import express from 'express' // npm i @types/express -D

const app = express()

import indexRoutes from './routes/index'

// middlewares
app.use(express.json()) // convertir formato json a objeto
app.use(express.urlencoded({extended: false})) // se configura uso de formularios para convertir a obj json

app.use(indexRoutes)

const port: number = 3000

console.log('hola ty')

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`)
})

// ejecutar
// npm run dev

// cuando esta terminado, para convertirlo a js
// npm run build

// se podra ejecutar version js con
// node dist/index.js