const line = document.querySelectorAll(".line")
const playBtn = document.getElementById("play")
const music = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/Idol.mp3`)
const textScore = document.getElementById("status")
const zonecorrect = document.getElementById("zonecorrect")
const root = document.documentElement
const scoreBoard = document.getElementById("score")
const durbar = document.getElementById("taskbar")
const ending = document.getElementById("ending")

var speed = 1.7;
var difficult = 4;
var ranDif = difficult;

durbar.style.width=0
root.style.setProperty("--speed", `${speed}s`)

var creNoteInter
var note = []
var nspawn = 0
var n = [0, 0, 0, 0]
var nd = [0, 0, 0, 0]
var ok = 0
var height = line[0].clientHeight
var score=0
var combo =0
var heart = 10



line.forEach((e, i) => {
    line[i].onclick = () => {}
    for (let k = 0; k < 200; k++) {
        line[i].innerHTML += `<div class="note1"></div>`
    }
    note[i] = line[i].getElementsByClassName("note1")
    line[i].mousedown = () => {
        line[i].style.backgroundColor = "#ffffff5c"
    }
    line[i].mouseup = () => {
        line[i].style.backgroundColor = "none"
    }


})

document.documentElement.addEventListener('keydown', (e) => {

    if (e.key == 'd' || e.key == 'D') {
        line[0].onclick()
    }
    if (e.key == 'f' || e.key == 'F') {
        line[1].onclick()
    }
    if (e.key == 'j' || e.key == 'J') {
        line[2].onclick()
    }
    if (e.key == 'k' || e.key == 'K') {
        line[3].onclick()
    }
})

function creNote() {

    creNoteInter = setInterval(() => {
        
        let i = Math.floor(Math.random() * 4)
        ranDif = Math.floor(Math.random() * (difficult-1) + 1)

        note[i][n[i]].style.opacity =1

        note[i][n[i]].style.animation = "down var(--speed) linear forwards"

        line[i].onclick = () => {
            var offset = Math.abs(note[i][nd[i]].getBoundingClientRect().top - zonecorrect.offsetTop)
            if (offset < 250) {
                note[i][nd[i]].style.opacity = 0;
                nd[i]++;
                if (offset < 30) {
                    combo++;
                    score+=5000+combo*100
                    heart+=(heart<10)?0.2:0;
                    textScore.innerHTML = ``
                textScore.innerHTML += `<p>Perfect!</p><p id="combo">${combo}</p>`
                } else if (offset < 45) {
                    combo++;
                    score+=3000+combo*100
                    heart+=(heart<10)?0.2:0;

                    textScore.innerHTML = ``
                    textScore.innerHTML += `<p>Great!</p><p id="combo">${combo}</p>`
                } else if (offset < 60) {
                    score+=1500+combo*100
                    heart+=(heart<10)?heart+=0.1:0;

                    combo=0;
                    textScore.innerHTML = ``
                    textScore.innerHTML += `<p>Good!</p>`
                } else if (offset <= 75) {
                    score+=500+combo*100
                    heart+=(heart<10)?heart+=0.1:0;

                    combo=0;
                    textScore.innerHTML = ``
                    textScore.innerHTML += `<p>Bad!</p>`
                } else if (offset > 75 && offset < 200) {
                    combo=0;
                    heart-=1;

                    textScore.innerHTML = ``
                    textScore.innerHTML += `<p>Miss!</p>`
                }
            }
        }
        scoreBoard.innerText=score

        n[i]++

    }, difficult*100)
}


playBtn.onclick = () => {
    creNote()

    setTimeout(() => {
        music.play()
        music.volume = 0.8
        setInterval(() => {
            for (let i = 0; i < line.length; i++) {
                if (note[i][nd[i]].getBoundingClientRect().top+20 > line[0].offsetHeight && note[i][nd[i]].style.opacity == '1') {
                    note[i][nd[i]].style.opacity = 0
                    nd[i]++
                    heart-=1;

                        textScore.innerHTML = ``
                    textScore.innerHTML += `<p>Miss!</p>`
                }
            }
            durbar.style.width = (music.currentTime*100/music.duration)+'%'
            if (heart <= 0) {
                music.pause()
                clearInterval(creNoteInter) 
                ending.style.display = "block"
                ending.innerText = "Lose!!!"
            }
            if (music.currentTime == music.duration) {
                music.pause()
                clearInterval(creNoteInter) 
                ending.style.display = "block"
                ending.innerText = "Win!!!"
            }
            root.style.setProperty("--opctbg",(heart/10)*50+"%")
        }, 100)
    }, 1000)

    playBtn.style.display = "none"
}