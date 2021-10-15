import express from 'express'
import housesController from '../controllers/housesController'

const router = express.Router()

router.get('/get-houses', async (_req, res) => {
  const controller = new housesController()
  const houseList = await controller.getList()

  res.send({
    message: houseList
  })
})

export default router
