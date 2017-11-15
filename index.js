import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'bodyParser';
import routes from './src/routes/epRoutes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/epdb',{
	useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


app.get('/', (req, res) =>

	res.send(`Node and Express server is now running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);
