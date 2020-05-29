//找a
function match(string) {
    for (let char of string) { //char 单个字符
        if(char === 'a') {
            return true;
        }
        return false;
    }
}

//找a和b
function match1(string) {
    let foundA = false;
    for (let char of string) {
        if(char === 'a') {
            foundA = true;
        }else if(foundA && char === 'b') {
            return true;
        } else {
            foundA = false;
        }
    } 
    return false;   
}
function match2(string) {
    let foundA = false, foundB = false;
    for (let char of string) {
        if(char === 'a') {
            foundA = true;
        }else if(foundA && char === 'b') {
           foundB = true;
        } 
        else if(foundA && char === 'c') {
             return true;
        }else {
            foundA = false;
            foundB = false;
        }
    } 
    return false;   
}
console.log(match1('i abxb good'));