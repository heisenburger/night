// phrasebank

var bank = [
  "Advice I gave to other people was really about me",
  "a/s/l?",
  "Don't listen to the killers unless you fallin asleep while she's callin a cab",
  "In case of emergency: Good Luck",
  "I'm always tired but never of you",
  "There is nothing behind you",
  "Your mouth is as wonderous as the oceans and seas",
  "Assume all communications are tapped",
  "black skin is not a crime",
  "warm comfort",
  "she waits, seething, blooming",
  "CRYING ROOM →",
  "Do not go gentle into that good night",
  "Rage, rage against the dying of the light",
  "Please take your time. There is much to see.",
  "ugh",
  "Are you sure? Y/N",
  "open your mouth",
  "It is now safe to turn off your computer",
  "For my next trick, I will be emotionally stable",
  "The last person I had to forgive was myself",
  "earth sucks",
  "SUPPORT WOMEN OF COLOUR",
  "I walked. And then. I saw me walking in front of myself. But it wasn't really me.",
  "I thought my life would improve if I got a leather jacket. And I was totally right.",
  "PR__DA",
  "Just let it go",
  "If you're horny, let's do it",
  "I'm exhausted",
  "o.k.",
  "THE TRUTH IS OUT THERE",
  "I WANT TO BELIEVE",
  "The night is still young",
  "The one in front of the gun lives forever",
  "REAL RECOGNISE REAL",
  "Nick Dunne took my pride and my dignity and my hope and my money",
  "Don't give up. You've still got a couple of motherfuckers to prove wrong.",
  "Nice",
  "TRY AGAIN?",
  "all of their lies are true",
  "sometimes quiet is violent",
  "my parents warned me about the drugs in the streets but never the ones with hazel eyes and a heartbeat",
  "II. Eyes I dare not meet in dreams / In death's dream kingdom // Sunlight on a broken column / There, is a tree swinging / And voices are / In the wind's singing",
  "Once upon a time somewhere along the temporal continuum...",
  "in the world through which i travel i am endlessly creating myself",
  "Britney survived 2007. You can survive today.",
  "Cool girl is hot. Cool git is game. Cool girl is fun.",
  "Make art not friends",
  "In a time of deceit telling the truth is a revolutionary act.",
  "or perhaps we've forgotten that we are still pioneers",
  "Did you come into contact with unknown magical forces",
  "",
];

document.body.onload = getphrase(bank);

function getphrase(bank) {
  var phrase = bank[Math.floor(Math.random()*bank.length)];

  var textwrap = document.getElementById("textwrap");

  ["r", "g", "b", "w"].map(
    function (color) {
      var e = document.createElement("div");
      e.className = "tvtext " + color;
      e.innerHTML = phrase;
      textwrap.appendChild(e);
    }
  );

};