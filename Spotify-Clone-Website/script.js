let currentSong = new Audio();

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
            console.log(element.href);
            songs.push(element.href.split("-%20")[1])
            
        }
    }
    return songs
}

const playMusic = (track)=>{
    // let audio = new Audio("/songs/" + track);
    currentSong.src = "/songs/" + track;
    currentSong.play();
}

async function main() {

    // Get the list of all the songs
    let songs = await getsongs()
    console.log(songs);
    
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
                                <img class="" src="play.svg" alt="" srcset="">
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
    
}

main()