const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

app.post('/slack', function (req, res) {

    const { type, event } = req.body;

    if (type === 'challenge') {

    } else if (type === 'event_callback') {
        // 内容ダンプ
        if (event.channel === "C01A0CB9XV3") {
            console.log(type, event, `emitting message:${event.text}`);
            io.emit('message', event.text);
        } else {
            // console.log(event.channel, event.text);
            // とりまぜんぶ
            io.emit('message', event.text);
        }
    }
 
    res.status(200).json(req.body);

});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // res.status(200).json("{}");
});

http.listen(PORT, function () {
    console.log('server listening. Port:' + PORT);
});

