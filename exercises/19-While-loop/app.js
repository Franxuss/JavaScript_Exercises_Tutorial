function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        console.log(counter);
        counter--;
        if(counter<0){
            break;
        }
	}
	
	return counter;
}

startCounting();