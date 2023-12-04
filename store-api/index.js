import express from 'express';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.listen(3001, () => { console.log("Server started at port 3001")});

router(app);
  