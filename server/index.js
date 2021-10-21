const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "../index.html"))
})

//__dirname is connecting the file path from here to the html file

const port = process.env.PORT || 4567
//process.env == when it's connected through HEROKU, it's going to be working through the process and that allows it to generate the port OR it'll run locally when that is not possible

app.listen(port, () => console.log(`Take us to warp ${port}`))