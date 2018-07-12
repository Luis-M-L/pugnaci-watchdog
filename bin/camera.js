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

var recordPath = "../records/";
var maxStorage = 50; // in frames
var delay = 500;

var webcam = NodeWebcam.create(options);

var rec = 0;
files = [];
record();

function record(){
  var picName = new Date().getTime();
  webcam.capture(recordPath + picName, function(err,data){
    if(err){
      console.log(err.message);
    }
  });
  files.push(picName);
  //console.log(files);
  rec++;
  if(rec > maxStorage) {
    deleteFirstImage(function(){

    });
  }
  if(rec < 100){
    setTimeout(record, delay);
  }
}

function deleteFirstImage(callback){
  fs.unlink(recordPath + files[0], (err) => {
    if (err) throw err;
    //console.log(recordPath + files[0], ' was deleted');
    files.shift();
    callback();
  });
}
