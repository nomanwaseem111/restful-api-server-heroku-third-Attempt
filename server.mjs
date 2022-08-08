import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

let user = [];

app.post('/user', (req, res) => {
    
    console.log(req.body);
 
     user.push(req.body)

    
    res.send('User Created')

  })

app.get('/user', (req, res) => {
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})