const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
const { routes } = require("./routes")
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())

app.use(morgan('combined'))

const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})