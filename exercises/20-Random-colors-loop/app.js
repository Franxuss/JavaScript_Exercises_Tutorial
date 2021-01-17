function getColor(colorNumber)
{

	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
	for(var students=1;students<=10;students++){
        var colorNumber=Math.floor(Math.random() * (4 - 1) + 1);

        console.log("El estudiante número "+students+" tiene el color "+getColor(colorNumber));
        
    }

	var exampleColor = getColor(colorNumber);
}