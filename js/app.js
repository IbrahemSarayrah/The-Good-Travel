'use strict';

// global array
let allPlaces = [];

let allImg = ['img/HAWAII.jpg' ,'img/ITALY.png' ,'img/LONDON.png' , 'img/MALAYSIA.png' ,'img/PARIS.png' , 'img/SLOVAKIA.png'];
// constuctor

function Travel (name , place , transport) {
  this.name = name;
  this.place =place;
  this.transport =transport;
  allPlaces.push(this);
}


let form = document.getElementById('form');

form.addEventListener('submit' , submitPlaces);

function submitPlaces (event){
  event.preventDefault();
  let placeName = event.target.placeName.value;
  console.log(placeName);
  let tripPlace = event.target.tripPlace.value;
  console.log(tripPlace);
  let transport = event.target.transport.value;
  console.log(transport);

  // data for constructor
  new Travel (placeName , tripPlace , transport);
  console.log (allPlaces);
  reset();
  renderPlaces();
  setData();
}

//// render data on table
let table = document.getElementById('table');
function renderPlaces(){
  for (let i = 0 ; i < allPlaces.length ; i++) {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    let tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData.textContent = `Place Name: ${allPlaces[i].name} Trip Place: ${allPlaces[i].place} Type of Transport: ${allPlaces[i].transport}`;
  }
}

// reset table

function reset(){
  table.innerHTML='';
}

//// local storage

function setData() {
  let data = JSON.stringify(allPlaces);
  localStorage.setItem('data', data);
}


function getData(){
  let stringlData = localStorage.getItem('data');
  let normalData = JSON.parse(stringlData);

  if (normalData !== null){
    allPlaces = normalData;
  }


}
getData();
renderPlaces();
