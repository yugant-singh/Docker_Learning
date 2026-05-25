import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data from the server.' })
})

export default app