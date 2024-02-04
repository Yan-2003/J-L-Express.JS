require('dotenv').config()
const express = require('express')
const API = express.Router()

/* Define your routes */

/*****************************[API Route]********************************/



API.get('/', (req ,res)=>{
    /* this is the defult route */
    res.json({"name" : "J&L ExpressJS" , "version" : "v1.0.0" , "message" : "welcome to J&L ExpressJS this is a Express Framework made by Julliane for Small Web and API development."})
})



/***********************************************************************/

module.exports = API