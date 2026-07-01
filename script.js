const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

function crossRoad(choice){

if(choice=="right"){

gameOver("🌊 You fell into the lake!");

}

else{

question.innerHTML=`
<h2>🌊 You've reached a lake.</h2>
<p>Wait for a boat or swim?</p>
`;

choices.innerHTML=`
<button onclick="lake('wait')">⛵ Wait</button>
<button onclick="lake('swim')">🏊 Swim</button>
`;

}

}

function lake(choice){

if(choice=="swim"){

gameOver("🐟 Angry trout attacked you!");

}

else{

question.innerHTML=`
<h2>🏠 You reached the island.</h2>
<p>Choose a magical door.</p>
`;

choices.innerHTML=`
<button onclick="door('red')">🟥 Red</button>
<button onclick="door('yellow')">🟨 Yellow</button>
<button onclick="door('blue')">🟦 Blue</button>
`;

}

}

function door(color){

choices.innerHTML="";

restart.style.display="inline-block";

if(color=="yellow"){

result.className="win";

result.innerHTML=`
💎🎉<br><br>
Congratulations!<br>
You found the treasure!
`;

}

else if(color=="red"){

gameOver("🔥 Burned by fire!");

}

else{

gameOver("🐻 Wild beasts got you!");

}

}

function gameOver(message){

result.className="lose";

result.innerHTML=`
❌ Game Over<br><br>${message}
`;

choices.innerHTML="";

restart.style.display="inline-block";

}

function toggleMusic(){

const music=document.getElementById("bgMusic");

if(music.paused){

music.play();

}

else{

music.pause();

}

}