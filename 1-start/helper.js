//validator
validator = (value , isNumber , notEmpty)=>{
    //true true
    if (isNumber && notEmpty) {
        if (value.trim().length === 0) {
            return false
        }
        if (isNaN(value)) {
            return false
        }
        return true
    }

    //false true
    if (!isNumber && notEmpty) {
        if (value.trim().length === 0) {
            return false
        }
        return true
    }
}

checkData = (userName , userAge)=>{
      if(validator(userName , false , true) && validator(userAge , true , true)){
            return true
        }
        return false
}



const joiner = (name , age)=>{
    return ('user name is ' + name + ',and age ' + age)
}


//validator('shirin' ,false , true)

module.exports = {
    validator,
    checkData,
    joiner
}