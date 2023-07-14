const express = require('express');
const path = require('path');

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

app.listen(3000);