console.log("hello")
console.log("Question 1 Solution")

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

    for(let i=0; i<library.length; i++) {
        if (library[i].readingStatus===true) {
            console.log("Already read " + library[i].author + " by " + library[i].title);
        }
        else {
            console.log("You still need to read " + library[i].title + " by " + library[i].author);
        }
    }


console.log("Question 2 Solution");
var age=prompt("Enter your age: ");
if (age<18) {
    alert("Not legal age to drive")
}
else {
    alert("Drive safe")
}