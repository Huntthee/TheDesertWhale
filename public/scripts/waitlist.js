const waiting = [
  {
    "position": 1,
    "name": "Placeholder"
  }
];

const working = [
  {
    "name": "Placeholder"
  }
];

const complete = [
  {
    "name": "Placeholder",
    "work": "Placeholder"
  }
];

//Create tables for Waiting, In Progress and Completed works.

// Table for clients Waiting
let waitTable = '<table>';
waitTable += '<tr><th>Position</th><th>Name</th></tr>'

const client = waiting.forEach(function(item){
  waitTable += `
  <tr>
  <td>${item.position}</td>
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