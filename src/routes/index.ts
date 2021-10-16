import express from 'express'
import cors from 'cors'
import housesController from '../controllers/housesController'

const router = express.Router()

const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  preflightContinue: false,
}

router.use(cors(corsOptions))

router.get('/get-houses', async (_req, res) => {
  const controller = new housesController()
  const houseList = await controller.getList()

  res.send({
    message: houseList
  })
})

export default router
