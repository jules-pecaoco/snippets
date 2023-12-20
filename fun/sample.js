function showInputs() {
    document.getElementById("luvu").style.display = 'block';

    var input1 = document.getElementById('input1').value;
    var output = document.getElementById('output');
    output.innerHTML = input1;
    startMusic();
    document.getElementById("floatimage").style.display = 'block';
    startFlashing();
    hearts();

}

function startMusic() {
    const audioPlayer = document.getElementById('audioP');
    // Set the desired start time in seconds
    const startTimeInSeconds = 50;
    audioPlayer.currentTime = startTimeInSeconds;
    audioPlayer.play();
    //sample pull request
}

function hearts(){
    container = document.querySelector('.container')
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = `🍟` + `🍗` + `🍔`;
    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 + 2 + 's';
    container.appendChild(creat);
    setTimeout(() =>
    {
        creat.remove();
    },3000);

}


function startFlashing() {
    const inputText = document.getElementById('input1').value;
    const flashingText = document.getElementById('output');
    flashingText.innerHTML = '';
    for (let i = 0; i < inputText.length; i++) {
        const letter = document.createElement('span');
        letter.textContent = inputText[i];
        letter.className = 'rainbow';
        flashingText.appendChild(letter);
    }
}

setInterval(hearts,100);



