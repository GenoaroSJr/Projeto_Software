const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("reportes/index");
})

module.exports = router