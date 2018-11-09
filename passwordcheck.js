let userEmail='rtfvb123@gmail.com'

let password='1234'

let userChecker=function(myString){
    if(myString.includes(123)&&(myString.length>6)){
        return true
    }
    return false
}

let passChecker=function(pass){
    if((pass.includes('123')) && pass.length>8){
        return true
    }
    else{
        return false
    }
  
}
