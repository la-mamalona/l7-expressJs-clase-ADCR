const express = require('express')
const app = express()
const port = 3003
const callMyRouter = require('./routes/api');

// Methods required to extract req body info
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/v1', callMyRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

