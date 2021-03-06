import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

// app.get('/', (req, res) => {
//     res.send('Welcome to Amazon Scrapper API')
// })
const app = express();
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const CONNECTION_URL = // enter your own mongodb username and password
const PORT = process.env.PORT|| 5001

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))