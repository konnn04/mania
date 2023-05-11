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
const music = new Audio(`https://cdn.glitch.global/dc6948cb-dff5-4efc-86db-fe258b6f1750/IDOL_TVSIZE.mp3`)

const beatmapIDOI = [0.5780835034829722, 1.2970821354489164, 2.434904645897833, 2.913270524380805, 3.460779656346749, 4.220813163312694, 5.29492867376161, 5.788359427244582, 6.381778059210527, 7.010949312693499, 8.200213826625387, 8.703886455108359, 9.180189083591332, 9.950250965557276, 11.024283351006192, 11.586420732972137, 12.146246486455109, 12.880362493421053, 13.444762625386996, 13.811749753869968, 14.204180132352942, 14.35113988235294, 15.093488764318886, 15.779769396284829, 16.507037653250773, 17.21171778521672, 17.966750667182662, 18.301020670665636, 19.01686142763158, 19.788540309597522, 20.510673191563466, 21.235520323529414, 21.976587330495356, 22.6713493374613, 23.407908344427245, 24.051739347910218, 24.811568979876164, 25.523594736842107, 26.26010911880805, 26.956866125773995, 27.69587338273994, 28.429501139705884, 29.138076771671827, 29.493005525154796, 29.80303627863777, 30.117585532120742, 30.639875535603714, 31.38021366756966, 32.0859901745356, 32.80116943150155, 33.530586688467494, 34.24196319543344, 34.97046520239938, 35.31451595588236, 35.58984870588235, 35.884152209365325, 36.427428091331265, 36.72514596633127, 37.01133209481424, 37.292965598297215, 37.820226476780185, 38.53807798374613, 39.24869149071207, 39.97712437267802, 40.645845504643965, 40.81714337964396, 41.01864788312693, 41.63798751509288, 42.15926864357585, 42.37346239705882, 42.7826017755418, 43.17018290402477, 43.30782302902477, 43.67265678250774, 44.01599966099071, 44.46695003947369, 44.674549792956654, 45.097005796439625, 45.456375174922606, 45.81360867840557, 46.17792530688855, 46.53839806037152, 46.90708093885449, 47.26609944233746, 47.62466382082043, 47.987122824303405, 48.33882282778637, 48.70639708126935, 49.067922459752324, 49.44130058823529, 49.604174838235295, 49.79270484171827, 50.104263466718265, 50.54010422368421, 50.908250727167186, 51.280134355650155, 51.575746105650154, 51.93403573413313, 52.2976086126161, 52.64398686609907, 53.18961212306502, 53.34815599806502, 53.90944375503096, 54.29832338351393, 54.45137313351393, 54.766282886996905, 54.8850623869969, 55.22471364047988, 55.574654893962844, 55.94215739744582, 56.30062202592879, 56.66311340441177, 56.99725303289473, 57.36533916137771, 57.716096789860686, 58.073773918343655, 58.44148204682663, 58.8038614253096, 59.15629292879257, 59.51975380727554, 59.87447606075851, 60.24164168924149, 60.60531694272446, 60.97708682120743, 61.3584554496904, 61.68908195317338, 62.064456831656344, 62.433533460139316, 62.732687210139325, 63.10689396362229, 63.47477184210526, 63.83342809558824, 64.27368322755417, 64.57232510255419, 64.93981798103715, 65.30679985952013, 65.6728568630031, 66.01398774148606, 66.40184274496904, 66.76490637345202, 67.11346425193499, 67.47730400541795, 67.83262213390093, 68.1082898873839, 68.2282095123839, 68.46017714086686, 68.59938089086687, 68.95127514434985, 69.30713227283282, 69.54002215131578, 69.66259477631579, 69.88194490479876, 70.03073340479877, 70.42583603328173, 70.7588591617647, 71.11322704024768, 71.48017654373065, 71.82732129721363, 72.1725681756966, 72.54975780417956, 72.91587780766254, 73.27385156114552, 73.6207950646285, 73.85136631462849, 74.01605344311145, 74.19148569311146, 74.38555794659443, 74.7337999500774, 75.10311370356037, 75.46386645704335, 75.82016021052632, 75.97512796052631, 76.16723146400928, 76.33162208900929, 76.48407858900929, 76.83471546749226, 77.03878897097523, 77.4285593494582, 77.77680222794118, 77.94434110294118, 78.31818998142414, 78.67771335990712, 79.0404777383901, 79.39750561687308, 79.76351624535604, 80.119580748839, 80.48913250232198, 80.84729175580495, 81.21023025928793, 81.5935571377709, 81.95577026625386, 82.28639764473685, 82.68008889821981, 83.02003940170279, 83.38901803018575, 83.75360940866874, 84.11744653715171, 84.47859129063468, 84.85382354411766, 85.18427592260062, 85.58389267608358, 85.96105867956656, 86.31570918304953, 86.68149231153251, 87.03521094001549, 87.38393944349846, 87.73606469698142, 88.09124457546439, 88.47421882894737, 88.80896308243034, 89.04734895743034, 89.34911096091331]
var step=0;

var speed = 1.2;
var difficult = 1;
var ranDif = difficult;

durbar.style.width=0
root.style.setProperty("--speed", `${speed}s`)

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
var maxcombo=0
var result = [0,0,0,0,0] //Perfect / Great / Good / Bad / Miss
var steptime = (60000/bpm)


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
        if (offset < 250) {
            note[i][nd[i]].style.opacity = 0;
            nd[i]++;
            //Ghi max combo
            maxcombo=(maxcombo<combo)?combo:maxcombo;

            if (offset < 30) {
                //Perfect
                combo++;
                score+=5000+combo*100
                heart+=(heart<10)?0.2:0;
                result[0]++;

                textScore.innerHTML = ``
            textScore.innerHTML += `<p>Perfect!</p><p id="combo">${combo}</p>`
            } else if (offset < 45) {
                //Great
                combo++;
                score+=3000+combo*100
                heart+=(heart<10)?0.2:0;
                result[1]++;

                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Great!</p><p id="combo">${combo}</p>`
            } else if (offset < 60) {
                //Good
                score+=1500+combo*100
                heart+=(heart<10)?0.1:0;
                result[2]++;

                combo=0;
                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Good!</p>`
            } else if (offset <= 75) {
                //Bad
                score+=500+combo*100
                heart+=(heart<10)?0.1:0;
                result[3]++
                combo=0;
                textScore.innerHTML = ``
                textScore.innerHTML += `<p>Bad!</p>`
            } else if (offset > 75 && offset < 200) {
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
        if (music.currentTime == music.duration) {
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