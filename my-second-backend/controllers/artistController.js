exports.getAllArtists = [
  (req, res)=>{
    console.log("GET /v1/artist");
    res.status(200).json([{name:"Daft Punk"},{name:"ABBA"},{name:"Cartel de santa"}]);
  }
];

exports.createArtist=[
  (req, res)=>{
    console.log("POST /v1/artist");
    // Guardar nuevo artista
    res.status(200).json({add_artist: true});
  }
];

exports.deleteArtist=[
  (req, res)=>{
    console.log("DELETE /v1/artist");
    // Borrar artista
    res.status(200).json({delete_artist:true});
  }
];
