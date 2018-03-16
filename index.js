
const ul = document.getElementById('words-list')

function saveWord(word){
    let wordsArray
    if(localStorage.wordsArray){
        wordsArray = JSON.parse(localStorage.wordsArray)
        if(wordsArray.length == 5){
            if(!(wordsArray[wordsArray.length-1].toLowerCase() === word.toLowerCase())){
                wordsArray.shift()
                wordsArray.push(word)
                localStorage.wordsArray = JSON.stringify(wordsArray)
            }
            
          }
        else{
            if(!(wordsArray[wordsArray.length-1].toLowerCase() === word.toLowerCase())){
            wordsArray.push(word)
            localStorage.wordsArray = JSON.stringify(wordsArray)
            }
          }
    }

    else{
        localStorage.setItem("wordsArray",JSON.stringify([]))
        wordsArray = JSON.parse(localStorage.wordsArray)
        wordsArray.push(word)
        localStorage.wordsArray = JSON.stringify(wordsArray)
    }
  
}

function checkIfPalindrome() {
    let words = document.getElementById("word-textbox").value
    document.getElementById("ew").innerHTML = words
    if(words === undefined || words.trim()==="" || words===""){
        document.getElementById("answer").innerHTML = "Input is Empty!!!"
    }
    else{
        document.getElementById("answer").innerHTML = cpd(words)
        saveWord(words)
    }
}

function cpd(word){
   let rev_word = word.split("").reverse().join("")
   if (isPalindrome(word) === true){
       return rev_word+"    [is a Palindrome]" 
   }
    else{
      return rev_word+"      [is not a Palindrome]"
    }
   
}

function isPalindrome(str){
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
    
    function isPal(str){
        if(str.length <= 1){
            return true
        }
        else{
            return str[0] === str[str.length-1] && isPal(str.slice(1,str.length-1))
        }
    }
    return isPal(toChars(str))
}
 

const liMaker = (text)=>{
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

