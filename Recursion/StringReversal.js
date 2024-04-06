function reverseString(str)
{
    
    str = str.split("")
    reverser(str, 0 , str.length-1)

    
}


function reverser(str, startIndex, endIndex)
{
    if(startIndex < endIndex)
    {
        let temp = str[startIndex];
        str[startIndex] = str[endIndex];
        str[endIndex] = temp;
        reverser(str, ++startIndex, --endIndex);
       
    }
    else
    {
        console.log(str.join(""))
    }
}

reverseString("Hello");