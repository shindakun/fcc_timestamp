/*
Example usage:
https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }
*/

'use strict';

const express = require('express');
let app = express();
let minDate = new Date('1970-01-01 00:00:01');
let maxDate = new Date('2038-01-19 03:14:07');

let formatDates = function (date) {
    let months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    
    let day = date.getDate();
    let year = date.getFullYear();
    
    return months[date.getMonth()] + ' ' + day + ', ' + year;
};

app.get('/', function (req, res) {
  let url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`<pre>
    Example usage:
        ${url}December%2015,%202015
        ${url}1450137600000
    Example output:
        { "unix": 1450137600, "natural": "December 15, 2015" }
      </pre>`);
});

app.get('/:date', function (req, res) {
    if ( (new Date(req.params.date).getTime() > 0) ) {
        let timestamp = new Date(req.params.date).getTime();
        res.json({
            unix: timestamp,
            natural: req.params.date
        });
    } else if (parseInt(req.params.date) > minDate && parseInt(req.params.date) < maxDate) {
        res.json({
            unix: parseInt(req.params.date),
            natural: formatDates(new Date(parseInt(req.params.date)))
        });
    } else {
        res.json({
            unix: null,
            natural: null
        });
    }
    res.end();
});
app.listen(process.env.PORT || 3000);
