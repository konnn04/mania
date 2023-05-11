const line = document.querySelectorAll(".line")
const playBtn = document.getElementById("play")
const music = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/IDOL_TVSIZE.mp3`)
const textScore = document.getElementById("status")
const zonecorrect = document.getElementById("zonecorrect")
const root = document.documentElement
const scoreBoard = document.getElementById("score")
const durbar = document.getElementById("taskbar")
const ending = document.getElementById("ending")

const beatmapIDOI =[0.685162, 1.412569, 1.721227, 2.251576, 2.450089, 2.8059, 3.001038, 3.377682, 3.578531, 3.96742, 4.304245, 4.656074, 4.860363, 5.202881, 5.395799, 5.737701, 5.924311, 6.254638, 6.455837, 6.821245, 7.20227, 7.569871, 7.758059, 8.113349, 8.304174, 8.627299, 8.829554, 9.194191, 9.371846, 9.72945, 10.124159, 10.459892, 10.759507, 11.103234, 11.294248, 11.653871, 11.856759, 12.197032, 12.902908, 13.447133, 13.845691, 14.224, 14.395981, 14.790798, 15.128954, 15.472338, 15.854402, 16.209316, 16.587543, 16.941742, 17.288165, 17.638397, 17.999514, 18.211149, 18.400679, 18.570835, 18.729542, 19.314981, 19.484268, 19.663083, 19.83983, 20.011574, 20.183831, 20.719677, 20.896601, 21.094475, 21.270482, 21.452066, 21.654595, 21.851377, 22.042443, 22.241081, 22.419487, 22.604648, 22.775266, 22.951176, 23.112149, 23.527007, 23.679947, 23.823603, 24.011156, 24.204234, 24.406603, 24.56006, 24.937361, 25.251917, 25.422496, 25.582852, 25.773803, 25.949529, 26.325024, 26.702604, 26.88038, 27.066978, 27.250584, 27.440168, 27.649827, 27.836269, 28.020243, 28.18762, 28.373021, 28.542247, 28.73191, 28.905583, 29.255484, 29.567155, 29.8356, 30.111856, 30.439352, 30.634842, 30.839698, 31.018743, 31.287361, 31.557597, 31.887929, 32.088625, 32.457744, 32.659617, 32.854365, 33.203729, 33.388584, 33.56989, 33.919697, 34.111536, 34.304449, 34.512116, 34.674941, 35.012839, 35.342032, 35.599103, 35.901354, 36.226591, 36.439762, 36.638987, 36.826687, 37.115364, 37.326627, 37.836134, 38.035689, 38.242304, 38.424462, 38.613176, 38.943641, 39.14072, 39.33139, 39.529577, 39.832763, 40.023314, 40.379163, 40.782545, 40.96861, 41.15103, 41.478297, 41.659245, 42.053635, 42.367179, 42.712058, 43.096575, 43.307152, 43.639634, 43.836642, 44.038973, 44.398873, 44.596121, 44.767905, 45.119148, 45.313916, 45.510112, 45.692606, 45.864811, 46.034752, 46.200632, 46.39527, 46.555786, 46.772746, 46.939395, 47.3102, 47.493141, 47.849759, 48.164932, 48.541416, 48.898032, 49.088224, 49.490231, 49.682501, 49.862542, 50.187649, 50.528454, 50.814512, 51.118438, 51.430651, 51.622151, 51.815634, 52.012118, 52.196167, 52.379102, 52.548989, 52.720048, 53.229578, 53.416192, 53.787177, 53.973399, 54.295425, 54.694958, 54.887358, 55.215928, 55.420424, 55.619253, 55.97143, 56.289999, 56.850921, 57.244079, 57.430009, 57.615555, 57.786606, 58.204562, 58.377708, 58.547935, 58.898537, 59.243905, 59.54364, 59.743015, 60.089526, 60.25634, 60.438881, 60.646721, 61.028873, 61.410898, 61.762959, 62.108764, 62.442887, 62.622453, 62.993237, 63.179257, 63.373723, 63.553672, 63.937395, 64.106053, 64.290782, 64.655209, 64.983628, 65.289421, 65.514038, 65.885997, 66.257272, 66.457789, 66.818163, 67.171716, 67.577613, 67.784816, 67.918769, 68.183816, 68.302465, 68.504675, 68.694895, 68.997932, 69.228519, 69.348352, 69.601154, 69.729423, 69.921815, 70.114765, 70.460806, 70.787376, 71.028065, 71.156084, 71.357265, 71.565047, 71.876094, 72.087824, 72.289763, 72.463196, 72.656478, 72.830365, 73.004196, 73.314353, 73.57532, 73.6856, 73.906241, 74.085823, 74.286963, 74.457835, 74.810866, 75.119701, 75.350397, 75.484305, 75.687406, 75.871245, 76.054733, 76.219355, 76.400394, 76.564257, 76.754847, 76.935558, 77.140334, 77.475583, 77.806896, 77.995602, 78.215962, 78.399751, 78.582455, 78.783151, 79.143013, 79.508167, 79.872711, 80.265449, 80.605346, 80.951538, 81.303047, 81.670139, 82.006277, 82.369324, 82.799693, 83.19883, 83.498977, 83.82831, 84.158578, 84.525495, 84.870381, 85.212371, 85.577108, 85.992332, 86.349685, 86.688833, 87.045147, 87.410735, 87.749442, 88.095677, 88.487654, 88.83034, 89.108786, 89.426777]
var step=0;

var speed = 1.5;
var difficult = 1;
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
var delay = speed* ((zonecorrect.offsetTop) / (line[0].offsetHeight+100))
var clock =0
var bpm = 161.50

var steptime = (60000/bpm)


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
                heart+=(heart<10)?0.1:0;

                combo=0;
                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Good!</p>`
            } else if (offset <= 75) {
                score+=500+combo*100
                heart+=(heart<10)?0.1:0;

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

var playCheck = false

function creNote() {
    creNoteInter = setInterval(() => {
        clock+= steptime/10000;

        if (clock >=  (delay) && !playCheck) {
            music.play()
            playCheck=true
        }
        if (clock >= beatmapIDOI[step] ) {
            step++;
            let i = Math.floor(Math.random() * 4)
            note[i][n[i]].style.opacity =1
            note[i][n[i]].style.animation = "down var(--speed) linear forwards"
            n[i]++
        }
    
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
        scoreBoard.innerText=score
    },steptime/10)
}


playBtn.onclick = () => {
    creNote()

    setTimeout(() => {
        music.volume = 0.8        
    }, 1000)

    playBtn.style.display = "none"
}