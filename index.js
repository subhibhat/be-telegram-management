import express from 'express'
import bodyParser from 'body-parser'

import group from './routes/group.js'
import user from './routes/user.js'

const app = express()
const port = 6969

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', user)
app.use('/groups', group)

app.listen(port, () => {
  console.log(`Application Running On Port: ${port}`)
})
