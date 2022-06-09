const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const DBPATH = './BancoDeDadosCurriculo.db'

app.use(express.json())

app.use(express.static('.'))


app.get('/email', async (req, res) => {
	try{
		const db = await open({ filename: DBPATH, driver: sqlite3.Database }) // Abre o banco

		const emails = await db.all(`SELECT * FROM email`)

		await db.close() // Fecha o banco
		res.send(emails)
	} catch(err){
		res.status(400).send(err.message)
	}
})

app.post('/email/create', async (req, res) => {
    try {
        const { emailUser, messageUser } = req.body
		console.log(req.body)

        const db = await open({ filename: DBPATH, driver: sqlite3.Database }) // Abre o banco

        await db.run(`INSERT INTO email (emailUser, messageUser) VALUES ("${emailUser}", "${messageUser}");`)

        await db.close() // Fecha o banco
        res.send()
    } catch (err) {
        res.status(400).send(err.message)
    }
})

app.patch('/email/:id', async (req, res) =>{
	try{
		const id = req.params.id
		const { emailUser} = req.body
		console.log(req.body)

		const db = await open({ filename: DBPATH, driver: sqlite3.Database }) // Abre o banco
		await db.run(`UPDATE email SET emailUser = "${emailUser}" WHERE id = "${id}"`)
		await db.close()
		res.send()
	} catch (err) {
        res.status(400).send(err.message)
    }
})

app.delete('/email/:id', async (req, res) => {
	try{
		const id = req.params.id

		const db = await open({ filename: DBPATH, driver: sqlite3.Database }) // Abre o banco
		await db.run(`DELETE FROM email WHERE id = '${id}'`) 
		await db.close()

		res.send()
	} catch(err){
		res.status(400).send(err.message)
	}
})

app.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
})


// Read /email
// Create /email/create
// Edit /email/:id
// Delete /email/:id
