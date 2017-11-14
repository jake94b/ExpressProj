const routes = (app) => {
	app.route('/contact')
	.get((req, res) =>{
		//Middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request from: ${req.method}`)
		next();
},(req, res, next) => {
		res.send('GET request successful');
})
	.post((req, res) =>
		res.send('POST request successful'));

	app.route('/contact/:contactId')
	.put((req, res) =>
		res.send('Put request successful'))

	.delete((req, res) =>
		res.send('DELETE request successful'));
}

export default routes;


	
