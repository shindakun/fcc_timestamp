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
app.get('/:date', function (req, res) {
    console.log(req.params.date);
    if ( (new Date(req.params.date).getTime() > 0) ) {
        let timestamp = new Date(req.params.date).getTime();
        //console.log(new Date(req.params.date).getTime());
        res.json({
            unix: timestamp,
            natural: timestamp
        });
    }
    res.end();
});
//app.listen(process.env.PORT || 3000);
app.listen(3000);
