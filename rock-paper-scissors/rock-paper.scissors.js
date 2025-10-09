
        
        let track = JSON.parse(localStorage.getItem('track')) || { win: 0, lose: 0, tie: 0 };

        updateScoreElement()

       function updateScoreElement() {
         document.querySelector('.js-score')
        .innerHTML = `win: ${track.win}, lose ${track.lose}, Tie ${track.tie}`

       }

        function play(playerMove) {
            const randomNumber = Math.random();
            let computerMove = '';
           
            

            if (randomNumber < 1/3) {
            computerMove = 'rock';
            }
            else if (randomNumber < 2/3) {
            computerMove = 'paper';
            }
            else {
            computerMove = 'scissors';
            }

            let result = '';
            if(playerMove===computerMove) {
            result ='Tie'
            track.tie+=1; }
            else if ((playerMove==='rock' && computerMove ==='scissors') ||
            (playerMove==='paper' && computerMove ==='rock') || 
            (playerMove==='scissors' && computerMove ==='paper'))
             
            {
             result = 'You win.'
             track.win+=1
            } else{
                result = 'you lose'
                track.lose+=1   
            }

            localStorage.setItem('track',JSON.stringify(track));

            updateScoreElement()
            document.querySelector('.js-result').innerHTML = result
            document.querySelector('.js-moves').innerHTML = `You <img src ="images/${playerMove}-emoji.png" class = "icon">  <img src="images/${computerMove}-emoji.png" class=icon> computer `;


        }

        function resetScore() {
            track = {win:0, lose:0, tie:0}
             updateScoreElement()
            localStorage.setItem('track', JSON.stringify(track));
            alert("Scores reset!")
        }


        