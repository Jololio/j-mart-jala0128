const express = require('express')
require("dotenv").config()
const app = express()
const cors = require('cors')
const {PORT} = process.env
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

app.use(express.json())
app.use(cors())

app.get('/allItems', (req, res) => {
    sequelize.query(`
    SELECT * FROM items;
    `).then((dbRes) => {res.send(dbRes[0])})
})

app.listen(PORT, console.log(`RUNNING ON PORT ${PORT}`))