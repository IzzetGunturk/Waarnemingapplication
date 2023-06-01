// Var declaratie
// #region
// Boolean om clicks te controleren voor de eerste dropdown
var clickToggle = true;
// Boolean om clicks te controleren voor de tweede dropdown
var clickToggle2 = true;
// Boolean om heatmap te togglen
var toggleHeat = true;


//#endregion

// Dropdown menu
// #region
// Controleren of gebruiker buiten de dropdown geklikt heeft, als dit zo is sluit de dropdown
$(document).mouseup(function (e) {
    if ($(e.target).closest(".btn-dropdown, .dropdown-subcontainer").length
                === 0) {
            $(".check-box").prop( "checked", false );
            $(".dropdown-subcontainer").css("visibility", "hidden");
            clickToggle = true;
            clickToggle2 = true;

    }
});

// Zodra de gebruiker op de button klikt opent de eerste sectie van de dropdown
$(".btn-dropdown").on("click", function(){
    if(clickToggle == true){
        $(".sub-1").css("visibility", "visible");
        clickToggle = false;
    }else{
        $(".sub-1").css("visibility", "hidden");
        $(".sub-2").css("visibility", "hidden");
        clickToggle = true;
    }
});

$(".sub-3").hide();
$('input:radio[name="radio"]').change(
    function(){

        $(".standaardLegenda").hide();
        $("#legenda").css("overflow-y", "scroll")

        if ($(this).is(':checked') && $(this).val() == 1) {
            map.removeLayer(layer);
            toggleFysiek();
            $(".fysiekLegenda").css("display", "flex");
            $(".fysiekLegenda").css("visibility", "visible");
            $(".sociaalLegenda").css("display", "none");
            $(".veiligheidLegenda").css("display", "none");
            // Fysiek
            
        }else if($(this).is(':checked') && $(this).val() == 2){
            map.removeLayer(layer);
            toggleSociaal();
            $(".fysiekLegenda").css("display", "none");
            $(".sociaalLegenda").css("display", "flex");
            $(".sociaalLegenda").css("visibility", "visible");
            $(".veiligheidLegenda").css("display", "none");
            // Sociaal

        }else{
            map.removeLayer(layer);
            toggleHeatmap();  
            map.addLayer(heatLayer);
            $(".checkRemove").prop( "checked", false );
            $(".fysiekLegenda").css("display", "none");
            $(".sociaalLegenda").css("display", "none");
            $(".veiligheidLegenda").css("display", "flex");
            $(".veiligheidLegenda").css("visibility", "visible");
            // Veiligheid
        }
});

// Als gebruikers op Fysiek klikken...
function toggleFysiek(){
    $(".checkRemove").prop( "checked", false );
    $(".sub-2").css("visibility", "visible");
    $(".sub-2").show();
    $(".sub-3").hide();
    map.removeLayer(heatLayer);
}
    
// Als gebruikers op Sociaal klikken...
function toggleSociaal(){
    $(".checkRemove").prop( "checked", false );
    $(".sub-3").css("visibility", "visible");
    $(".sub-3").show();
    $(".sub-2").hide();
    map.removeLayer(heatLayer);
}

//#endregion

// Search menu
//#region 
//#endregion

//  Heatmap
// #region

// midden van de map


var center = map.getCenter();



//genereert de heatmap doormiddel van posities, vervolgens wordt deze laag toegevoegd aan de map. Tot slot kun je daaronder nog de vormgeving/sterkte/grote van de heat circkel aanpassen
var data = [[5.46, 51.44, 0.8], [5.46, 51.46, 0.9], [5.46, 51.49, 0.8], [5.44, 51.46, 0.4], [5.48, 51.43, 0.4],  
[5.49, 51.445, 1.0], [5.48, 51.4455, 0.3], [5.48, 51.447, 0.5], [5.48, 51.449, 0.7], [5.48, 51.443, 0.7], 
[5.474, 51.443, 0.7], [5.471, 51.441, 0.7], [5.485, 51.449, 0.6], [5.487, 51.449, 0.6], [5.48, 51.44, 1.9], 
[25, 255, 0.4], [5.46, 51.40, 0.4], [5.48, 51.44, 0.4], [5.482, 51.448, 0.3], [5.482, 51.450, 0.9], [5.481, 51.450, 0.9], 
[5.482, 51.448, 0.7], [5.480, 51.447, 0.9], [5.484, 51.453, 0.5], [5.479, 51.440, 0.9], [5.482, 51.440, 0.3], [5.475, 51.443, 0.7], 
[5.478, 51.448, 0.6],  [5.484, 51.442, 0.5], [5.482, 51.450, 0.9], [5.48, 51.45, 0.9]];

var heatLayer = new maptalks.HeatLayer('heat', data);
heatLayer.config({
'radius' : 50,
'blur' : 45
});

function add() {
    map.addLayer(heatLayer);
}

function remove() {
    map.removeLayer(heatLayer);
}

function toggleHeatmap(){
    $(".sub-2").css("visibility", "hidden");
    $(".sub-3").css("visibility", "hidden");

    if(toggleHeat == true){
        add();

        toggleHeat = false;
    }else{
        remove();
        toggleHeat = true;
    }
}

    //#endregion

// Hamburger menu
// #region
var checkToggle = true;
$("#hamburger").on("click", function(){
    toggleHamburger();
});

// Functie om de stijling van de header aan te passen wanneer de gebruiker het hamburger icoontje aanklikt.
function toggleHamburger(){
    if(checkToggle == true){
        $("#headerInnerBtn").toggle();
        $("#header").css("height", "150px");
        $("#hamburger").attr("class", "fas fa-times");
        checkToggle = false;
    }else{
        $("#headerInnerBtn").toggle();
        $("#header").css("height", "100px");
        $("#hamburger").attr("class", "fas fa-bars");
        checkToggle = true;
    }
}

// #endregion
