import {addNewcontact, getContacts. getContactWithID } from '../controllers/epController';

const routes = (app) => {
	app.route('/contact')
	.get((req, res) =>{
		//Middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request from: ${req.method}`)
		next();
}, getContacts)
	.post(addNewcontact);

	app.route('/contact/:contactId')

	.get(getContactWithID)


	.put((req, res) =>
		res.send('Put request successful'))

	.delete((req, res) =>
		res.send('DELETE request successful'));
}

export default routes;


	
