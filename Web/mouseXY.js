
function action_coords(event) {

    var x1 = event.clientX;

    var y1 = event.clientY;

    var x2 = event.offsetX;

    var y2 = event.offsetY;

    var x3 = event.screenX;

    var y3 = event.screenY;

    var coords = "clientX: " + x1 + ", clientY: " + y1 + "<br/>";

    coords += "offsetX: " + x2 + ", offsetY: " + y2 + "<br/>";

    coords += "screenX: " + x3 + ", screenY: " + y3;

    document.getElementById("debug_out").innerHTML = coords;

}
