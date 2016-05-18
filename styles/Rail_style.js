var size = 0;

var styleCache_Rail={}
var style_Rail = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(170,255,18,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,255,1.0)", lineDash: [1,5], lineCap: 'round', lineJoin: 'round', width: 2}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Rail[key]){
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
        styleCache_Rail[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Rail[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};