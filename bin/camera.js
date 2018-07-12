var NodeWebcam = require("node-webcam");
var fs = require("fs");

var options = {
  width: 1280,
  heigth: 720,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: false,
  callbackReturn: "buffer",
  verbose: false
};

var webcam = NodeWebcam.create(options);

var picName = new Date().getTime();
webcam.capture("../records/" + picName, function(err,data){
  if(err){
    console.log(err.message);
  }
});
