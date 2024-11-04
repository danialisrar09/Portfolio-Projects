let currentSong = new Audio();

function secondsToMinutesSecond(second) {
    if (isNaN(second) ||  second < 0 ) {
        return  "Invalid input";

    }

    const minutes = Math.floor( second / 60 );
    const remainingSeconds = Math.floor(  second % 60 );

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`

}
async function getsongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    console.log(response);

    let div =  document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];  
        if(element.href.endsWith(".mp3")){
            // console.log(element.href);
            songs.push(element.href.split("-%20")[1])
            
        }
    }
    return songs
}

const playMusic = (track, pause=false)=>{
    // let audio = new Audio("/songs/" + track);
    currentSong.src = "/songs/" + track;
    if(!pause){
        currentSong.play();
        play.src = "icons/pause.svg"

    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function main() {

    // Get the list of all the songs
    let songs = await getsongs()
    playMusic(songs[0], true)
    // console.log(songs);
    
    // Show all the songs in the playlists
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                            <img class="" src="Images/ab67706f00000002472120b92edea982b5feb264.jpeg" alt="" srcset="">
                            <div class="info">
                                <div class="songname f-16">${song.replaceAll("%20", "")}</div>
                                <div class="artistname f-14">Danial</div>
                            </div>
                            <div class="playnow">
                                <!-- <span>Play now</span> -->
                                <img class="" src="icons/play.svg" alt="" srcset="">
                            </div>
                         </li>`
    }

    // Attach an eventlistner to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
        
    });

    //Attach a eventlistner to play, next and previous buttons
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "icons/pause.svg"
        }
        else{
            currentSong.pause()
            play.src = "icons/play.svg"
        }
    })

    //EventListner for timeUpdate
    currentSong.addEventListener("timeupdate", ()=>{
        console.log(currentSong.currentTime, currentSong.duration );
        document.querySelector(".songTime").innerHTML == `${secondsToMinutesSecond(currentSong.currentTime)}:${secondsToMinutesSecond(currentSong.duration)}` 
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100  +  "%";

    })  

    //Add an event listner to the seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100  +  "%";       
    })
    

    //Add an eventlistner to the hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left-section").style.left = "0%" ;
    })
    
    //Add an eventlistner to the cross
    document.querySelector(".cross").addEventListener("click", ()=>{
        document.querySelector(".left-section").style.left = "-100%" ;
    })
}

main()