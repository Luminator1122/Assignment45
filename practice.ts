interface album {
    artist: string;
    title : string
    track?: number
} 
function make_album(album: album) {
      album.track = 6;
      console.log(album);    
}
make_album({artist:'Ayesha',title: 'Lifeline'})