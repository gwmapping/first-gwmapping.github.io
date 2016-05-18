var size = 0;
var categories_Contour = {"1": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(228,26,255,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
    })],
"2": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(177,177,175,1.0)", lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
    })]};
var styleCache_Contour={}
var style_Contour = function(feature, resolution){
    var value = feature.get("LType");
    var style = categories_Contour[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Contour[key]){
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
        styleCache_Contour[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Contour[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};