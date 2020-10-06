function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

question1 = {
    q: ") What will this code output to the console? ",
    img: "images/code1.png",
    a: " a) 28 ",
    b: " b) 01234567 ",
    c: " c) cheese ",
    d: " d) 0123456 ",
    ans: "d"
}
question2 = {
    q: ") What will this code output to the console? ",
    img: "images/code2.png",
    a: " a) Yes ",
    b: " b) No ",
    c: " c) Maybe ",
    d: " d) So ",
    ans: "b"
}
question3 = {
    q: ") What will this code output to the console? ",
    img: "images/code3.png",
    a: " a) Three\nFour\nFive\n ",
    b: " b) Three ",
    c: " c) ThreeFourFive ",
    d: " d) Seven ",
    ans: "a"
}
question4 = {
    q: ") Which of these methods for defining an anonymous function is correct? ",
    img: "images/code4.png",
    a: " a) Method A ",
    b: " a) Method B ",
    c: " a) Method C ",
    d: " d) None of the Above ",
    ans: "c"
}
question5 = {
    q: ") What will this code output to the console? ",
    img: "images/code5.png",
    a: " a) 6 ",
    b: " a) 7 ",
    c: " c) object ",
    d: " a) 8 ",
    ans: "a"
}
let questions = [question1, question2, question3, question4, question5];

let count = prompt("Enter a number between 1 and 5:");
if (count != NaN && count > 0 && count < 6) { // Don't display if invalid input

    questions = shuffle(questions);
    for (let i = 0; i < count; i++) {
        // Display questions
        let header = document.createElement("h3");
        header.innerHTML = (String(i+1)) + questions[i].q;
        document.body.append(header);

        let img = document.createElement("img");
        img.src = questions[i].img;
        document.body.append(img);

        document.body.append(document.createElement("br"));

        let radio1 = document.createElement("input");
        radio1.type = "radio";
        radio1.name = "q" + String(i+1);
        radio1.value = "a";
        document.body.append(radio1);
        radio1.insertAdjacentText('afterend', questions[i].a);
        document.body.append(document.createElement("br"));

        let radio2 = document.createElement("input");
        radio2.type = "radio";
        radio2.name = "q" + String(i+1);
        radio2.value = "b";
        document.body.append(radio2);
        radio2.insertAdjacentText('afterend', questions[i].b);
        document.body.append(document.createElement("br"));

        let radio3 = document.createElement("input");
        radio3.type = "radio";
        radio3.name = "q" + String(i+1);
        radio3.value = "c";
        document.body.append(radio3);
        radio3.insertAdjacentText('afterend', questions[i].c);
        document.body.append(document.createElement("br"));

        let radio4 = document.createElement("input");
        radio4.type = "radio";
        radio4.name = "q" + String(i+1);
        radio4.value = "d";
        document.body.append(radio4);
        radio4.insertAdjacentText('afterend', questions[i].d);
        document.body.append(document.createElement("br"));
    }

}