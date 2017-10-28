const fs = require('fs');
const readLastLines = require('read-last-lines');
const say = require('say')
const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'f0e4db7c9f2744df9fbbb93c9b251ad7'
});

function driver(){
    // fs.readFile('output.txt', 'utf8', function(err, data) {  
    //     if (err) throw err;
    //     console.log(data);
    //     if(data) {
    //         console.log("hello");
    //     }
    //     fs.writeFile('output.txt', '', function(){console.log('done')})
    // });
    readLastLines.read('output.txt', 2)
    .then((lines) => {
        console.log(lines);
        app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
            function(response) {
            //   if(lines === '1\r\n'){
                // say.speak("Obstacle is " + response.outputs[0].data.concepts[0].name);
            if(lines === '1') {
                // console.log("Obstacle is " + response.outputs[0].data.concepts[0].name);
                say.speak("Obstacle is " + response.outputs[0].data.concepts[0].name);
            }
            },
            function(err) {
              console.error(err);
            }
        );
    });
}

console.log('before setInterval');

say.speak("System started");

setInterval(driver, 1000);
