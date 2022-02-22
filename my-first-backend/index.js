const express = require('express')
const app = express()
const port = 3003

// Api Spotify
// Songs
// CALLBACK
app.get('/v1/song', (req, res)=>{
  console.log("Called /v1/song");
  res.status(200).json([{name:"Around the world"},{name:"Dancing queen"},{name:"Los mensajes del WA"}])   
});

app.post('/v1/song', (req, res)=>{
  // Guardar nueva canción
  res.status(200).json({add_song:true});
});

app.delete('/v1/song', (req, res)=>{
  res.status(200).json({deleted_song: true});
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

