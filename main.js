prediction = "";
    camera = document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format: 'png',
        png_quality:90
    });

    Webcam.attach(camera);
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
        });
    }

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cO6TiW3V7/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        
        prediction = results[0].label;
        toSpeak = "";

        
function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
        
        if(prediction == 'amazing')
        {
            document.getElementById("update_emoji").innerHTML = "&#128076";
            toSpeak = "This is looking amazing";
        }
        else if(prediction == 'best')
        {
            document.getElementById("update_emoji").innerHTML ="&#128077";
            toSpeak = "All the best";
        }
        else if(prediction == 'victory')
        {
            document.getElementById("update_emoji").innerHTML ="&#9996";
            toSpeak = "That was the marvelous victory";
        }
        else if(prediction == 'high five')
        {
            document.getElementById("update_emoji").innerHTML ="&#9995";
            toSpeak = "High five";
        }
        else{
            document.getElementById("update_emoji").innerHTML = "&#128078";
            toSpeak = "that was the worst";
        }
        speak();
    }
}



