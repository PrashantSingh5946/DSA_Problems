let exponential = (num, pow, currentVal) => {

    if(pow == 0)
    {
        console.log(1)
    }

    else if(pow == 1)
    {
        console.log(currentVal);
    }
    else
    {
        currentVal = currentVal * num;
        exponential(num,pow-1,currentVal);
    }

}

exponential(2,0,2);