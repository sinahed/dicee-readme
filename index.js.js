var randomNumber1 = Math.floor(Math.random()*6) + 1
var x = "images/dice" + randomNumber1 + ".png"
document.querySelector("img.img1").setAttribute("src", x)

var randomNumber2 = Math.floor(Math.random()*6) + 1
var y = "images/dice" + randomNumber2 + ".png"
document.querySelector("img.img2").setAttribute("src", y)


if (x > y) {
    document.querySelector("h1").innerHTML = "🥇player 1 win!";
} else if (y > x) {
    document.querySelector("h1").innerHTML = "player 2 win!🥇";
} else {
    document.querySelector("h1").innerHTML = "oh draw!🎃 next time";
}