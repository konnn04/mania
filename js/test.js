const music2 = new Audio(`https://static.miraheze.org/projectsekaiwiki/f/fc/Song74_se.flac`)
var start = false
var s="["
var bpmCre = 132
document.documentElement.addEventListener('keypress',(e)=>{
    if(e.key == 'p') {
        if (start==false) {
            music2.play()
            demo.pause()
            start=true;
        }else{

            s+=(music2.currentTime - ((music2.currentTime % (60/bpmCre))/8)) +", "
            console.log(s)
        }
    }
})

// {
//     "bg": "https://static.wikia.nocookie.net/bandori/images/4/42/Roselia_9th_Single_Blu-Ray_Edition_Cover.jpg",
//     "audio": "https://cdn.glitch.global/0596c33b-161b-4fad-8f30-5b2241e94dce/y2mate.com%20-%20FIRE%20BIRD.mp3?v=1689685832901",
//     "bpm": 150,
//     "beatmap": [],
//     "name": "Fire Bird",
//     "info": "Roselia - from Bang Dream"
// }