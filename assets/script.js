//var topic = "HTML";

var topics =['HTML','CSS','Git','JavaScript'];



// function helloWorld(){
//     console.log("Hello world! I'm a function!");
// }


function listTopics() {
    for(var index=0;index<topics.length;index++){
        console.log("Let's study " + topics[index] + "!");
    }
}


function selectTopic() {
    var randomTopic = topics[Math.floor(Math.random() * topics.length)];
    if(randomTopic === 'HTML'){
        console.log("Let's stud HTML!");
    } else if (randomTopic === 'CSS'){
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git'){
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript'){
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}

console.log("Here is a list of the topics learned through Prework")
listTopics();
console.log("Ramdomly picking topic for study...")
selectTopic();