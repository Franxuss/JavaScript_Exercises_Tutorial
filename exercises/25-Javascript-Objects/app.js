var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.         
  var allLuckyNumbers = person.lucky_numbers.concat(person2.lucky_numbers,addperson().lucky_numbers);
        for(var i=0;i<allLuckyNumbers.length;i++){
                sumOfAllLuckyNumbers=sumOfAllLuckyNumbers+allLuckyNumbers[i];
        }return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3]=33;

function addperson(){
    var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
    }
    return person3;
}

family.members.push(addperson());



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
