let findIndex = function(str,val, currentIndex)
{

    if(str[currentIndex] == val)
    {    
        return ("Value found at index "+ currentIndex);
    }

    if(currentIndex == str.length)
    {
         return("Value not found")  
    }
    
    return findIndex(str,val,currentIndex+1);

    
}

let data = findIndex("Whatever","t", 0)

console.log(data)

