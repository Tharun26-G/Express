const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

process.on("uncaughtException", (error) => {
    console.error(error)
    process.exit(1)
})

process.on("unhandledRejection", (reason,promise) => {
    console.log(reason)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//syn error
app.get('/sync-error', (req, res, next) => {
    try{
        throw new Error('Synchronous error! Something went wrong')
    } catch (error) {
        next(error)
    }
})

//async error
app.get('/async-error', async (req, res, next) => {
    try {
        await Promise.reject(new Error('Asynchronous error! Something went wrong'))
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    console.error(err.message)
    console.log(err.stack)
    res.status(500).json({message:err.message})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})