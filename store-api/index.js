import express from 'express';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Cross-origin resource sharing
// A mechanism that allows restricted reources on a web page to be accessed 
// from another domain outside the domain from which the first resource was served
app.use(cors()); 

app.listen(3001, () => { console.log("Server started at port 3001")});

router(app);
  