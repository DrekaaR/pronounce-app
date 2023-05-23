export const colorsHex = {
   green: '#4fc644',
   yellow: '#ffc702',
   red: '#df4e4e',
}

export const pronRateData = {
   correct: {
      color: colorsHex.green,
      title: "Correct!",
      text: [
         "You sound", "like a native speaker"
      ]
   },
   medium: {
      color: colorsHex.yellow,
      title: "Not bad!",
      text: [
         "Your score is", ", which is around average"
      ]
   },
   wrong: {
      color: colorsHex.red,
      title: "Wrong!",
      text: [
         "Your score is", "keep working at it and you'll see progress"
      ]
   }
}


export default class wordRate {
   static correct = (score) => score >= 80 && score <= 100;
   static medium = (score) => score >= 50 && score <= 79;
   static wrong = (score) => score >= 0 && score <= 49;
}