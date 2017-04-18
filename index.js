'use strict';

const express = require('express');
let app = express();
app.get('/home', function (req, res) {
    res.end('Hello World!');
});
app.listen(process.env.PORT || 3000);
