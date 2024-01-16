const router = require('express').Router();

router.get('/', (req,res) => {
    console.log("call root path");
    res.render('login');
})

module.exports = router;