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
async function loadScores(){ // need to grab scores from server... and store locally for the game
    var scores = []
    try{
        const response = await fetch('/api/scores');
        scores = await response.json(); //grabbing json scores

        localStorage.setItem('scores', JSON.stringify(scores)); //reading json and loading into local
        //fixme need to set "my Score" now
    }
    catch{
        //if errror just use last scores stored in local Storage
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          scores = JSON.parse(scoresText);
        }
    }

}

async function storeScore(score){ //need to send scores to server
    const userName = this.getPlayerName();
    const newScore = {name: userName, score: score};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
}
//should handle updating local scores. rn only the 10 highest get stored...
function updateScoresLocal(newScore){
    let scores = []
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }   

    localStorage.setItem('scores', JSON.stringify(scores));
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