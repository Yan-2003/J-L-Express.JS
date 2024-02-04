require('dotenv').config()
const express = require('express')
const Router = express.Router()

/* Define your routes */

/*****************************[Server Route]********************************/



Router.get('/', (req ,res)=>{
    /* this is the defult route */
    res.send("index")
})



/***************************************************************************/

module.exports = Router