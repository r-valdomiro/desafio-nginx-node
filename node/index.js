const express = require('express')
const random_name = require('node-random-name')
const app = express()
const port = 3000

const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.listen(port, () => {
	console.log('NodeJS rodando na porta: ' + port)
})

app.get('/', (req, res) => {	
	var sqlInsert = `INSERT INTO PEOPLE(NAME) VALUES('` + random_name() + `')`
	connection.query(sqlInsert)

	var sqlSelect = `SELECT NAME FROM PEOPLE`	
	var resultList = ''

	connection.query(sqlSelect, function(err, result, fields) {
		Object.keys(result).forEach(function(key) {
			resultList = resultList + '<li>' + result[key].NAME + '</li>'
		})

		res.send('<h1>Full Cycle Rocks!</h1><ul>' + resultList + '</ul>')
	})
})