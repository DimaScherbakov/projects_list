var app = require("./app")

var PORT = 8080;

var cur_user; // user of current session


app.listen(PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${PORT}`)
})