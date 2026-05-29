import express from 'express'
import morgan from 'morgan'
const app = express()
app.use(morgan('dev'))
import cors from 'cors'

app.use(cors({
  origin: 'http://localhost:5173'

}))

app.use(express.static('public'))
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
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


export default app