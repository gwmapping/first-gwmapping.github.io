var size = 0;

var styleCache_Fence={}
var style_Fence = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Fence[key]){
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
        styleCache_Fence[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Fence[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};