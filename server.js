require('dotenv').config()
const express = require("express")

/* To run the server "npm run development" */

const PORT = process.env.PORT

const APP = express()
APP.use(express.static('./public'))

APP.use((req, res, next) => {
    console.log("\u001b[33;1m[J&L_Express]\u001b[0m~Server:[/"+ req.method+"] to URL : \u001b[92;1m"+ req.url +" \u001b[0m")
    next();
});



/* MAIN ROUTER  */
const MainRouter = require('./routers/Router')
APP.use('/', MainRouter)


/* API ROUTER */
const MainAPI = require('./routers/api/API')
APP.use('/api', MainAPI)


APP.listen(PORT , ()=>{
    console.log("\u001b[33;1m[J&L_Express]\u001b[0m~Server:Listening to port : \u001b[92;1m" +PORT +" \u001b[0m")
})









