
const ul = document.getElementById('words-list')

//function to save a word into localStorage
function saveWord(word){
    let wordsArray
    //Checks if wordsArray exist in the localStorage
    if(localStorage.wordsArray){
        wordsArray = JSON.parse(localStorage.wordsArray)
        //if length of wordsArray is 5, removes the first array element then add new word to it
        if(wordsArray.length == 5){
            //checks if word already exist in the wordsArray, if it doesn't, proceeds with operation
            if(!(wordsArray[wordsArray.length-1].toLowerCase() === word.toLowerCase())){
                wordsArray.shift()
                wordsArray.push(word)
                //converts wordsArray to a JSON String and adds it to localStorage.wordsArray
                localStorage.wordsArray = JSON.stringify(wordsArray)
                //clears the ul element
                ul.innerHTML=""
                //adds each word in the wordsArray from localStorage to a li element
                JSON.parse(localStorage.wordsArray).forEach(word=>{
                    liMaker(word)
                })
                
            }
            
          }
          //if length of wordsArray not 5
        else{
            //checks if word already exist in the wordsArray, if it doesn't, proceeds with operation
            if(!(wordsArray[wordsArray.length-1].toLowerCase() === word.toLowerCase())){
            wordsArray.push(word)
            //converts wordsArray to a JSON String and adds it to localStorage.wordsArray
            localStorage.wordsArray = JSON.stringify(wordsArray)
            //clears the ul element
            ul.innerHTML=""
            //adds each word in the wordsArray from localStorage to a li element
            JSON.parse(localStorage.wordsArray).forEach(word=>{
                liMaker(word)
            })
            }
          }
    }

    //if wordsArray doesn't exist in localStorage, creates it
    else{
        localStorage.setItem("wordsArray",JSON.stringify([]))
        wordsArray = JSON.parse(localStorage.wordsArray)
        wordsArray.push(word)
        //converts wordsArray to a JSON String and adds it to localStorage.wordsArray
        localStorage.wordsArray = JSON.stringify(wordsArray)
        //clears the ul element
        ul.innerHTML=""
        //adds each word in the wordsArray from localStorage to a li element
        JSON.parse(localStorage.wordsArray).forEach(word=>{
            liMaker(word)
        })
    }
  
}

//Main entry
function check() {
    //gets value of input in textbox
    let words = document.getElementById("word-textbox").value
    //checks if it is empty
    if(words === undefined || words.trim()==="" || words===""){
        document.getElementById("answer").innerHTML = "Input is Empty!!!"
    }
    //if not empty, calls giveResult(words) to check for palindrome & saveWord(words) to save the word to localStorage
    else{
        document.getElementById("answer").innerHTML = giveResult(words)
        saveWord(words)
    }
}

function giveResult(word){
    //splits word to an array, reverses it & join it 
   let rev_word = word.split("").reverse().join("")
   //checks if isPalindrome(word) returns true
   if (isPalindrome(word) === true){
       return rev_word+" = [is a Palindrome]" 
   }
    else{
      return rev_word+" = [is not a Palindrome]"
    }
   
}

//Checks for Palindrome
function isPalindrome(str){
    //function to remove punctuation,special chars from input word before checking for palindrome
    function toChars(str){
        str = str.toLowerCase()
        let ans = ''
        str.split("").forEach(c=>{
            if('abcdefghijklmnopqrstuvwxyz'.includes(c)){
                ans = ans + c
            }
        })
        return ans
    }
    
    //Recursive function that return boolean type, True if Palindrome, False if not
    function isPal(str){
        //Base call
        if(str.length <= 1){
            return true
        }
        else{
            //Recursive call
            return str[0] === str[str.length-1] && isPal(str.slice(1,str.length-1))
        }
    }
    return isPal(toChars(str))
}
 
// Function to make a li element and append to the ul element
const liMaker = (text)=>{
    const li = document.createElement('li')
    li.innerHTML = text
    ul.appendChild(li)
}

//adds each word in the wordsArray from localStorage to a li element
JSON.parse(localStorage.wordsArray).forEach(word=>{
    liMaker(word)
})