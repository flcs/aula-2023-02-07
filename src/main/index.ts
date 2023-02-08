import express from "express";

import { routes as minhas_rotas } from "./routes";

const app = express()
app.use(express.json())
app.use(minhas_rotas)

app.listen(3000, () => {
    console.log('na 3000')
})
