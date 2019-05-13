function score() {
    let alabama = document.quiz.Alabama.value;
    let nevada = document.quiz.Nevada.value;
    let michigan = document.quiz.Michigan.value;
    let texas = document.quiz.Texas.value;
    let oregon = document.quiz.Oregon.value;
    let virginia = document.quiz.Virginia.value;
    let arkansas = document.quiz.Arkansas.value;
    let rhodeIsland = document.quiz.RhodeIsland.value;
    let florida = document.quiz.Florida.value;
    let kentucky = document.quiz.Kentucky.value;

    let correct = 0;

    if (alabama === "Montgomery"){
        correct++;
    }

    if (nevada === "Carson City"){
        correct++;
    }

    if (michigan === "Lansing"){
        correct++;
    }

    if (texas === "None of the above"){
        correct++;
    }

    if (oregon === "Salem"){
        correct++;
    }

    if (virginia === "None of the above") {
        correct++;
    }

    if (arkansas === "Little Rock") {
        correct++;
    }

    if (rhodeIsland === "Providence") {
        correct++;
    }

    if (florida === "None of the above") {
        correct++;
    }

    if (kentucky === "Frankfort") {
        correct++;
    }

    let messages = ["Please, study.", "You did okay...", "Fantastic job!"];
    let gifs = ["images/disappointed.gif", "images/ok.gif", "images/fantastic.gif"];
    let range;

    if (correct < 4){
        range = 0;
    }
    else if(correct > 4 && correct < 8 ){
        range = 1;
    }
    else{
        range = 2;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = `You got ${correct} correct.`;
    document.getElementById("gifs").src = gifs[range];
}