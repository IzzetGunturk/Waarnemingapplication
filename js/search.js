//aanmaken van de kaart van maptalks
/*var map = new maptalks.Map('map', {
  //coördinaten van eindhoven
  center: [5.4752, 51.4381],
  //zoom op de kaart
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  }),
  layers: [
    new maptalks.VectorLayer('v')
  ]
}); */

//array voor de straten die ik gebruik voor het POC
let streets = ['gerard philipslaan', 'kievitlaan']

//wordt opgeroepen door een onclick
function inputValue() {
  //leest de input op het element met het id inputValue
  var val = document.getElementById('inputValue').value;
  //vertaalt de uitkomst van het bovenstaande naar kleine letters zodat het niet hoofdlettergevoelig is
  let result = val.toLowerCase();

    //als het resultaat gelijk is aan het eerste element van de array
    //moet nog aangepast worden om het dynamisch te maken
    if (result == streets[0]) {
    console.log('A');
    //roept de functie changeViewA aan
    changeViewA();
  }
  //als het resultaat gelijk is aan het tweede element van de array
  else if(result == streets[1]) {
    console.log('B');
    //roept de functie changeViewB aan
    changeViewB(); 
  } 
  else {
    //een error bij een input die niet in de array staat
    alert('ERROR WRONG INPUT');
  }
}  

//Functie van maptalks voor een animatie af te spelen, moet ook nog aangepast worden voor een dynamisch werk
function changeViewA() {
  map.animateTo({
    center: [5.46467, 51.44336],
    zoom: 18,
    pitch: 0,
    bearing: 20,
  }, {
    duration: 5000
  });
}
//Functie van maptalks voor een animatie af te spelen, moet ook nog aangepast worden voor een dynamisch werk
function changeViewB() {
  map.animateTo({
    center: [5.49852,51.44273],
    zoom: 18,
    pitch: 0,
    bearing: 20,
  }, {
    duration: 5000
  });
}
