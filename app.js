const express = require('express')

const app = express()

app.use(express.static('./dist'))

app.listen(3331, () => {
    console.log('朝日头条启动: http://127.0.0.1:3331')
})