async function loadScores(){
    let scores = []
    try{
        const response = await fetch('api/scores')
    }
    catch{

    }
    displayScores(scores)
}

function displayScores(scores){
    const tableBodyElement = document.querySelector("#scores")
    if (scores.length){
        for (const [i, score] of scores.entries()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
      
            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);
      
            tableBodyEl.appendChild(rowEl);
          }
    }
    else{
        tableBodyEl.innerHTML = '<tr><td colSpan=4>No scores recorded</td></tr>';
    }
}