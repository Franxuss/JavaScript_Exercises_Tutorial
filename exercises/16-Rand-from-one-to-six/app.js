function getRandomInt(min,max)
{
	var randomNumber = Math.random()*(6-1)+1;
	return Math.floor(randomNumber);
}
console.log(getRandomInt());