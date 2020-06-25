const names = ["Lisa", "Kaitlin", "Jan"]
const event = "surprise"

function writeCards(names, event) {
    var arr = []
    for (let i = 0; i < names.length; i++) {
      arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
   return arr
}

function countDown(num){
    let countdown = num;
    while (countdown >= 0) {
    console.log(countdown--);
    }
}
countDown()