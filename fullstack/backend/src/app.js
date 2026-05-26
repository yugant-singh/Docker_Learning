import express from 'express'
import morgan from 'morgan'
app.use(morgan('dev'))
import cors from 'cors'
const app = express()
app.use(cors({
  origin: 'http://localhost:5173'

}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' })
})
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]
  res.json({ users })
})

export default app