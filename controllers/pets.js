const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body)
    res.status(201).json(createdPet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router