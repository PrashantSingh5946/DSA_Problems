let totalCalls = 0;

function towerOfHanoi(n, source, aux, destination)
{
    totalCalls++;

    if(n==1)
    {
        console.log(`Disk moved from ${source} to ${destination}`)        
    }
    else
    {
        towerOfHanoi(n-1, source, destination, aux);
        console.log(`Disk moved from ${source} to ${destination}`)
        towerOfHanoi(n-1, aux, source, destination)
    }
   
}

towerOfHanoi(5, "Rod1", "Rod 2", "Rod3")



console.log("Total calls are ", totalCalls);