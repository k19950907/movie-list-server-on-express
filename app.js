const express = require("express")
const {engine} = require("express-handlebars")
const path = require("path")
const app = express()
const port = 3000

app.engine(".hbs", engine({extname: ".hbs"}))
app.set("view engine", ".hbs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.redirect("/movies")
})

app.get("/movies", (req, res) => {
  res.render("index")
})

app.get("/movie/:id", (req, res) => {
  const id = req.params.id
  res.send(`read movie: ${id}`)
})

app.listen(port, () => {
  console.log("express app running on `http://localhost:${port}`")
})