//algorithm that accepts an array and return a new array
// It's going to return only odd numbers from the orginal array
//Create a variable with an empty array
//make a for loop an push the odds numbers into the empty array 

let numbers= [2, 4, 6, 8, 11, 20, 15, 22]
let secondNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function oddNumber (array){
    let result = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 1){
            result.push(array[i])
        }
    }
    return result;
}

console.log(oddNumber(numbers))
console.log(oddNumber(secondNumbers))

// Write an algorithm that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

let sentences ="hello"
let sentences1 ="awesome"
let vowels = ["a", "e", "i", "o","u"]

function vowelConsonant (string, array) {
 let countVowel = 0
 let countConso = 0
 for (let i = 0; i < string.length; i++){
   if( array.includes(string[i])){
    countVowel++
   }else {
    countConso++
   }
}
return console.log(`${string} has ${countConso} consonants and ${countVowel} vowels`)
}

vowelConsonant(sentences,vowels);
vowelConsonant(sentences1,vowels);

// Write an algorithm that creates a new array in reverse order.
let arr =[1, 3, 5, 7, 9, 11]
function reverseArr (array) {
    let newArr = []
    for (let i = array.length - 1; i >= 0; i--){
        newArr.push(array[i])
    }
    return console.log(newArr)
}

reverseArr(arr)

//Write an algorithm that print each number from 1 to 100 on a` new line
// for each multiple of 3, print "Fizz"
//for each multip[le of 5, print "Buzz"
//for numbers that are multiples of both 3 and 5, print FizzBuzz

// create a forloop that loop from 1 to 100
// check with a conditional if the number is multiple of 3 
// check with a conditional if the number is multiple of 5
// check with a conditional if the number is multiple of 3 and 5

for(let i = 1; i <= 100; i ++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0){
        console.log("Fizz")
    }
    else if (i % 5 === 0){
        console.log("Buzz")
    }
   
    else {

    console.log(i)
}
}