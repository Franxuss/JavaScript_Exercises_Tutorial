function sing(){
    var rep="let it be, ";
    if(estrofa==5){
        return "Whisper words of wisdom";
    }else if(estrofa==11){
        return "there will be am answer, "
    }else{
        return rep;
    }
    
}for(var estrofa=1;estrofa<=12;estrofa++){
        
        console.log(sing());
}