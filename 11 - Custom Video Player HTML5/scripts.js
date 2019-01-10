// Get out elements
const player = document.querySelector('.player');
const video = player.querySelector('viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progress-filled');
const toggle = player.querySelector('toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// Build out functionsSpeed: 1.5×

// Hook up the event listeners