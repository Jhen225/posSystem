var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});
// for(var i = 0; i < 5; i++){
//     socket.emit('placeOrder',{item:'cheeseburger'});    
// }

// setInterval(()=>{
//     socket.emit('placeOrder',{item:'cheeseburger'});
// },1000);

socket.on('order',(data)=>{
    var para = document.createElement('p')
    var text = document.createTextNode(JSON.stringify(data))
    para.appendChild(text);
    document.getElementById('message').appendChild(para)
    console.log(data);
    sendOrder({item:'cheeseburger'});
})

let sendOrder = (item) => {
    console.log('here')
    socket.emit('placeOrder',item);
}
