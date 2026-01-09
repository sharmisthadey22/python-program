const express = require ('express');
const path = require ('path');
const fs = require();
const app = express ();

app.use (express.json ());
app.use (express.urlencoded ({ extended: true }));
app.use (express.static (path.join (__dirname, 'public')));
app.set ('view engine', 'ejs');


app.get ('/', function (req, res) {
   res.render ("chal raha hai");
});

app.get ("/profile/:username", function (req, res) {
   res.send(`welcome ${req.params.username}`);
});

app.get ("/profile/:username/:age", function (req, res) {
   res.send(`welcome ${req.params.username} and you are ${req.params.age}`);
});


app.get ('/about', function (req, res) {
    res.send ("about page hai ye");
});

fs.writeFile("hey.txt ", "hey hello kaise ho", function(err) {
    if(err) console.error(err);
    else console.log("done");
});


 app.listen (3000, function () {

    console.log ("its running ");
 });

        