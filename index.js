const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// // Example route for getting data from an API
// app.get('/api/data/:id', (req, res) => {
//   // Check if the id is valid
//   if (!isValidId(req.params.id)) return res.status(400).send({ error: 'Invalid ID   ' })

//   // Delay response by 1 second to simulate server latency  
//   setTimeout(() => {
//     res.send(`Data for ${req.params.id}`)
//   }, 1000)
// })

// function isValidId(id) {
//   // A very simple validation check - in a real-world scenario you would want much more robust checks
//   return !isNaN(parseInt(id)) && parseInt(id) > 0
// }

// // Start Express on the specified port - default is 3000 but can be changed here
// app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})