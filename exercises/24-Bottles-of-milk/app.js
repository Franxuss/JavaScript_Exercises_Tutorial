var bottle=99;
function bottles(bottle){


    if(bottle==2){
        console.log(bottle+" bottles of milk on the wall, "+bottle+" bottles of milk.Take one down and pass it around, "+(bottle-1)+" bottle of milk on the wall.")
    }
    else if(bottle==1){
        console.log(bottle+" bottle of milk on the wall, "+bottle+" bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\nNo more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")

    //}else if(bottle==0){
      //  console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
    }else{
    console.log(bottle+" bottles of milk on the wall, "+bottle+" bottles of milk.Take one down and pass it around, "+(bottle-1)+" bottles of milk on the wall.")
    }

}

for(var i=99;i>0;i--){
    bottles(i)
}

    
    
