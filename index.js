function checkIfPalindrome() {
    let words = document.getElementById("word-textbox").value
    document.getElementById("ew").innerHTML = words
    if(words === undefined || words.trim()==="" || words===""){
        document.getElementById("answer").innerHTML = "Input is Empty!!!"
    }
    else{
        document.getElementById("answer").innerHTML = cpd(words)
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
 