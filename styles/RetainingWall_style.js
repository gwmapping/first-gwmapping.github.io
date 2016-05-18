var size = 0;

var styleCache_RetainingWall={}
var style_RetainingWall = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(188,135,19,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_RetainingWall[key]){
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
        styleCache_RetainingWall[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_RetainingWall[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};