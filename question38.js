"use strict";
// 38.	Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
class _Music {
    constructor(nm, ttl, trk) {
        this.name = nm;
        this.title = ttl;
        this.track = trk;
    }
    make_album() {
        return `Artist's Name is ${this.name} and its Album is ${this.title} having  ${this.track} tracks"`;
    }
}
var album1 = new _Music("Rahat Ali Khan", "Dil daa Jani", 6);
var album2 = new _Music("Nusrat ALi Khan", "Yaar", 10);
var myNew_Album = [];
myNew_Album.push(album1);
myNew_Album.push(album2);
console.log(myNew_Album);
console.log("*****************");
console.log(album1.make_album());
console.log(album2.make_album());
