function oneThroughTwenty() {
   let result1 = []
   for (let i = 1; i <= 20; i++){
    result1.push(i)
  }
  return result1
}

//call function oneThroughTwenty

function evensToTwenty(){
  let result2 = []
  for (i = 2; i <= 20; i += 2){
    result2.push(i)
   }
  return result2
}

//call function evensToTwenty

function oddsToTwenty() {
  let result3 = []
  for (i = 1; i <= 20; i += 2){
    result3.push(i)
  }
  return result3
}

//call function oddsToTwenty

function multiplesOfFive() {
  let result4 = []
  for (i = 1 ; i <= 20; i++){
    result4.push(i * 5)
  }
  return result4
}

//call function multiplesOfFive

function squareNumbers() {
  let result5 = []
  for (i = 1; i <= 10; i++){
    result5.push(i * i)
  }
  return result5  
}

//call function squareNumbers

function countingBackwards() {
  let result6 = []
  for (i = 20; i >= 1; i--){
    result6.push(i)
  }
  return result6
}

//call function countingBackwards

function evenNumbersBackwards() {
  let result7 = []
  for (i = 20; i >= 1; i -= 2){
    result7.push(i)
  }
  return result7
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  for (i = 19; i >= 1; i -= 2){
    return i
  }
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  for (i = 20; i >= 1; i--){
    return i * 5
  }
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  for (i = 10; i >= 1; i--){
    return i * i
  }
}

//call function squareNumbersBackwards
