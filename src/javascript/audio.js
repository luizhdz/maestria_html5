(
    function(){
        const audio = document.querySelector("audio")
        const play = randomMusic()
        audio.src = play
        audio.play()
    }
)();

function randomMusic(min = 0 , max = 7){
    const random_index = Math.floor(Math.random() * (max - min)) + min;
    const music = playlist(random_index)
    return `./src/multimedia/audio/${music}`
}

function playlist (index){
    const list = [
        "chill-future-bass-music-no-copyright.mp3",
        "chill-house-arc-north-meant-to-be-ft-krista-marina-no-copyright-music.mp3",
        "chill-tropical-house-music-no-copyright.mp3",
        "lakey-inspired-chill-day.mp3",
        "no-copyright-music-chill-lofi-hip-hop-distant-copyright-free-music.mp3",
        "non-copyrighted-music-danlsan-free-with-you-chill.mp3",
        "non-copyrighted-music-dj-quads-birds-and-the-bees-chill-hop.mp3",
        "non-copyrighted-music-sappheiros-embrace-chill.mp3"
    ]
    return list[index]
}