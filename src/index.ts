import express, { Application } from "express"
import router from "./routes"


const PORT = process.env.PORT || 8000

const app: Application = express()

app.use(router)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
