
let seconds = 0;
let oroz = 0;
function cati() {
    console.log(`Прошло: ${seconds} сек.`);
    seconds++;
    if (seconds > 5){
        clearInterval(oroz);
    }
}

oroz = setInterval(cati, 1000);