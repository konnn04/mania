const line = document.querySelectorAll(".line")
const playBtn = document.getElementById("play")
const textScore = document.getElementById("status")
const zonecorrect = document.getElementById("zonecorrect")
const root = document.documentElement
const scoreBoard = document.getElementById("score")
const durbar = document.getElementById("taskbar")
const stage = document.getElementById("stage")
const ending = document.getElementById("ending")
//Bang diem
const resultBoard = document.getElementById("resultBoard")
const maxcomboResult = document.getElementById("maxcombo")
const detailResult = document.getElementsByClassName("score")

//Beatmap
const hit = new Audio("https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/hit.wav")
var music = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/IDOL_TVSIZE.mp3`)
var bg = "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/01_oshinoko_184.jpg"

var step=0;

var speed = .8;
var difficult = 1;
var ranDif = difficult;

durbar.style.width=0
root.style.setProperty("--speed", `${speed}s`)
root.style.setProperty("--linkbg", `url(${bg})`)

var note = []
var nspawn = 0
var n = [0, 0, 0, 0]
var nd = [0, 0, 0, 0]
var ok = 0
var height = line[0].clientHeight
var score=0
var combo =0
var heart = 10
var delay 
var clock =0
var maxcombo=0
var result = [0,0,0,0,0] //Perfect / Great / Good / Bad / Miss
var steptime 


line.forEach((e, i) => {
    line[i].onclick = () => {}
    for (let k = 0; k < 200; k++) {
        line[i].innerHTML += `<div class="note1"></div>`
    }
    note[i] = line[i].getElementsByClassName("note1")
    // line[i].mousedown = () => {
    //     line[i].style.backgroundColor = "#ffffff5c"
    // }
    // line[i].mouseup = () => {
    //     line[i].style.backgroundColor = "none"
    // }
    line[i].onclick = () => {
        hit.currentTime=0
        hit.play()
        var offset = Math.abs(note[i][nd[i]].getBoundingClientRect().top - zonecorrect.offsetTop)
        if (offset < 300) {
            note[i][nd[i]].style.opacity = 0;
            nd[i]++;
            //Ghi max combo
            maxcombo=(maxcombo<combo)?combo:maxcombo;

            if (offset < 55) {
                //Perfect
                combo++;
                score+=5000+combo*100
                heart+=(heart<10)?0.2:0;
                result[0]++;

                textScore.innerHTML = ``
            textScore.innerHTML += `<p>Perfect!</p><p id="combo">${combo}</p>`
            } else if (offset < 80) {
                //Great
                combo++;
                score+=3000+combo*100
                heart+=(heart<10)?0.2:0;
                result[1]++;

                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Great!</p><p id="combo">${combo}</p>`
            } else if (offset < 110) {
                //Good
                score+=1500+combo*100
                heart+=(heart<10)?0.1:0;
                result[2]++;

                combo=0;
                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Good!</p>`
            } else if (offset <= 155) {
                //Bad
                score+=500+combo*100
                heart+=(heart<10)?0.1:0;
                result[3]++
                combo=0;
                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Bad!</p>`
            } else if (offset > 155 && offset < 300) {
                combo=0;
                heart-=1;
                result[4]++

                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Miss!</p>`
            }
        }
    }

})

document.documentElement.addEventListener('keydown', (e) => {
    if (started == false && (e.key=='d'||e.key=='f'||e.key=='j'||e.key=='k')) {
        started=true
        playBtn.onclick()
    }
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

var started = false
var playCheck = false

function creNote() {
    var creNoteInter = setInterval(() => {
        clock+= steptime/10000;

        if (clock >=  (delay+0.1) && !playCheck) {
            music.play()
            playCheck=true
        }
        
        if (clock >= beatmapAll[step] ) {
            step++;
            let i = Math.floor(Math.random() * 4)
            note[i][n[i]].style.opacity =1
            note[i][n[i]].style.animation = "down var(--speed) linear forwards"
            n[i]++
        }
    
        for (let i = 0; i < line.length; i++) {
            if (note[i][nd[i]].getBoundingClientRect().top+20 > line[0].offsetHeight && note[i][nd[i]].style.opacity == '1') {
                note[i][nd[i]].style.opacity = 0
                //Miss
                result[4]++
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
            closeStage(false)
        }
        if (music.currentTime == music.duration || step == beatmapAll.length) {
            music.pause()

            clearInterval(creNoteInter) 

            closeStage(true)            
        }
        root.style.setProperty("--opctbg",(heart/10)*50+"%")
        scoreBoard.innerText=score
    },steptime/10)
}

function closeStage(x) {
    stage.style.opacity = 0
    ending.innerText = "Win!!!"
    if (x==false) {
        ending.style.display = "block"
        ending.innerText = "Lose!!!"
    }else{
        ending.innerText = "Win!!!"
    }
    resultBoard.style.display = "block"
    maxcomboResult.innerText = maxcombo
    for (let i=0;i<result.length;i++) {
        detailResult[i].innerText = result[i]
    }
    setTimeout(()=>{
        ending.style.opacity = 0
    },800)
    setTimeout(()=>{
        resultBoard.style.opacity = 1
    },900)
}

playBtn.onclick = () => {
    creNote()
    started=true
    hit.volume=0.8

    hit.currentTime=0
    setTimeout(() => {
        music.volume = 0.8        
    }, 1000)

    playBtn.style.display = "none"
}