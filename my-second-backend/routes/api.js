const myExpress = require('express');
const myRouter = myExpress.Router();
const mySongController =require('../controllers/songController');
const myArtistController = require('../controllers/artistController');
const myAlbumController = require('../controllers/albumController');

// Songs
myRouter.get('/song/:idSong', mySongController.getSongDetail);
myRouter.get('/song', mySongController.getAllSongs);
myRouter.post('/song', mySongController.createSong);
myRouter.delete('/song', mySongController.deleteSong);

// Artists
myRouter.get('/artist', myArtistController.getAllArtists);
myRouter.post('/artist', myArtistController.createArtist);
myRouter.delete('/artist', myArtistController.deleteArtist);

// Albums
myRouter.get('/album', myAlbumController.getAllAlbums);
myRouter.post('/album', myAlbumController.createAlbum);
myRouter.delete('/album', myAlbumController.deleteAlbum);

module.exports = myRouter;



/*
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

// Artists
app.get('/v1/artist', (req, res)=>{
  res.status(200).json([{name:"Daft Punk"},{name:"ABBA"},{name:"Cartel de santa"}])   
});

app.post('/v1/artist', (req, res)=>{
  // Guardar nuevo artista
  res.status(200).json({add_artist:true});
});

app.delete('/v1/artist', (req, res)=>{
  res.status(200).json({delete_artist: true});
});

// Albums
app.get('/v1/album', (req, res)=>{
  res.status(200).json([{name:"Interstellar"},{name:"ABBA Best Hits"},{name:"Reloaded"}])   
});

app.post('/v1/album', (req, res)=>{
  // Guardar nuevo album
  res.status(200).json({add_album:true});
});

app.delete('/v1/album', (req, res)=>{
  res.status(200).json({deleted_album: true});
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
