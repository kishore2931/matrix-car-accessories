const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const nodemailer = require("nodemailer");
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
// const session = require('express-session');
// const { test } = require('picomatch');
path = require('path');
resolve = path.resolve;
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const firebaseApp = firebase.initializeApp(functions.config().firebase);
let transport = nodemailer.createTransport({
    service :"gmail",
    // host: "smtpout.secureserver.net",
    // port: 465,
    // secure: true, // true for 465, false for other ports
    auth: {
      user: "matrixcaraccessorieshelp@gmail.com",
      pass: "acpe wmyd mvps zlil"
    }
  });

app.get('/test2', async function (req, res) {
    output = { code: "0", msg: "test success!" }
    return res.json(output);
})

app.get('/', function(req ,res){
    res.render('index')
})
app.get('/contact', function(req ,res){
    res.render('contact')
})
app.get('/about', function(req ,res){
    res.render('about')
})
app.get('/product', function(req ,res){
    res.render('products')
})
app.get('/seat', function(req ,res){
    res.render('seat')
})
app.get('/speaker', function(req ,res){
    res.render('speaker')
})
app.get('/headlight', function(req ,res){
    res.render('headlight')
})
app.get('/steering', function(req ,res){
    res.render('steering')
})
app.get('/battery', function(req ,res){
    res.render('battery')
})
app.get('/spoilers', function(req ,res){
    res.render('spoilers')
})
app.get('/security_system', function(req ,res){
    res.render('security_system')
})
app.get('/car_wrap', function(req ,res){
    res.render('car_wrap')
})
app.get('/perfumes', function(req ,res){
    res.render('perfumes')
})
app.get('/mats', function(req ,res){
    res.render('floorMats')
})
app.get('/horn', function(req ,res){
    res.render('horn')
})
app.get('/infotainment', function(req,res){
    res.render('infotainment')
})
app.get('/alloywheel', function(req,res){
    res.render('alloywheel')
})
app.get('/armRester', function(req,res){
    res.render('armRester')
})
app.get('/wiper', function(req,res){
    res.render('wiper')
})
app.post("/sendMail",function(req,res){

    res.set('Cache-Control', 'public, max-age=600, s-maxage=6000');
      var mailOptions1={
        from: '"Matrix Car Accessories" <matrixcaraccessorieshelp@gmail.com>',
        to: "kishoreselvam989@gmail.com",
        subject: "New Enquiry",
        html: '<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'+
        '<div style="background-color: #FFE300; text-align: center;padding:20px;">'+
        '<a  href="https://candyrelation.com" style="font-size: 3rem; font-family: '+'Bebas Neue'+'; text-decoration : none; color:#000000";>Matrix Car Accessories</a></div>'+
        '<div style=" text-align: center;padding:25px; color:#000000; ">'+
        '<h3 style="text-align:center; margin-top:30px; font-family: '+'Montserrat'+', sans-serif;">Hi Matrix Car Accessories, We have new Request!</h3>'+
        '<h1 style="text-align:center; margin-top:30px;font-family: '+'Montserrat'+', sans-serif;">General Enquiry</h1>'+
        '<p style="text-align:center; margin-top:30px; margin-bottom:30px; font-family: '+'Montserrat'+', sans-serif;">Message from Client: '+req.body.messageBox+'</p>'+
        '<h2 style="text-align:center; margin-top:30px; font-family: '+'Montserratt'+', sans-serif;">Contact Details</h2>'+
        '<p style="text-align:center; margin-top:20px; font-family: '+'Montserrat'+', sans-serif;">Client Name:  '+req.body.userName+'</p>'+
        '<p style="text-align:center; margin-top:20px; font-family: '+'Montserrat'+', sans-serif;">Client Mail Id:  '+req.body.emailAddress+'</p></div>'
      }
      var mailOptions={
        from: '"Matrix Car Accessories" <matrixcaraccessorieshelp@gmail.com>',
        to: req.body.emailAddress,
        subject: "Welcome to Matrix Car Accessories",
        html: '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'+
        '<div style="background-color: #c7f5ff; text-align: center;padding:20px;">'+
        '<a  href="https://candyrelation.com" style="font-size: 3rem; font-family:"Roboto" text-decoration : none; color:#ffabe5;">Matrix Car Accessories</a></div>'+
        '<div style=" text-align: center;padding:25px; color:#000000; font-family: '+'Roboto";>'+
        '<h3 style="text-align:center; margin-top:30px;">Greetings from Matrix CAr Accessories</h3>'+
        '<p style="text-align:center; margin-top:20px;"> We have received your request, we will contact you soon.</p></div>'+
        '<div style="background-color: #c7f5ff; text-align: center;padding:15px; margin-top:60px;">'+
        '<h3 style="text-align:center; margin-top:20px;"> Follow us on Social media </h3>'+
        '<div class="col" style="text-align:center; margin-top:10px;">'+
        '<a  href="https://www.facebook.com/Candy-Relation-109125174080679/" style="font-size: .85rem; text-decoration : none; color:#ffabe5; margin-right:10px;">facebook</a>'+
        '<a  href="https://www.instagram.com/candyrelation/" style="font-size: .85rem; text-decoration : none; color:#ffabe5; margin-right:10px; margin-left:10px;">Instagram</a>'+
        '<a  href="https://pin.it/32bB4t1" style="font-size: .85rem; text-decoration : none; color:#ffabe5; margin-left:10px;">Pintrest</a></div></div>'
      }
      
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
  
  transport.sendMail(mailOptions1, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
  });
    res.render("confirmation");
  });
exports.app = functions.https.onRequest(app);

app.listen(3000, function () {
    console.log("Server started on port 3000");
});