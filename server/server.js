const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 1313

app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => console.log(`App is liteninng at ${PORT}`))
