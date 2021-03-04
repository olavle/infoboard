require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')

let i = 0

app.use(cors())
app.use(express.json())

app.get('/weather', (req, res) => {
  const weather = request(
    `api.openweathermap.org/data/2.5/weather?q=hiekkaharju&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=fi`,
    (error, res, body) => {
      console.log('res:', JSON.stringify(res))
      console.log('body:', JSON.stringify(body))
      return body
    }
  )
  res.json(weather.toJSON())
})

app.get('/download', (req, res, next) => {
  const file =
    '/home/eetu/projects/AwesomeProject/android/app/build/outputs/apk/release/app-release.apk'
  res.download(file)
})

app.get('/wateringday', (req, res, next) => {
  const isWateringDay = Math.random() > 0.5
  console.log(req.method)
  res.json({
    wateringDay: isWateringDay,
  })
})
app.get('/message', (req, res, next) => {
  const isWateringDay = Math.random() > 0.5
  console.log(req.method)
  console.log(new Date('2019-02-19T06:00:00Z').toString())
  setTimeout(() => {
    res.json({
      message: 'Message from server',
      i
    })
  }, 10000)
  i++
})

const port = process.env.PORT || 4002
app.listen(port, () => {
  console.log(`listening to ${port}`)
})

console.log(new Date().toString())