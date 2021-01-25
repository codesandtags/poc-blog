const express = require('express');

const app = express();

app.get('/', (req, res) => {

})

app.post('/post', (req, res) => {

});

app.listen(4000, () => {
    console.log('Listening on 4000')
})