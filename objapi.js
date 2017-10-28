const Clarifai = require('clarifai');

var output;

const app = new Clarifai.App({
    apiKey: 'f0e4db7c9f2744df9fbbb93c9b251ad7'
});

app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
    function(response) {
      console.log(response.outputs[0].data.concepts[0].name);
      output = response.outputs[0].data.concepts[0].name
    },
    function(err) {
      console.error(err);
    }
);

module.exports = {output};
console.log("Output is " + output);