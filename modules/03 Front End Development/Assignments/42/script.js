var sec_count = 1;

function Video(title, uploader, seconds){
    /*
    Get: title, uploader, seconds of a movie.
    Returns a massage when using the watch inner function.
    */
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.watch = function (sec) {
        try {
            return 'You watched all '+this.seconds+" seconds of the movie '"+this.title+"'";
        } catch (error) {
            return "Oops... An error occured";
        }
    }
}

function engin2(){
    var seconds = 0;
    for (var i=0;i<=sec_count;i++){
        seconds = seconds + document.getElementById(String.fromCharCode(i)).value;
    }
    document.getElementById("msg").innerText = "You watched all "+seconds +" seconds of the movies"; 
 }
function engin(){
   var title    = document.getElementById("title").value;
   var uploader = document.getElementById("uploader").value;
   var seconds  = document.getElementById("seconds").value;
   var msg = new Video(title, uploader, seconds);
   document.getElementById("msg").innerText = msg.watch(seconds); 
}

function addVideo() {
    var div = document.getElementById("fields");
    div.innerHTML = div.innerHTML +'<form><input id="title" type="text" placeholder="Title" required>\
    <select id="uploader" required>\
        <option disabled selected value>  --- select an uploader ---  </option>\
        <option value="Sara">Sara</option>\
        <option value="Rivka">Rivka</option>\
        <option value="Siran">Siran</option>\
        <option value="Leha">Leha</option>\
        <option value="Danit">Danit</option>\
      </select>\
    <input id="'+sec_count+'" type="number" placeholder="Seconds" required><br>';
    sec_count++;
}


/* test
var data = []

for (var i = 0; i < 5; i++) {
    var v = new Video("video "+Math.floor(Math.random() * (15)), "The neerd youtuber", 60 + Math.floor(Math.random() * (60)));
    data.push(v);  
}

for (var i = 0; i < data.length; i++) {
    data[i].watch(60 + Math.floor(Math.random() * (60)));
}
*/