// Vector/icoon wordt toegevoegd aan de map
var layer = new maptalks.VectorLayer('vector').addTo(map);
map.addLayer(layer);

// functie aangemaakt voor de iconen d.m.v. parameters in de functie
function AddMarker(longitude, latitude, symbol, layer) {
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

// functies voor de "winkels" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddWinkels() {
  // supermarkten
  AddMarker(5.488502983567964, 51.42736896416877, 'src/icons/Supermarkt.png', layer, 'Albert Heijn, Leenderweg','<div>Openingstijden: <br>09:00 t/m 15:00</div><img src="src/img/winkels/ah.jpg" width="120"></img>') // albertheijn leenderweg
  AddMarker(5.488502983567964, 51.42736896416877, 'src/icons/Supermarkt.png', layer, 'Jumbo Geldropseweg','<div>Openingstijden: <br>07:00 t/m 19:00</div><img src="src/img/winkels/jumbo.jpg" width="120"></img>') // jumbo geldropseweg
  AddMarker(5.471850207709595, 51.441032788234644, 'src/icons/Supermarkt.png', layer, 'Jumbo Victoriapark','<div>Openingstijden: <br>08:00 t/m 19:00</div><img src="src/img/winkels/jumbo.jpg" width="120"></img>') // jumbo victoriapark
  AddMarker(5.478942317170839, 51.441478526368336, 'src/icons/Supermarkt.png', layer, 'Albert Heijn, Septemberplein','<div>Openingstijden: <br>07:00 t/m 19:00</div><img src="src/img/winkels/ah.jpg" width="120"></img>') // albertheijn septemberplein
  AddMarker(5.4797269148209296, 51.442438504165345, 'src/icons/Supermarkt.png', layer, 'Jumbo Stationsplein','<div>Openingstijden: <br>07:00 t/m 19:00</div><img src="src/img/winkels/jumbo.jpg" width="120"></img>') // jumbo stationsplein
  AddMarker(5.475148769004777, 51.44681839310951, 'src/icons/Supermarkt.png', layer, 'Diyarsupermarkt, Kruisstraat','<div>Openingstijden: <br>09:00 t/m 17:00</div><img src="src/img/winkels/diyar.jpg" width="120"></img>') // diyarsupermarkt kruisstraat
 
  // kleding
  AddMarker(5.473997636633883, 51.43739315298626, 'src/icons/Kleding.png', layer, 'Eindje Store, Heilige Geeststraat','<div>Openingstijden: <br>12:00 t/m 18:00</div><img src="src/img/winkels/eindje-store.jpg" width="120"></img>') // eindje store
  AddMarker(5.478554639554446, 51.43820116610492, 'src/icons/Kleding.png', layer, 'Mango, Rechtestraat','<div>Openingstijden: <br>10:00 t/m 18:00</div><img src="src/img/winkels/mango.jpg" width="120"></img>') // mango
  AddMarker(5.47847362616919, 51.43860516730416, 'src/icons/Kleding.png', layer, 'Score, Rechtestraat ','<div>Openingstijden: <br>10:00 t/m 18:00</div><img src="src/img/winkels/score.jpg" width="120"></img>') // score
  AddMarker(5.477660515238852, 51.43913367234871, 'src/icons/Kleding.png', layer, 'Only, Rechtestraat','<div>Openingstijden: <br>10:00 t/m 18:00</div><img src="src/img/winkels/only.jpg" width="120"></img>') // only
  AddMarker(5.477153262008156, 51.43999792804674, 'src/icons/Kleding.png', layer, 'The Sting, Demer','<div>Openingstijden: <br>9:30 t/m 18:00</div><img src="src/img/winkels/sting.jpg" width="120"></img>') // sting
  AddMarker(5.47862429635583, 51.44111511242834, 'src/icons/Kleding.png', layer, 'Primark, Vestdijk ','<div>Openingstijden: <br>09:00 t/m 18:00</div><img src="src/img/winkels/primark.jpg" width="120"></img>') // primark
  AddMarker(5.477336140014572, 51.441540896218314, 'src/icons/Kleding.png', layer, 'De Bijenkorf, Piazza','<div>Openingstijden: <br>10:00 t/m 18:00</div><img src="src/img/winkels/bijenkorf.jpg" width="120"></img>') // bijenkorf

  // overig
  AddMarker(5.486487828624571, 51.426012428522995, 'src/icons/Overig.png', layer, 'Coolblue Aalsterweg', '<div>Openingstijden: <br>09:00 t/m 18:00</div><img src="src/img/winkels/coolblue.jfif" width="120"></img>') // coolblue aalsterweg
  AddMarker(5.453021677036334, 51.435671569729976, 'src/icons/Overig.png', layer, 'Intersport Biggelaar', '<div>Openingstijden: <br>10:00 t/m 18:00</div><img src="src/img/winkels/intersport.jfif" width="120"></img>') // intersport biggelaar
  AddMarker(5.504773670519823, 51.43201378439036, 'src/icons/Overig.png', layer, 'Mercedes Benz ASV', '<div>Openingstijden: <br>08:00 t/m 18:00</div><img src="src/img/winkels/mercedes.jfif" width="120"></img>') // mercedes benz ASV
  AddMarker(5.497583588352365, 51.43679593138516, 'src/icons/Overig.png', layer, 'Gamma Kanaaldijk Noord', '<div>Openingstijden: <br>09:00 t/m 18:00</div><img src="src/img/winkels/gamma.jfif" width="120"></img>') // gamma kanaaldijk noord
  AddMarker(5.503426280400194, 51.4424239921438, 'src/icons/Overig.png', layer, 'Action Insulindelaan', '<div>Openingstijden: <br>08:00 t/m 18:00</div><img src="src/img/winkels/action.jpg" width="120"></img>') // action insulindelaan

}

