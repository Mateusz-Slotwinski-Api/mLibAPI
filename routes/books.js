const express = require('express')
const router = express.Router()

const config = require('../config/config')
const actions = require('../actions/books')

router.get('/', actions.show)
router.post('/', actions.register)
router.delete('/' + config.code, actions.drop)

module.exports = router
