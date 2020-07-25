const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());



app.post('/test', (req, res) => {
     const stringToCut = req.body.string_to_cut;
     let x = 2;
     let interval = 3;
     let values = [];
     while(x < stringToCut.length)
     {
         values.push(stringToCut[x])
         x += interval
     }
     const cutstring = values.join('')
     const result = {
        return_string: cutstring
     };

     return res.send(JSON.stringify(result));
  
});

app.listen(8081, () =>
    console.log('listening'));