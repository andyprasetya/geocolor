var geojson = []
$(function(){
  // Upload File
  $('#dropFile').on('change', function(evt){
    console.log(evt)
    var reader = new FileReader();
    reader.readAsText(evt.currentTarget.files[0]);
    reader.onload = function(e) {
      geojson = [JSON.parse(e.target.result)]
      L.mapbox.map('map', 'examples.map-20v6611k')
        .setView([37.8, -96], 4)
        .featureLayer.setGeoJSON(geojson);
    }
  })

  // Select Classification Options
  $('#classification').change(function(){
    var classification = $('#classification').val()
    if(classification === 'Jenks'){
      $('#jenksControls').show()
      $('#quantilesControls').hide()
      $('#equalIntervalsControls').hide()
      $('#randomControls').hide()
    }
    else if(classification === 'Quantiles'){
      $('#quantilesControls').show()
      $('#jenksControls').hide()
      $('#equalIntervalsControls').hide()
      $('#randomControls').hide()
    }
    else if(classification === 'Equal Interval'){
      $('#equalIntervalsControls').show()
      $('#jenksControls').hide()
      $('#quantilesControls').hide()
      $('#randomControls').hide()
    }
    else if(classification === 'Random'){
      $('#randomControls').show()
      $('#jenksControls').hide()
      $('#quantilesControls').hide()
      $('#equalIntervalsControls').hide()
    }
    else if(classification === 'All'){
      $('#jenksControls').hide()
      $('#quantilesControls').hide()
      $('#equalIntervalsControls').hide()
      $('#randomControls').hide()
    }
  })
})