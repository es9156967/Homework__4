// to update leaderboard
var latestScore = localStorage.getItem("score");
var latestName = localStorage.getItem("name");
var name1Display = document.querySelector(".name1");
var name2Display = document.querySelector(".name2");
var name3Display = document.querySelector(".name3");
var score1Display = document.querySelector(".score1");
var score2Display = document.querySelector(".score2");
var score3Display = document.querySelector(".score3");

if (latestScore != null || latestName != null) {
    changeScore()
} else {
    console.log("hello");
}

function changeScore () {

    if (localStorage.getItem("score1") == null) {
        localStorage.setItem("score1", 0)
        localStorage.setItem("name1", "Take this spot!")
    }
    if (localStorage.getItem("score2") == null) {
        localStorage.setItem("score2", 0)
        localStorage.setItem("name2", "Take this spot!")
    }
    if (localStorage.getItem("score3") == null) {
        localStorage.setItem("score3", 0)
        localStorage.setItem("name3", "Take this spot!")
    }

    var name1 = localStorage.getItem("name1");
    var name2 = localStorage.getItem("name2");
    var name3 = localStorage.getItem("name3");
    var score1 = JSON.parse(localStorage.getItem("score1"));
    var score2 = JSON.parse(localStorage.getItem("score2"));
    var score3 = JSON.parse(localStorage.getItem("score3"));
    
    name1Display.textContent = localStorage.getItem("name1");
    score1Display.textContent = localStorage.getItem("score1") + "%";
    name2Display.textContent = localStorage.getItem("name2");
    score2Display.textContent = localStorage.getItem("score2") + "%";
    name3Display.textContent = localStorage.getItem("name3");
    score3Display.textContent = localStorage.getItem("score3") + "%";

    if (latestScore >= score1) {
        localStorage.setItem("score3", score2);
        localStorage.setItem("name3", name2);
        localStorage.setItem("score2", score1);
        localStorage.setItem("name2", name1)
        localStorage.setItem("score1", latestScore);
        localStorage.setItem("name1", latestName);

        name1Display.textContent = localStorage.getItem("name1");
        score1Display.textContent = localStorage.getItem("score1") + "%";
        name2Display.textContent = localStorage.getItem("name2");
        score2Display.textContent = localStorage.getItem("score2") + "%";
        name3Display.textContent = localStorage.getItem("name3");
        score3Display.textContent = localStorage.getItem("score3") + "%";
    } else if (latestScore >= score2) {
        localStorage.setItem("score3", score2);
        localStorage.setItem("name3", name2);
        localStorage.setItem("score2", latestScore);
        localStorage.setItem("name2", latestName);

        name2Display.textContent = localStorage.getItem("name2");
        score2Display.textContent = localStorage.getItem("score2") + "%";
        name3Display.textContent = localStorage.getItem("name3");
        score3Display.textContent = localStorage.getItem("score3") + "%";
    } else if (latestScore >= score3) {
        localStorage.setItem("score3", latestScore);
        localStorage.setItem("name3", latestName);

        name3Display.textContent = localStorage.getItem("name3");
        score3Display.textContent = localStorage.getItem("score3") + "%";
    }



}