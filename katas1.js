function oneThroughTwenty() {
   let result1 = []
   for (let i = 1; i <= 20; i++){
    result1.push(i)
  }
  return result1
}

oneThroughTwenty()

function evensToTwenty(){
  let result2 = []
  for (i = 2; i <= 20; i += 2){
    result2.push(i)
   }
  return result2
}

evensToTwenty()

function oddsToTwenty() {
  let result3 = []
  for (i = 1; i <= 20; i += 2){
    result3.push(i)
  }
  return result3
}

oddsToTwenty()

function multiplesOfFive() {
  let result4 = []
  for (i = 1 ; i <= 20; i++){
    result4.push(i * 5)
  }
  return result4
}

multiplesOfFive()

function squareNumbers() {
  let result5 = []
  for (i = 1; i <= 10; i++){
    result5.push(i * i)
  }
  return result5  
}

squareNumbers()

function countingBackwards() {
  let result6 = []
  for (i = 20; i >= 1; i--){
    result6.push(i)
  }
  return result6
}

countingBackwards()

function evenNumbersBackwards() {
  let result7 = []
  for (i = 20; i >= 1; i -= 2){
    result7.push(i)
  }
  return result7
}

evenNumbersBackwards()

function oddNumbersBackwards() { 
  let result8 = []
  for (i = 19; i >= 1; i -= 2){
    result8.push(i)
  }
  return result8
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {
  let result9 = []
  for (i = 20; i >= 1; i--){
    result9.push(i * 5)
  }
  
  return result9
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let result10 = []
  for (i = 10; i >= 1; i--){
    result10.push(i * i)
  }
  return result10
}

squareNumbersBackwards()