// functies voor de "ov" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddOv() {
  AddMarker(5.480401868826009, 51.44384014687145, 'src/icons/Trein.png', layer, 'lorem','lorem') // centraal station
  AddMarker(5.456186587581019, 51.45142972826563, 'src/icons/Trein.png', layer, 'lorem','lorem') // strijp-s
  AddMarker(5.478847520380434, 51.443649751055425, 'src/icons/Bus.png', layer, 'lorem','lorem') // centraal 
  AddMarker(5.483091439389403, 51.45122507647685, 'src/icons/Bus.png', layer, 'lorem','lorem') // TU eindhoven
}

// functies voor de "ziekenhuis" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddZiekenhuis() {
  AddMarker(5.488152231049541, 51.45663015769242, 'src/icons/Ziekenhuis.png', layer, 'lorem','lorem') // maxima zh
  AddMarker(5.471671472373465, 51.46654116298747, 'src/icons/Ziekenhuis.png', layer, 'lorem','lorem') // catharina zh
  AddMarker(5.477854657979684, 51.41903454443168, 'src/icons/Ziekenhuis.png', layer, 'lorem','lorem') // anna zh
  AddMarker(5.483459068570455, 51.433534146652185, 'src/icons/Apotheek.png', layer, 'lorem','lorem') // stratumse apotheek
  AddMarker(5.472618725245773, 51.4352496345117, 'src/icons/Apotheek.png', layer), 'lorem','lorem' // apotheek keyzer 
  AddMarker(5.501637490453382, 51.44315044384707, 'src/icons/Apotheek.png', layer, 'lorem','lorem') // service apotheek
  AddMarker(5.454607077875534, 51.44190303849575, 'src/icons/Apotheek.png', layer, 'lorem','lorem') // apotheek trudolein
  AddMarker(5.467949038890526, 51.45260882559041, 'src/icons/Apotheek.png', layer, 'lorem','lorem') // apotheek nijpels
  
}

// functies voor de "recreactie" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddRecreatie() {
  AddMarker(5.475673850420015, 51.44005117013238, 'src/icons/Museum.png', layer, 'lorem','lorem') // philips museum
  AddMarker(5.490210436109491, 51.43781379790111, 'src/icons/Museum.png', layer, 'lorem','lorem') // DAF museum
  AddMarker(5.468914038967708, 51.44169184011416, 'src/icons/Museum.png', layer, 'lorem','lorem') // psv museum
}

// functies voor de "scholen" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddScholen() {
  AddMarker(5.479037518310364, 51.45178569809452, 'src/icons/Scholen.png', layer, 'lorem','lorem') // Fontys R
  AddMarker(5.472548239387291, 51.44697105969571, 'src/icons/Scholen.png', layer, 'lorem','lorem') // BS fellenoord
  AddMarker(5.490725527011629, 51.44874350714372, 'src/icons/Scholen.png', layer, 'lorem','lorem') // TU
  AddMarker(5.46007313008471, 51.443794003621576, 'src/icons/Scholen.png', layer, 'lorem','lorem') // Technische lyceum EHV
}

// functies voor de "horeca" src/icons. In de functie zijn de parameters longitude, latitude, symbol en layer ingevuld.
function AddHoreca() {
  AddMarker(5.478459813686935, 51.44022104311986, 'src/icons/Horeca.png', layer, 'lorem','lorem') // rest. Zoet
  AddMarker(5.479276222408843, 51.44349942772351, 'src/icons/Horeca.png', layer, 'lorem','lorem') // Julia's eindje
  AddMarker(5.476160103835504, 51.44232965383042, 'src/icons/Horeca.png', layer, 'lorem','lorem') // Dinner in motion
  AddMarker(5.459861457202391, 51.44381951457911, 'src/icons/Horeca.png', layer, 'lorem','lorem') // loetje
}

// variabelen gemaakt van de 6 checkbox
function CheckBoxFilter() {
  var checkBox1 = document.getElementById("myCheck");
  var checkBox2 = document.getElementById("myCheck2");
  var checkBox3 = document.getElementById("myCheck3");
  var checkBox4 = document.getElementById("myCheck4");
  var checkBox5 = document.getElementById("myCheck5");
  var checkBox6 = document.getElementById("myCheck6");

  // wanneer er op de checkbox wordt gedrukt wordt de layer verwijderd en wordt er een nieuwe layer toegevoegd.
  map.removeLayer(layer);

  layer = new maptalks.VectorLayer('vector').addTo(map);

  // if-statements gemaakt voor het klikken van de 6 checkbox. Als er op checkbox 1 wordt gedrukt wordt winkels gevisualiseerd.
  if (checkBox1.checked == true)
    AddWinkels();
  if (checkBox2.checked == true)
    AddOv();
  if (checkBox3.checked == true)
    AddZiekenhuis();
  if (checkBox4.checked == true)
    AddRecreatie();
  if (checkBox5.checked == true)
    AddScholen();
  if (checkBox6.checked == true)
    AddHoreca();

  map.addLayer(layer);

}