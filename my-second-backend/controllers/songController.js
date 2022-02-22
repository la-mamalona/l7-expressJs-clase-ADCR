let songCollection = [{name:"Around the world"},{name:"Dancing queen"},{name:"Los mensajes del WA"}];

exports.getAllSongs=[
  (request, response)=>{
    console.log("GET /v1/song");
    console.log(request.query);
    //console.log(request.query.query);
    //console.log(request.query.user_age);
    if(request.query.user_age < 18){
      return response.status(200).json({age_verification:false});
    }
    return response.status(200).json(songCollection)
  } 
];

exports.createSong=[
  (req, res)=>{
    console.log("POST /v1/song");
    console.log(req.body);
    // Guardar nueva canción
    songCollection.push({name:req.body.song_name});
    res.status(200).json({add_song:true, song_collection: songCollection});
  }
];

exports.deleteSong=[
  (req, res)=>{
    console.log("DELETE /v1/song");
    // Borrar canción
    res.status(200).json({deleted_song: true});
  }
]
