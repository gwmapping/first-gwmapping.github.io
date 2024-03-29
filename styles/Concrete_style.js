var size = 0;

var styleCache_Concrete={}
var style_Concrete = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(204,162,65,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Concrete[key]){
        var text = new ol.style.Text({
              font: '10px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_Concrete[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Concrete[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};