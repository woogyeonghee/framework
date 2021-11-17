//modules
//const io = require('socket.io')(http);
const express  = require('express');
const app      = express();
const http     = require('http').Server(app);
const SerialPort = require('serialport');

//push msg
const FCM = require('fcm-node');
const serverKey = 
const token = 
const fcm = new FCM(serverKey);

const can_message = {
		to: token,
		notification: {
			title: 'Can Box Full',   //
			body: 'Can Box FULL'  
		},
		};
const bottle_message = { 
		to: token,
		notification: {
			title: 'bottle Box Full',   
			body: 'ºbottle Box Full' 
		},
		};

//serial
var can_Bool = false;
var bottle_Bool = false;

const sp = new SerialPort('/dev/sendUsbPort', {
  baudRate: 9600,
  parser: new SerialPort.parsers.Readline('\r\n')
});

sp.on('open', () => console.log('serialPort open'));
sp.on('data', (data)=>
{ 
	if(data == "C" && !can_Bool){	
		//io.emit('adc', adcValue);
		fcm.send(can_message, function(err, response){
			if (err) {
        			console.log("Something has gone wrong!");
			} else {
				console.log('full can box push msg...');
        			console.log("Successfully sent with response: ", 					response);
				can_Bool = true;
			}
		});
	}else if(data == "B" && !bottle_Bool){
		fcm.send(bottle_message, function(err, response){
			if (err) {
        			console.log("Something has gone wrong!");
			} else {
				console.log('full bottle box push msg...');
        			console.log("Successfully sent with response: ", 					response);
				bottle_Bool = true;
			}
		});
	}else if(data == "N" && can_Bool){
		can_Bool = false;
		console.log('empty box push msg...');
	}
	
});
//connect client
http.listen(3000, function() {
    console.log('listening on *:' + 3000);
});
