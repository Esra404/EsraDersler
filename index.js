const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };

  res.sendFile("index.html", options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("İşlem Başarılı");
    }
  });
});

app.get('/about',(req,res)=>{

    const options = {
        root: path.join(__dirname)
    }


    res.sendFile("about.html", options, function (err){
        if(err){
            next(err);
        }else{
            console.log("İşlem Başarılı");
        }
    });
});

app.get('/dbtest',(req, res)=>{
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'todolist'

    });
    connection.connect();

    connection.query(
      "SELECT * FROM todolist",
      // function (error, results, fields) {
      //   if (error) throw error;
      //   console.log(results);
      //   //res.send('<h1>Veri tabanı bağlantısı başarılıdır.</h1><br/>' + results[0])
      //   res.render('sample_data.ejs',{title:'Nodejs Mysql Connection Test', action:'list', sampleData:data})
      // }

      function(error, data){
        if(error){
          throw error;
        }else{
          res.render('sample_data.ejs', {title:'MySQL Nodejs Connection Test', sampleData:data})
        }
      }
    );

    connection.end();
})

app.listen(3000);