const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);


//scores
async function loadScores(){ // need to grab scores from server... and store locally for the game
    localStorage.setItem("myScore", 0);
    var scores = []
    try{
        const response = await fetch('/api/scores');
        scores = await response.json(); //grabbing json scores

        localStorage.setItem('scores', JSON.parse(scores)); //reading json and loading into local
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
    const userName = localStorage.getItem('userName') ?? 'Mystery player'; //not a function
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
    var currScore = parseInt(localStorage.getItem("myScore"))
    if (currScore == null || currScore == "NaN"){
        currScore = 0
    }
    currScore += 1
    localStorage.setItem("myScore", currScore);
    storeScore(currScore)
}
function decreaseScore(){ //problem this aint working, data retrieved isnt ints I dont think check if json
    var currScore = parseInt(localStorage.getItem("myScore"))
    if (currScore == null || currScore == "NaN"){
        currScore = 0
    }
    currScore -= 1
    localStorage.setItem("myScore", currScore);
    storeScore(currScore)
}



//Chat
//window.addEven
function initPlayerName(){
    var nameEl = document.getElementById("playerName");
    nameEl.textContent = localStorage.getItem("userName") ?? "no name";
}



//Chat
/*
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('chatLog', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }
  */
/*
displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }
  */
/*
broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }
*/
//

//FIXME

// Adjust the webSocket protocol to what is being used for HTTP


// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  //document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chatBox').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.getElementById("chatInput");
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = localStorage.getItem("userName") ?? "no name";
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

//old send message
/*
function sendMessage(){
    var ul = document.getElementById("chatLog");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("chatInput").value));
    ul.appendChild(li);
}
*/

// Create one long list of messages
function appendMsg(cls, from, msg) {
  //const chatText = document.querySelector('#chat-text');
  var ul = document.getElementById("chatLog");
  var li = document.createElement("li");
  /*
  chatText.innerHTML =
    `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
    chatText.innerHTML;
    */
    li.appendChild(document.createTextNode(`"name":"${from}", "msg":"${msg}"`));
    ul.appendChild(li);
}

//FIXME

//configureWebSocket()
//Verify this works
const chatControls = document.querySelector('chatInput');
const myName = localStorage.getItem('playerName');
//upon loading the page checking if my name == no name and disabling chat if so
chatControls.disabled = myName.value === 'no name';