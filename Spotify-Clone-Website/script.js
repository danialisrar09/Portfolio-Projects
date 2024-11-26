let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSecond(second) {
    if (isNaN(second) || second < 0) {
        return "Invalid input";

    }

    const minutes = Math.floor(second / 60);
    const remainingSeconds = Math.floor(second % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`

}

async function getsongs(folder) {
    currFolder = folder
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])

        }
    }

    // Show all the songs in the playlists
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    // console.log(songUL);
    songUL.innerHTML = ""
    for (const song of songs) {
        // console.log(song.querySelector(".songname").innerHTML);
        let trimmed_songname = song.replaceAll("%20", " ")
        songUL.innerHTML = songUL.innerHTML + `<li>
                            <img class="" src="Images/ab67706f00000002472120b92edea982b5feb264.jpeg" alt="" srcset="">
                            <div class="info">
                                <div class="songname f-16">${trimmed_songname.replaceAll(".mp3", "")}</div>
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
            let song_name = e.querySelector(".info").firstElementChild.innerHTML.trim()
            playMusic(song_name.replaceAll(".mp3", ""))
        })

    });

    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "icons/pause.svg"

    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"


}

async function displayAlbum() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`);
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            //get the metadata from the folder
            let a = await fetch(`http://127.0.0.1:3000/${folder}/info.json`)
            let response = await a.json()
            cardContainer.innerHTML =  cardContainer.innerHTML + `<div data-folder="${folder}" class="card rounded bg-grey-2">
                            <div class="play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="23px" height="23px">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                            <img src="/songs/${folder}/cover.jgp" alt="">
                            <h2>${response.title}</h2>
                            <p>${response.description}</p>
                        </div>`
        }
    }

    //Load playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e=> {
        e.addEventListener("click", async item=>{
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
        })
    })
}
    
async function main() {
    // Get the list of all the songs
    await getsongs("/songs/Album-1")
    playMusic(songs[0], true)

    //Display all the album in the page
    await displayAlbum()

    //Attach a eventlistner to play, next and previous buttons
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "icons/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "icons/play.svg"
        }
    })

    //EventListner for timeUpdate
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML == `${secondsToMinutesSecond(currentSong.currentTime)}:${secondsToMinutesSecond(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";

    })

    //Add an event listner to the seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        document.querySelector(".circle").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 100 + "%";
    })


    //Add an eventlistner to the hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left-section").style.left = "0%";
    })

    //Add an eventlistner to the cross
    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left-section").style.left = "-100%";
    })

    //Add an Eventlistner to the previous button
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index - 1) > songs.length) {
            playMusic(songs[index - 1])

        }
    })

    //Add an Eventlistner to the next button
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])

        }
    })



}

main()