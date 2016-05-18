var size = 0;

var styleCache_Bridge={}
var style_Bridge = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(243,164,74,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Bridge[key]){
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
        styleCache_Bridge[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Bridge[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};