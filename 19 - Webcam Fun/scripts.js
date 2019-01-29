const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`OH NO!!!`, err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth; // capture video element height
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height); // call drawImage on canvas context (ctx)
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play(); // play the sound

    const data = canvas.toDataURL('image/jpeg'); // take the data out of the canvas
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome'); // handsome is the file name when download occurs
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', paintToCanvas); // canplay event is emitted when video.play is called