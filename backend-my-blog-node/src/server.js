import express from 'express';

const app =  express();
// add middleware

// json
app.use(express.json());

//# /hello
app.get('/hello', (req, res) => {
	console.log(req.body);
	res.send('Hello!');
})
app.post('/hello', (req, res) => {
	res.send('Hello ${req.body.name}');
})
app.get('/hello:name', (req, res) => {
	const { name } = req.params;
	res.send('Hello ${name}');
})
const port=8000
app.listen(port, () => {
	console.log('➜  Local:   http://localhost:' + port)
	console.log('➜  Local:   http://localhost:' + port + '/hello')
})

