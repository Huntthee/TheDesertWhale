const waiting = [
  {
    "name": "SmileyRaider96"
  },
  {
    "name": "TzEnglishMuffin"
  },
  {
    "name": "AceAttorneyMeeks"
  },
  {
    "name": "HeyCallMeClay"
  },
  {
    "name": "Justin Gigantor"
  },
  {
    "name": "TommyYoza"
  }
];

const working = [
  {
    "name": "SilverKestrelStudios"
  },
  {
    "name": "NoAimDontFlame"
  }
];

const complete = [
  {
    name: 'Millz_xo',
    work: "Sub Badges"
  },
  {
    name: "ThePluckyAvatar",
    work: "Two Twitch Scenes"
  },
  {
    name: "Lexxo",
    work: "Illustration"
  },
  {
    name: "Kamizard",
    work: "Emote"
  },
  {
    name: "Tb0neT0ne",
    work: "Logo for merch"
  },
  
  {
    name: "Mrbrighside1",
    work: "Background Illustration"
  },
  {
    name: "FranklinTurtz",
    work: "Emote for Twitch"
  },
  {
    name: "MelvinS0n",
    work: "Emote & Merch Resize",
  },
  {
    name: "Omarv94",
    work: "2 Emotes & Logo",
  },
  {
    name: "DadActual_",
    work: "Logo",
  },
  {
    name: "Meekstv15",
    work: "Emotes, Banner and Scene",
  },
  {
    name: "Lexxo & DrSpanky",
    work: "Images and Styling for WorldAnvil site",
  },
  {
    name: "ElyPypa",
    work: "Emote",
  },
  {
    name: "TzEnglishMuffin",
    work: "Sub Badges",
  },
  {
    name: "HeyCallMeClay",
    work: "Stream Package",
  },
  {
    name: "DillThrills",
    work: "Logo, Panels & Emote",
  },
  {
    name: "Kamizard",
    work: "Emotes",
  },
  {
    name: "OG_Monrk",
    work: "Emotes",
  },
  {
    name: "Tb0neT0ne",
    work: "Scenes",
  },
  {
    name: "PrincessPlaya44",
    work: "Logo",
  },
  {
    name: "Lexxo & DrSpanky",
    work: "Logo & Icon",
  },
  {
    name: "Kamizard",
    work: "Logo, Banners & Scenes",
  },
  {
    name: "Notorious_BLT",
    work: "Emotes & YouTube Thumbnail",
  },
  {
    name: "SilverKestrelStudios",
    work: "Scenes & YouTube Thumbnails",
  },
  {
    name: "Meekstv15",
    work: "Illustrated Avatar",
  },
  {
    name: "OG_Monrk",
    work: "Merch Logo",
  },
  {
    name: "JarlMaxi",
    work: "Commercial artwork for merch.",
  },
  {
    name: "Arcadio",
    work: "Personal Artwork",
  },
  {
    name: "Smoke_Eater3696",
    work: "Custom Stream Package.",
  },
  {
    name: "Kamizard",
    work: "Emotes.",
  },
  {
    name: "Notorious_BLT",
    work: "Pack of 6 Emotes.",
  },
  {
    name: "Arcadio",
    work: "Illustrated Starting Scene.",
  },
  {
    name: "Dumpstershark",
    work: "Set of Emotes.",
  },
  {
    name: "Yolosolofolo",
    work: "Pack of 4 Emotes.",
  },
  {
    name: "SilverKestrelStudios",
    work: "Sub Badges.",
  },
  {
    name: "antsinmyeyes3",
    work: "Emotes & Avatar.",
  },
  {
    name: "Beardie_89",
    work: "Custom Stream Package.",
  },
  {
    name: "Prxmeth3us",
    work: "Pack of 3 Emotes.",
  },
  {
    name: "Joel_theshortone",
    work: "Pack of 4 Emotes.",
  },
  {
    name: "SpondeeBob",
    work: "Pack of 14 Emotes & Sub Badges.",
  },
  {
    name: "Jeremey Hay",
    work: "Illustrated Character Portrait.",
  },
  {
    name: "Arcadio",
    work: "Commissioned Stream Schedule.",
  },
  {
    name: "Mrbrightside1",
    work: "Stream Sched, Avatar & Stream Packages.",
  },
  {
    name: "EvolMelky",
    work: "Animated Background.",
  },
  {
    name: "ThePluckyAvatar",
    work: "Custom Stream Package.",
  },
  {
    name: "JobberJosh",
    work: "Panels.",
  },
  {
    name: "Rorlann",
    work: "Pack of 6 Sub Badges.",
  },
  {
    name: "RedRumGato",
    work: "Custom Stream Package.",
  },
  {
    name: "PurpleGrimes",
    work: "Emote.",
  },
  {
    name: "Vanndriss",
    work: "Personal Artwork.",
  },
  {
    name: "Poliswaggs",
    work: "Emote.",
  },
  {
    name: "JobberJosh",
    work: "Pack of 6 Emotes.",
  },
  {
    name: "Rorlann",
    work: "Illustrated Starting Scene.",
  },
  {
    name: "Arcadio",
    work: "Stream Schedule.",
  },
  {
    name: "CadesArcade",
    work: "Illustrated Scenes.",
  },
  {
    name: "honey_pot92",
    work: "Emote & commissioned emotes.",
  },
  {
    name: "JarlMaxi",
    work: "Avatar.",
  },
  {
    name: "CadesArcade",
    work: "Stream Schedule.",
  },
  {
    name: "Jayber29",
    work: "Pack of 4 Emotes.",
  },
  {
    name: "joeannab",
    work: "Pack of 6 Emotes.",
  },
  {
    name: "HeyCallMeClay",
    work: "Custom Stream Pack.",
  },
  {
    name: "SilverKestrelStudios",
    work: "Stream Panels.",
  },
  {
    name: "NoAimDontFlame",
    work: "Sub Badges.",
  },
  {
    name: "SuperStooob",
    work: "Stream Panels & Banners.",
  },
];

//Create tables for Waiting, In Progress and Completed works.

// Table for clients Waiting
let waitTable = '<table>';
waitTable += '<tr><th>Name</th></tr>'

const client = waiting.forEach(function(item){
  waitTable += `
  <tr>
  <td>${item.name}</td>
  </tr>
  `;
});

waitTable += '</table>';

document.getElementById('waiting').innerHTML = waitTable;


// Table for works in progress
let workTable = '<table>';
workTable += '<tr><th>Name</th></tr>'

const clientWork = working.forEach(function(item){
  workTable += `
  <tr>
  <td>${item.name}</td>
  </tr>
  `;
});

workTable += '</table>';

document.getElementById('working').innerHTML = workTable;


// Table for completed works
let doneTable = '<table>';
doneTable += '<tr><th>Name</th><th>Commission</th></tr>'

const clientDone = complete.forEach(function(item){
  doneTable += `
  <tr>
  <td>${item.name}</td>
  <td>${item.work}</td>
  </tr>
  `;
});

doneTable += '</table>';

document.getElementById('complete').innerHTML = doneTable;