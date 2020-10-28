const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 10;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(()=>{
        text.innerText = 'Hold';

        setTimeout(()=>{
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }
        , holdTime);
    }
    , breatheTime);
}
setInterval(breathAnimation, totalTime);

const circle = document.querySelector(".circle");
let xPos = 0;
function animate() {
    xPos += 10;
    circle.style.transform = `translate3d(${xPos}px, 0, 0)`;
    if (Math.abs(xPos) >= 900) {
        xPos = -500;
    }
    requestAnimationFrame(animate);
}
animate();

const circleIn = document.querySelector(".circleIn");
let yPos = 0;
function animateDown() {
    yPos += 10;
    circleIn.style.transform = `translate3d(0, ${yPos}px, 0)`;
    if (Math.abs(yPos) >= 900) {
        yPos = -500;
    }
    requestAnimationFrame(animateDown);
}
animateDown();

setTimeout(headerIn, 5000);
const h1 = document.querySelector('h1');
function headerIn() {
    h1.innerHTML += '  Home';
    setTimeout(()=>{
        h1.innerText = '';
    }
    , 5000);
}

const interval = setInterval(updateClock, 1000);
function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}

document.querySelector('.stopTime').addEventListener('click', stopClock);
function stopClock() {
    clearInterval(interval);
}
