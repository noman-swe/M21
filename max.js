const business = 500;
const minister = 656;
const army = 784;

const largerNum = Math.max(business, minister, army);
console.log(largerNum);

// by function
function largestNum (first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

const large = largestNum(55, 52);
console.log('large number is: ', large);


var equal ='All are equal.';
// conpare between 3 numbers ---task
function largerBetweenThreeNums( first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else if(first === second && first === third){
        return equal;
    }
    else {
        return third;
    }
}

const largerNumber = largerBetweenThreeNums(10, 10, 10);
console.log(largerNumber);
