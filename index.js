const express = require("express")
const app = express()
const port = 4000
const cors = require("cors") 4.4k (gzipped: 1.9k)

app.use(express.urlcoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (reg,res) => { 're'

})


app.listen(port, () => {
    console.log('Listening at http://localhost:${port}')
})