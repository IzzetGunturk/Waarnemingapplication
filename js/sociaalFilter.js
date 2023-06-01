// Vector/icoon wordt toegevoegd aan de map
map.removeLayer(layer);
var layer = new maptalks.VectorLayer('vector').addTo(map);
map.addLayer(layer);

// functie aangemaakt voor de iconen d.m.v. parameters in de functie
function AddMarker (longitude, latitude, symbol, layer, title, content){
  var marker = new maptalks.Marker(
      [longitude, latitude], {
        'symbol': {
          'markerFile': symbol,
          'markerWidth': 30,
          'markerHeight': 30,
          'markerOpacity': 1,
        }
      }
    ).addTo(layer);
    // marker toegevoegd voor de pop-up melding van de iconen
    marker.setInfoWindow({
      'title'     : title,
      'content'   : content
    });
}

// functies voor de "buurthuizen" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddBuurthuizen(){
  AddMarker(5.4884538650512695, 51.432334899902344, 'src/icons/Buurthuis.png', layer, 'Rochusbuurthuis De Buut','<div>Openingstijden: <br>09:00 t/m 18:00</div><img src="src/img/buurthuizen/debuut.jfif" width="120"></img>')
  AddMarker(5.4528207, 51.4474614, 'src/icons/Buurthuis.png', layer, 'Space-S Buurthuis','<div>Openingstijden: <br>09:00 t/m 01:00</div><img src="src/img/buurthuizen/space-s.jfif" width="120"></img>')
  AddMarker(5.461628111945255, 51.440819239053525, 'src/icons/Buurthuis.png', layer, 'Bellefort','<div>Openingstijden: <br>09:00 t/m 17:00</div><img src="src/img/buurthuizen/bellefort.jpg" width="120"></img>')
  AddMarker(5.489752245052128, 51.4330698262302, 'src/icons/Buurthuis.png', layer, 'Rochusbuurtvereniging','<div>Openingstijden: <br>09:00 t/m 18:00</div><img src="src/img/buurthuizen/rochusbuurtvereniging.jpg" width="120"></img>')
}

// functies voor de "parken" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddParken(){
  AddMarker(5.4787373542785645, 51.431251525878906, 'src/icons/Parken.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.500661886453266, 51.43074533358328, 'src/icons/Parken.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.458882504968807, 51.43202317311224, 'src/icons/Parken.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.469107, 51.4333744, 'src/icons/Parken.png', layer, 'lorem ipsum','lorem ipsum')
}

// functies voor de "speeltuinen" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddSpeeltuinen(){
  AddMarker(5.467743, 51.435209, 'src/icons/Speeltuinen.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.453849, 51.439008, 'src/icons/Speeltuinen.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.459188, 51.446409, 'src/icons/Speeltuinen.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.463829, 51.446405, 'src/icons/Speeltuinen.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.471315, 51.449027, 'src/icons/Speeltuinen.png', layer, 'lorem ipsum','lorem ipsum')
}

// functies voor de "sport (voetbalveldjes/basketbalveldjes)" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddSport(){
  AddMarker(5.457309, 51.451273, 'src/icons/Basketbalveldjes.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.490258, 51.434106, 'src/icons/Voetbalveldjes.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.497858, 51.438526, 'src/icons/Voetbalveldjes.png', layer, 'lorem ipsum','lorem ipsum')
  AddMarker(5.459535, 51.441197, 'src/icons/Voetbalveldjes.png', layer, 'lorem ipsum','lorem ipsum')
}

// variabelen gemaakt van de 4 checkbox
function CheckBoxFilter2(){
  var checkBox1 = document.getElementById("myCheck7");
  var checkBox2 = document.getElementById("myCheck8");
  var checkBox3 = document.getElementById("myCheck9");
  var checkBox4 = document.getElementById("myCheck10");

  // wanneer er op de checkbox wordt gedrukt wordt de layer verwijderd en wordt er een nieuwe layer toegevoegd.
  map.removeLayer(layer);

  layer = new maptalks.VectorLayer('vector').addTo(map);
  
  // if-statements gemaakt voor het klikken van de 4 checkbox. Als er op checkbox 1 wordt gedrukt wordt buurthuizen gevisualiseerd.
  if (checkBox1.checked == true)
    AddBuurthuizen()
  if (checkBox2.checked == true)
    AddParken()
  if (checkBox3.checked == true)
    AddSpeeltuinen()
  if (checkBox4.checked == true)
    AddSport()
  
  
  map.addLayer(layer);
}