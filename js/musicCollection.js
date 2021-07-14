let musics = [{
        id: 1,
        title: "24K Magic",
        singer: "BrunoMars",
        url: "https://bruno-mars.mp3juices.red/"
    },
    {
        id: 2,
        title: "Hello",
        singer: "Addele",
        url: "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY?autoplay=true"
    },
    {
        id: 3,
        title: "Dark Horse",
        singer: "Katy Perry",
        url: "https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X?autoplay=true"
    }

];


console.log(musics.sort((music1, music2) => music1.title.localeCompare(music2.title)));

console.log(musics.sort((music1, music2) => music2.id - music1.id));