const express = require('express')
const mysql = require('mysql')

const app = express()

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

app.get("/", (req, res) => {
  const sqlQuery = `INSERT INTO people (name) VALUES ('Cauã')`
  connection.query(sqlQuery)

  return res.send("Hello World!")
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})