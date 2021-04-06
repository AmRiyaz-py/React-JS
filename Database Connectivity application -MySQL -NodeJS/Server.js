
const express = require('express');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jerry',
    database: 'classicmodels'
});

const app = express()
const port = 3001

//helps accepting data
app.use(express.json({ extended: false }))


//frontend is requesting and backend is receiving and it will send back the response to frontend
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//frontend is requesting and backend is receiving and it will send back the response to frontend
app.get('/react', (req, res) => {
    res.send('Hello Jerry!')
})
//rout
app.post('/ammar', (req, res) => {
    console.log('checking serverBody', req.body)
    

    //Connecting to the database.
        //changing this for showing proper error msg in the validation part
        con.query(req.body.queryy, function (err, result) {
            console.log("execute", err, result)
            if (err) {
                console.log("Query", err);
                res.send({success: false, error: err.sqlMessage})
               
            }
            else {
                console.log("result", result)
                res.send({success : true ,result : result })
            }
        });
    });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
)
