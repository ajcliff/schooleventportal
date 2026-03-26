let images = [
    "https://picsum.photos/800/300?1",
    "https://picsum.photos/800/300?2",
    "https://picsum.photos/800/300?3"
];

let i = 0;

function slideShow(){
    document.getElementById("slide").src = images[i];
    i++;
    if(i >= images.length){
        i = 0;
    }
}

setInterval(slideShow, 3000);