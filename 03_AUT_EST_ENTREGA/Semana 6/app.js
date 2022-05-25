const express = require('express'); 
const app = express();

var cors = require('cors');
app.use(cors());

const hostname = '127.0.0.1';
const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'BancoDeDadosCurriculo.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.json());

app.post('/userEmail', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    const {emailUser, messageUser} = req.body
    console.log(emailUser, messageUser)

	sql = `INSERT INTO email (emailUser, messageUser) VALUES (${emailUser}, ${messageUser})`;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
    console.log(db)
	db.run(`INSERT INTO email (emailUser, messageUser) VALUES ("${emailUser}", "${messageUser}");`,  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

app.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
  })