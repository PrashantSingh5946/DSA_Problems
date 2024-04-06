

let letters = [1,2]

let combinations = (maxLength, currentLength, startVal ) => 
{
    if(maxLength == currentLength)
    {
        console.log(startVal)
    }

    else
    {
        letters.forEach((letter) => combinations(maxLength, currentLength+1, startVal+letter))
    }
}

combinations(4, 0, "");

//TC:  No of FCalls * O(fn)=> maxLen ^ lettersLen = O(n ^ maxLen * letterLen) => exponential
//In case of maxLen = 3, letterLen = 2, 

//SC:  