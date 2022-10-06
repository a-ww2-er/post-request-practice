const express = require('express');
const path = require('path');
const app = express()
const port = process.env.PORT || 5000;
//const users = require('./data');

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routez
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})
app.get('/index', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './public/homepage.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, './public/signup.html'))
})
app.post('/signup', (req, res) => {
    let body = req.body;
   // let username = users.users.find((username) => username.name);
  //  const password = users.users.map((passwor) => passwor.password);
    //let jss = JSON.stringify();

    //  if (username.name === body.name || password.name === body.password) {
    switch (body.name, body.password) {
        case "jack", "1234":
            console.log(req.body);
            return res.status(200).sendFile(path.resolve(__dirname, './public/loginmessage.html'));
            break;
        case "mike", "123456":
            console.log(req.body);
            return res.status(200).sendFile(path.resolve(__dirname, './public/loginmessage.html'));
            break;
        case "king", "1234":
            console.log(req.body);
            return res.status(200).sendFile(path.resolve(__dirname, './public/loginmessage.html'));
            break;
        case "joseph", "1111":
            console.log(req.body);
            return res.status(200).sendFile(path.resolve(__dirname, './public/loginmessage.html'));
            break;
        default:
            res.status(400).send(`<body style="background-color:red; background-size:cover"><h2 style="background-size:cover;position:absolute;top:10%;left:40%;right:40%;font-family:Trebuchet MS;line-height:40px;text-align:center;">LOGIN UNSUCESSFUL!! "${body.name}" is not a user, please provide a valid username and password</h2></body>`)
            console.log(username)
            console.log(password)
            console.log(body.name)
    }
    // console.log(users);
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});
