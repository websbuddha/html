var express=require('express');
var nodemailer=require('nodemailer');
var bodyParser=require('body-parser');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'srikarthikjoy@gmail.com',
        pass: 'madheswarik'
    }
});
var app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.post('/email', function (req, res) {
	var mailOptions = {
	    from: 'Karthikeyan  <srikarthikjoy@gmail.com>',
	    to: 'karthikeyan.g.wiredelta@gmail.com, strajan03@gmail.com, yugubsc@gmail.com, buddhawebsofficial@gmail.com', 
	    subject: 'Client',
	    html: 'Name:' +req.body.name+ '<br>Email:' +req.body.client+ '<br>Message:'+req.body.message+ '',
	};
	console.log(mailOptions);
	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
	});
})
app.listen(3000);
console.log("listen 3000");