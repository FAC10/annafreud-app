
  var width = 200;    // We will scale the photo width to this
  // var height = 150;     // This will be computed based on the input stream

  var streaming = false;

   document.getElementById('camera_small').addEventListener('click', () => {
     startup();
     document.getElementById('video').style.display = 'block';
     document.getElementById('startbutton').style.display = 'block';
     document.getElementById('photo').style.display = 'none';
   });
  // var video = null;
  // var canvas = null;
  // var photo = null;
  // var startbutton = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occured! " + err);
    });

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takepicture();
      video.style.display = 'none';
      photo.style.display = 'block';
      startbutton.style.display = 'none';
      ev.preventDefault();
    }, false);
    clearphoto();
  }

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    } else {
      clearphoto();
    }
  }




// navigator.mediaDevices.getUserMedia({video:true}).then(function(stream) {
//   /* use the stream */
//   var video = document.querySelector(".video");
//   // video.src = window.URL.createObjectURL(stream);
//   video.srcObject = stream;
//
//   video.onloadedmetadata = function(e) {
//     video.play();
//     setTimeout(takeSnapshot(), 3000);
//     };
//
//
// }).catch(function(err) {
//   console.log(err);
// });
//
// function takeSnapshot(){
//
//     var hidden_canvas = document.querySelector('.canvas');
//     var video = document.querySelector('.video');
//     var image = document.getElementById('snapshot');
//
//
//         // Get the exact size of the video element.
//         width = video.videoWidth;
//         height = video.videoHeight;
//
//         // Context object for working with the canvas.
//         context = hidden_canvas.getContext('2d');
//       console.log('context is ', context);
//
//     // Set the canvas to the same dimensions as the video.
//     hidden_canvas.width = width;
//     hidden_canvas.height = height;
//
//     // Draw a copy of the current frame from the video on the canvas.
//     context.drawImage(video, 0, 0, width, height);
//
//     // Get an image dataURL from the canvas.
//     var imageDataURL = hidden_canvas.toDataURL('image/jpeg');
//
//
//     // Set the dataURL as source of an image element, showing the captured photo.
//     image.setAttribute('src', imageDataURL);

// };
