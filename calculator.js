const express = require("express");
const app = express();


app.use(express.static(__dirname));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("server is running sir");
});
 