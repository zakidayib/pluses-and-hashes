// Good Luck 💪🏾

function plusHashCount(str){
    let plusCount = 0;
    let hashCount = 0;

    for(let i=0; i<str.length; i++){
        if(str[i] === "#"){
            hashCount++;
        }

        if(str[i] === "+"){
            plusCount++;
        }
    }

    return [plusCount, hashCount]
}

console.log(plusHashCount("#+++#+#++#"));