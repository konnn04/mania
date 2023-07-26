const PL = document.getElementsByClassName("listplay")
const home = document.getElementById("home")
const gameplay = document.getElementById("gameplay")
const titleWEB = document.querySelector("title")
var itemSong
var data ={}
var select=-1

//info
var beatmapAll
//= data[select].beatmap
var demo
var bpm



fetchAPI()
async function fetchAPI(){
    await fetch('https://6433dc771c5ed06c95889a06.mockapi.io/mes/ManiaCTB', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
       
      }).then(tasks => {
        data = tasks;
        update(tasks)
      }).catch(error => {
        console.log("looix")
      })
}

const update = (data)=>{
    for (let i=0;i<data.length;i++) {
        PL[0].innerHTML+=`<div class="itemsong">
        <div class="playButton">
            <i class="fa-solid fa-play"></i>
        </div>
        <div class="infoBox">
            <p class="titleSong">${data[i].name}</p>
            <p class="infoSong">${data[i].info}</p>
        </div>
    </div>`
    }
    itemSong = document.getElementsByClassName("itemsong")
    playSong = document.getElementsByClassName("playButton")
    for (let i=0;i<data.length;i++) {
        itemSong[i].onclick =()=>{
            //UPDATE
            titleWEB.textContent ="Mania | "+ data[i].name
            bpm=data[i].bpm
            bg=data[i].bg
            root.style.setProperty("--linkbg", `url(${bg})`)
            //DEMO
                if (select!=-1) {
                    demo.pause()
                }
                select=i;
                demo = new Audio(data[i].audio)
                demo.currentTime = 40
                demo.play()
        }
        playSong[i].onclick = ()=>{
            initKey()
            music= new Audio(data[i].audio)
            beatmapAll=data[i].beatmap
            home.opacity=0
            bpm=data[i].bpm
            steptime = (60000/bpm)
            setTimeout(()=>{
                home.style.display = "none"
                gameplay.style.display = "flex";
                delay = speed* ((zonecorrect.offsetTop) / (line[0].offsetHeight+100))
                gameplay.style.opacity = 0

            },500)
            setTimeout(()=>{
                demo.pause()
                gameplay.style.opacity = 1
            },1500)
        }
    }
        
    
    
}
