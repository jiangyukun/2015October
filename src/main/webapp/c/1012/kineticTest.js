+function () {
    var stage = new Kinetic.Stage({
        container: 'kineticContainer',
        width: 500,
        height: 500
    });

    var layer = new Kinetic.Layer();

    var rect = new Kinetic.Rect({
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        rotationDeg: 20,

        alpha: 0.5,
        fill: 'red',
        stroke: 'black',
        strokeWidth: '4',
        lineJoin: 'bevel'
        //visible: false
    });
    rect.on('tap', function () {
        alert(1);
    });

    var group = new Kinetic.Group({
        x: 100,
        y: 200,
        rotationDeg: 0
    });

    /*group.add(rect);
     layer.add(group);*/
    layer.add(rect);
    stage.add(layer);
    stage.draw();
    /*setTimeout(function () {
     rect.hide();
     stage.draw();
     }, 1000);*/
}();
