// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
//     }
//     return gifts;
// }

// wrapGifts(gifts);


// const names = ["Louie", "Lexi", "David"];
// function writeCards(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(`Thank you ${names} for the wonderful time at my birthday`)
//     }
//     return writeCards(names)
// }

let cards =[]
const names = [""];
const eventName = "suprise";
function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    debugger;
  }

  return cards;
}

let posNum = ''
function countDown(posNum) {
    while(posNum >= 0)
    console.log(posNum--)
}

