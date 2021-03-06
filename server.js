const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require("morgan");
const flash = require('connect-flash');
const router = express.Router();
// const colors = require("colors");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const session = require("express-session");
// const passport = require("passport");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use('uploads',express.static('uploads'));
app.use(flash())
app.use(express.static("public"));
// app.use(session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
});

app.use("/App",router);

app.listen(PORT, function(){
    console.log(`🌎 ==> server now on port ${PORT}!`)
})

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactfolio", { useNewUrlParser: true }, function(err) {
//     if (err) throw err;
//     console.log(`mongoose connection successful`.yellow);
//     app.listen(PORT, (err)=> {
//         if (err) throw err;
//         console.log(`connected on port ${PORT}`.cyan)
//     });
// });



