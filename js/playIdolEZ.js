const line = document.querySelectorAll(".line")
const playBtn = document.getElementById("play")
const music = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/IDOL_TVSIZE.mp3`)
const textScore = document.getElementById("status")
const zonecorrect = document.getElementById("zonecorrect")
const root = document.documentElement
const scoreBoard = document.getElementById("score")
const durbar = document.getElementById("taskbar")
const ending = document.getElementById("ending")

const beatmapIDOI =[0.6952232534829721, 1.3322982604489164, 2.388028270897833, 2.886191899380805, 3.4744392813467493, 4.196065538312694, 5.30417917376161, 5.785877052244582, 6.387825184210526, 7.083859441176471, 8.183629076625387, 8.70688420510836, 9.306959837074302, 9.970598215557276, 11.070954976006194, 11.618017857972136, 12.166569236455109, 12.912682368421052, 13.468637000386996, 13.839786503869968, 14.20924988235294, 14.355589257352941, 15.111167264318885, 15.80165839628483, 16.503780028250773, 17.252278410216718, 17.991293542182664, 18.342712670665634, 18.699133299148606, 19.066378552631576, 19.43115805611455, 19.782780184597524, 20.153759938080494, 20.530115691563466, 20.90662544504644, 21.22910219852941, 21.592572702012387, 21.962862080495356, 22.31557183397833, 22.6676594624613, 22.9699115874613, 23.337914590944273, 23.711850094427245, 24.081670472910215, 24.45473535139319, 24.809728854876163, 25.130750483359133, 25.525524986842107, 25.895154615325076, 26.25460361880805, 26.611891372291023, 26.988087000773994, 27.334495004256965, 27.69666875773994, 28.045211761222912, 28.409790014705884, 28.790235518188855, 29.16357164667183, 29.5159454001548, 29.876846903637773, 30.234226532120744, 30.588202410603717, 30.94573866408669, 31.31933991756966, 31.68095542105263, 32.080445299535604, 32.445238803018576, 32.82737918150155, 33.17355968498452, 33.531540438467495, 33.86641944195046, 34.22775669543344, 34.59557069891641, 34.97165432739938, 35.32196920588235, 35.680188834365325, 35.98840933436533, 36.3302725878483, 36.71325559133127, 37.076032219814245, 37.45230922329721, 37.83691622678018, 38.18339598026316, 38.54704673374613, 38.8919646122291, 39.22411361571208, 39.60542274419505, 39.96772949767802, 40.337942751160995, 40.69337025464396, 41.05695538312694, 41.65549451509288, 42.17498014357585, 42.7365251505418, 43.04897365054179, 43.24514590402477, 43.65335603250774, 44.02311078599071, 44.49953066447368, 44.71337354295665, 45.10738329643963, 45.4507340499226, 45.81483892840557, 46.18238868188855, 46.54276693537152, 46.91183831385449, 47.266258692337466, 47.63403244582044, 48.00881144930341, 48.35067995278637, 48.73230495626935, 49.08141408475232, 49.44391246323529, 49.81960409171827, 50.156175345201234, 50.52793209868421, 50.90558547716718, 51.21557697716719, 51.577724480650154, 51.92426898413312, 52.3062387376161, 52.66481624109907, 53.20459737306501, 53.36090474806502, 53.96773275503096, 54.31040188351393, 54.6581932619969, 54.823486011996906, 55.195212140479875, 55.555551018962845, 55.92816964744582, 56.284783650928794, 56.67007315441177, 57.01814453289474, 57.37260428637771, 57.72668516486068, 58.09632354334365, 58.48640629682663, 58.83282305030959, 59.194758803792574, 59.54196130727554, 59.89738356075851, 60.249968189241486, 60.60998156772446, 60.988921196207436, 61.3610533246904, 61.74391645317338, 62.09158008165635, 62.46190183513932, 62.72712746013932, 63.16409959210526, 63.53617834558824, 63.84650847058823, 64.29329810255419, 64.65204273103716, 64.94873248103715, 65.30651898452012, 65.6500368630031, 66.01486361648607, 66.38252274496904, 66.75332749845201, 67.09791287693498, 67.47264375541796, 67.84010863390094, 68.22420901238391, 68.60022439086687, 68.93045014434985, 69.30664752283282, 69.65946927631579, 70.02869202979876, 70.39117465828173, 70.7453727867647, 71.10493029024768, 71.45426079373064, 71.83521029721362, 72.2030164256966, 72.53605005417957, 72.91072055766253, 73.27364506114552, 73.63733081462848, 74.02416731811145, 74.38666307159443, 74.7176483250774, 75.07804407856038, 75.42206595704334, 75.79935358552632, 76.18677196400928, 76.55123734249226, 76.92490509597523, 77.08688684597523, 77.4393122244582, 77.78885710294117, 77.95052035294117, 78.30556198142415, 78.68179785990712, 79.0273229883901, 79.40010611687308, 79.77680837035604, 80.12964587383901, 80.48372675232199, 80.83614338080496, 81.19781663428792, 81.5694106377709, 81.92445401625386, 82.28976376973684, 82.65713764821982, 83.03055252670279, 83.39128953018576, 83.76308740866872, 84.1164989121517, 84.48859429063468, 84.83394704411765, 85.19694154760062, 85.5579043010836, 85.93210842956655, 86.29968968304954, 86.6460276865325, 87.01127006501548, 87.37034456849845, 87.70685019698143, 88.0526597004644, 88.3705603254644, 88.71760970394736, 89.00445820743035, 89.32240596091331]
var step=0;

var speed = 1.2;
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