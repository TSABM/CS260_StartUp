//canvas operation
const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d')

canvas.width = 480
canvas.height = 270


//now to create canvas objects
class Sprite{
    //constructs sprite
    constructor(position){
        this.position = position
    }
    //drawing the sprite
    draw(){
        canvasContext.fillStyle = "blue"
        canvasContext.fillRect(this.position.x, this.position.y, 50, 50)
        let username = localStorage.getItem("userName")
        let name = "no username detected"
        if(username){
            name = username
        }
        canvasContext.fillText("your name is: " + name, 100, 100)
    }
}


//creating player sprite
const player = new Sprite({
    x:0,
    y:0
})

player.draw()

console.log(player)

window.addEventListener('keydown', (event) => { 
    console.log(event.key)
})

//Add timer start and stop during game run time. A canvas button will start the game and death will end it.

//Canvas Operation


//Chat
window.addEven
function sendMessage(){
    var ul = document.getElementById("chatLog");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("chatInput").value));
    ul.appendChild(li);
}


//Chat