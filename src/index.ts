import express from 'express';
import indexRoutes from './routes/index'

const PORT = 3000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

app.listen(PORT, () => {
    console.log('Server on port', PORT)
});