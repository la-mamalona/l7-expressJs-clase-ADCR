# ExpressJs Introduction

Follow the instructions in https://expressjs.com/en/starter/installing.html

# First class content
## Or simply
```bash
$ mkdir my-first-backend
$ cd my-first-backed
```

```bash
$ npm init
```

```bash
$ npm install express --save
```

```bash
$ touch index.js
```

```javascript 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

```bash
$ node index.js
```

# Second class content
## Create my-second-backend

```bash
mkdir my-second-backend
cd my-second-backend
npm init
npm install express --save
touch index.js
```


In controllers/SongController.js
```javascript
exports.getAllSongs = [
  (req, res)=>{
    res.status(200).json({reached:true});
  }
];
```


In routes/api.js
```javascript
const express = require('express');
const router = express.Router();
const SongController = require('../controllers/SongController');

router.get("/test", SongController.getAllSongs);

module.exports = router;
```

In index.js
```javascript
const routes = require('./routes/api');
app.use('/api', routes);
``` 

# Third class content
https://expressjs.com/en/4x/api.html#req.query         
https://expressjs.com/en/4x/api.html#req.body         
https://expressjs.com/en/4x/api.html#req.params        


req.headers      
req.query   <- get url param       
              app.use(express.json());        
              app.use(express.urlencoded({extended:false}));      
req.body    <- raw and x-www-form-encodedurl       
req.params  <- url section /:       

