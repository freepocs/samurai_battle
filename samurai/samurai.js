let posi_atual = 200;

document.getElementById("samurai").style.left = posi_atual + "px";
const audioAttack = new Audio("TunePocket-Hiyah-Karate-Kiai-Scream-Preview.mp3");
const audioJump = new Audio("jumping.mp3")

const liquid = document.getElementById("liquid")
liquid.style.width = "100%"

const samurai = document.getElementById("samurai")
const samuraiGetLeft = window.getComputedStyle(samurai).getPropertyValue("left")
const samuraiWidth = window.getComputedStyle(samurai).getPropertyValue("width")

const damage = document.getElementById("damage")
const damagestyle = window.getComputedStyle(damage)
const damageLeft = damagestyle.getPropertyValue("left")

function Direita() {
    posi_atual = posi_atual + 100
    document.getElementById("samurai").style.left = posi_atual + "px"


    console.log(posi_atual + parseInt(samuraiWidth))
    console.log(damageLeft)
}
function Esquerda() {
    posi_atual = posi_atual - 100
    document.getElementById("samurai").style.left = posi_atual + "px"
    console.log(window.getComputedStyle(samurai).getPropertyValue("left"))
}

function ataque() {
    if (audioAttack.paused) {
        audioAttack.play()
    } else {
        audioAttack.currentTime = 0
    }
    document.getElementById("myImg").src = "pixil3.png";
    posi_atual = posi_atual + 100
    document.getElementById("samurai").style.left = posi_atual + "px"
    document.getElementById("button").style.backgroundColor = "rgb(255, 240, 145)"

    setTimeout(() => {
        document.getElementById("myImg").src = "pixil-frame-01.png"
        posi_atual = posi_atual + 100
        document.getElementById("samurai").style.left = posi_atual + "px"
    }, 50)

    setTimeout(() => {
        document.getElementById("myImg").src = "pixil3.png";
        posi_atual = posi_atual - 100
        document.getElementById("samurai").style.left = posi_atual + "px"
    }, 200)

    setTimeout(() => {
        document.getElementById("myImg").src = "pixil-frame-0.png";
        posi_atual = posi_atual - 100
        document.getElementById("samurai").style.left = posi_atual + "px"
        document.getElementById("button").style.backgroundColor = "rgb(218, 214, 167)"
    }, 250)
}

function Fdamage() {
    console.log(posi_atual + parseInt(samuraiWidth), damageLeft)
    if (posi_atual + parseInt(samuraiWidth) > parseInt(damageLeft)) {
        setTimeout(() => {
            damage.style.backgroundColor = "red"
        }, 100)
        setTimeout(() => {
            damage.style.backgroundColor = "olive"
        }, 250)


        if (liquid.style.width == "100%") {
            liquid.style.width = "calc(100% - 10%)"
        }
        else if (liquid.style.width == "calc(90%)") {
            liquid.style.width = "calc(100% - 20%)"
        }
        else if (liquid.style.width == "calc(80%)") {
            liquid.style.width = "calc(100% - 30%)"
        }
        else if (liquid.style.width == "calc(70%)") {
            liquid.style.backgroundColor = "yellow"
            liquid.style.width = "calc(100% - 40%)"
        }
        else if (liquid.style.width == "calc(60%)") {
            liquid.style.width = "calc(100% - 50%)"
        }
        else if (liquid.style.width == "calc(50%)") {
            liquid.style.width = "calc(100% - 60%)"
        }
        else if (liquid.style.width == "calc(40%)") {
            liquid.style.width = "calc(100% - 70%)"
        }
        else if (liquid.style.width == "calc(30%)") {
            liquid.style.width = "calc(100% - 80%)"
            liquid.style.backgroundColor = "red"
        }
        else if (liquid.style.width == "calc(20%)") {
            liquid.style.width = "calc(100% - 90%)"
        }
        else if (liquid.style.width == "calc(10%)") {
            liquid.style.width = "calc(100% - 100%)"
        }
    }
}

function pulo() {
    if (audioJump.paused) {
        audioJump.play()
    } else {
        audioJump.currentTime = 0
    }

    document.getElementById("myImg").src = "pulo_1.png";
    document.getElementById("pulo").style.backgroundColor = "rgb(255, 240, 145)"

    setTimeout(() => {
        document.getElementById("myImg").src = "pulo_2.png"
        document.getElementById("samurai").style.top = "150px"
    }, 80)

    setTimeout(() => {
        document.getElementById("myImg").src = "pulo_3.png";
        document.getElementById("samurai").style.top = "50px"
        document.getElementById("pulo").style.backgroundColor = "rgb(218, 214, 167)"
    }, 160)

    setTimeout(() => {
        document.getElementById("myImg").src = "pulo_2.png";
        document.getElementById("samurai").style.top = "150px"
    }, 320)

    setTimeout(() => {
        document.getElementById("myImg").src = "pulo_1.png";
        document.getElementById("samurai").style.top = "350px"
    }, 400)

    setTimeout(() => {
        document.getElementById("myImg").src = "pixil-frame-0.png";
        document.getElementById("samurai").style.top = "350px"
    }, 480)
}