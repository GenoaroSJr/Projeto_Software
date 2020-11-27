const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("ordemServico/index");
})

module.exports = router