import express from 'express';

const app =  express();

//# /hello
app.get('/hello', (req, res) => {
	res.send('Hello');
})
const port=8000
app.listen(port, () => {
	console.log('➜  Local:   http://localhost:' + port)
	console.log('➜  Local:   http://localhost:' + port + '/hello')
})

