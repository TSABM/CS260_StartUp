//creates the express object which weill be used to listen on ports
const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


//get scores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

//submit scores 
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores)
  res.send(scores)
})

//update scores javascript function here (submit calls this)
let scores = []
//FIXME
function updateScores(newScore, scores){
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);//(position, howManyToRemove, item(s)ToAdd)
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

  return scores;
}