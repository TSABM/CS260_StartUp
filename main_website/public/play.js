//canvas operation
//const canvas = document.querySelector('canvas');
//const canvasContext = canvas.getContext('2d')

//canvas.width = 480
//canvas.height = 270


//now to create canvas objects
/*
class Sprite{
    //constructs sprite
    constructor(position, velocity){
        this.position = position
        this.velocity = velocity
    }
    //drawing the sprite
    draw(){
        canvasContext.fillStyle = "blue"
        canvasContext.fillRect(this.position.x, this.position.y, 50, 50)
        let username = localStorage.getItem("userName")
        console.log(username)
        let name = "no username detected"
        if(username){
            name = username
        }
        canvasContext.fillText("your name is: " + name, 100, 100)
    }
    update(){
        this.draw()
        //update the position here
    }
}
*/

//scores
async function loadScores(){
    var scores = []
    try{

    }
    catch{

    }

}

function increaseScore(){
    var currScore = localStorage.getItem("myScore")
    if (currScore == null){
        currScore = 0
    }
    currScore += 1
    localStorage.setItem("myScore", currScore);
}
function decreaseScore(){
    var currScore = localStorage.getItem("myScore")
    if (currScore == null){
        currScore = 0
    }
    currScore -= 1
    localStorage.setItem("myScore", currScore);
}

function updateScore(){

}


//creating player sprite
/*
const player = new Sprite({
    position:{
    x:0,
    y:0
    },
    velocity:{
        x:0,
        y:0
    }
})
const projectile = new Sprite({
    position:{
    x:500,
    y:0
    },
    velocity:{
        x:0,
        y:0
    }
})

//animation

function animate(){
    window.requestAnimationFrame(animate)
    player.update()
}

player.draw()

console.log(player)

window.addEventListener('keydown', (event) => { 
    console.log(event.key)
})

//Add timer start and stop during game run time. A canvas button will start the game and death will end it.

//Canvas Operation
*/

//Chat
//window.addEven
function initPlayerName(){
    var nameEl = document.getElementById("playerName");
    nameEl.textContent = localStorage.getItem("userName") ?? "no name";
}
function sendMessage(){
    var ul = document.getElementById("chatLog");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("chatInput").value));
    ul.appendChild(li);
}


//Chat