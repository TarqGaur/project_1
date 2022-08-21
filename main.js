camera = document.getElementById("live");

Webcam.attach(camera);

Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 95
});



function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("re").innerHTML = "<img id= 'cap_img' src="+data_uri+">";
    });
}

console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nZGafY7u-m/model.json");

