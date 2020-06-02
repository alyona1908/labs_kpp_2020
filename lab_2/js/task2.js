let game;
let pocket;
let startingPrize = 100;
let win;
let prise_one_time = 1;
let again;
let lvl = 0;
let prize = 0;
let i = 0;

let all_right = true;

while(all_right){
    lvl++;
    game = confirm('Do you want to play a game?');
    if (game === false) {
        alert('You did not become a billionaire, but can.');
        all_right = false;
        continue;
    } else {
        let random = Math.floor(Math.random() * Math.floor(5*lvl + 1));
        for (let i = 0; i < 3; i++) {
            pocket = prompt('Enter a number of pocket on which the ball could land ');
            if (random === +pocket) {
                prise_one_time = startingPrize;
                for (let n = 1; n < lvl;n++){
                    prise_one_time *= 2;
                }
                for (let e=0; e!== i;e++){
                    prise_one_time /= 2;
                }
                prize += prise_one_time;
                win = confirm(`Congratulation, you won! \n  Your prize is: ${prize} $. Do you want to continue?`);
                break;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                if (i === 2){ 
                    all_right = false;
                }else{
                    again = confirm(`He wants to play again ?`);
                }
            }
        }
    }
}

