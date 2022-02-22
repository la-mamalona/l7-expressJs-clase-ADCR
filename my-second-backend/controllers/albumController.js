exports.getAllAlbums=[
  (req, res)=>{
    console.log("GET /v1/album");
    res.status(200).json([{name:"Interstellar"},{name:"ABBA Best Hits"},{name:"Reloaded"}]);
  }
];

exports.createAlbum=[
  (req, res)=>{
    console.log("POST /v1/album");
    // Guardar nuevo album
    res.status(200).json({add_album: true});
  }
];

exports.deleteAlbum=[
  (req, res)=>{
    console.log("DELETE /v1/album");
    // Borrar album
    res.status(200).json({delete_album: true});
  }
];
