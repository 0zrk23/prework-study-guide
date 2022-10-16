/*var topic = "HTML";

if(topic === 'HTML'){
    console.log("Let's stud HTML!");
} else if (topic === 'CSS'){
    console.log("Let's study CSS!");
} else if (topic === 'Git'){
    console.log("Let's study Git!");
} else if (topic === 'JavaScript'){
    console.log("Let's study JavaScript!");
} else {
    console.log("Please try again!");
}*/
var topics =['HTML','CSS','Git','JavaScript'];

for(var index=0;index<topics.length;index++){
    console.log("Let's study " + topics[index] + "!");
}