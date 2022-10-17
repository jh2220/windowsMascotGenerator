
const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('public'))
app.use(express.static('files'))

let count = 0;

const mascotsFiles = ['clippy', 'rover', 'merlin','bonzi','links','genie']

app.get('/', (req, res) => {

    //let randomMascot = mascotsFiles[Math.floor(Math.random() * mascotsFiles.length)]

  console.log(count, mascotsFiles.length);

  count++;

  if(count > (mascotsFiles.length - 1)){
    count = 0;
  }

  res.sendFile(path.join(__dirname, `mascots/${mascotsFiles[count]}.png`))

})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || "3000"}`)
})