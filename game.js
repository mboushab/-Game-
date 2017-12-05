var roundScore, activePlayer, gamePlaying;
int();

document.querySelector('.btn-roll').addEventListener('click', function() {
	    // 1. Random number
	  if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        //2. Display the result
        var diceDOM1 = document.querySelector('.dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        var diceDOM2 = document.querySelector('.dice-2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        //display the score
        document.querySelector('#score-' + activePlayer).textContent = dice1 + dice2;
        
    	if (dice1 === 6 && dice2 === 6){
    		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    		gamePlaying = false;
    	}
        	
        else if (dice1 !=6 && dice2 != 6){
        	activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        	document.querySelector('#score-' + activePlayer).textContent = 0;

        }
        
       }
        
    
      	

});

// function next(){
//         	activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
//         	document.getElementById('score-1').textContent = '0';
//     		document.getElementById('score-2').textContent = '0';
//     		document.querySelector('.dice-1').style.display = 'none';
//     		document.querySelector('.dice-2').style.display = 'none';
//         }


document.querySelector('.btn-new').addEventListener('click', int);






















function int(){
	activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';

	document.querySelector('.dice-1').style.display = 'none';
	document.querySelector('.dice-2').style.display = 'none';
	document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';

}