var size = 0;

var styleCache_Road={}
var style_Road = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,255,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(17,10,255,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Road[key]){
        var text = new ol.style.Text({
              font: '10.14px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_Road[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Road[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};