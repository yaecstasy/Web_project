$(document).ready(function() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var movemark = new Array();
    var size = 20;
    var shape = "square";



    $('#shapeselect').change(function() {
        var sel = document.getElementById("shapeselect");
        shape = sel.options[sel.selectedIndex].value;

    });

    $('#size').change(function() {
        sizestring = document.getElementById("size").value;
        var patt1 = /\D/;
        var result = sizestring.match(patt1);
        if (result != null) {
            alert("Please input number.");
        } else {
            size = parseInt(sizestring);
        };

    });

    $('#eraseall').click(function() {

        if (confirm('Are you sure to erase all ?')) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

    $('#erase').click(function() {
        shape = "erase";

    });

    $('#color').click(function() {
        var currentcolor = document.getElementById("color").value;
        ctx.fillStyle = currentcolor;
        var sel = document.getElementById("shapeselect");
        shape = sel.options[sel.selectedIndex].value;

    });



    $("#canvas")
        .on('mousemove', function(evt) {
            var x = evt.pageX - this.offsetLeft;
            var y = evt.pageY - this.offsetTop;
            move(x, y);
        })
        .mouseleave(function() {
            var clear = movemark.shift();
            ctx.putImageData(clear.imgdata, clear.x, clear.y);
            movemark = [];
        })
        .mouseenter(function() {
            var currentcolor = document.getElementById("color").value;
            ctx.fillStyle = currentcolor;
        });


    $("#canvas")
        .on('mousedown', function(evt) {
            // clear = movemark.shift();
            // ctx.putImageData(clear.imgdata, 0, 0);
            movemark = [];
            var x = evt.pageX - this.offsetLeft;
            var y = evt.pageY - this.offsetTop;
            draw(x, y);
            $("#canvas").off('mousemove');

            /* $("#canvas").off('mousemove', function(evt) {
                 var x = evt.pageX - this.offsetLeft;
                 var y = evt.pageY - this.offsetTop;
                 //currentcolor = document.getElementById("color").value;
                 //ctx.fillStyle = currentcolor;
                 move(x, y);
             });*/
            $("#canvas").on('mousemove', function(evt) {
                var x = evt.pageX - this.offsetLeft;
                var y = evt.pageY - this.offsetTop;
                draw(x, y);
            });
        });

    $("#canvas").on('mouseup', function(evt) {

        $("#canvas").off('mousemove');
        $("#canvas").on('mousemove', function(evt) {
            var x = evt.pageX - this.offsetLeft;
            var y = evt.pageY - this.offsetTop;
            move(x, y);
        });
    });



    function draw(x, y) {
        switch (shape) {

            case "square":
                ctx.fillRect(x, y, size, size);
                break;
            case "erase":
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(x, y, size, size);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(x, y, (size / 2), 0, 2 * Math.PI);
                ctx.fill();
                break;

            case "uptriangle":
                var path = new Path2D();
                path.moveTo(x, y + size);
                path.lineTo(x + size, y + size);
                path.lineTo(x + size, y);
                ctx.fill(path);
                break;
            case "downtriangle":
                var path = new Path2D();
                path.moveTo(x, y);
                path.lineTo(x + size, y);
                path.lineTo(x, size + y);
                ctx.fill(path);
                break;
        }
    };

    function move(x, y) {

        var pairxy = {
            x: x,
            y: y,
        };

        if (movemark.length > 0) {
            var clear = movemark.shift();
            ctx.putImageData(clear.imgdata, clear.x, clear.y);

            var imgData = getImg(x, y);
            pairxy.imgdata = imgData[2];
            pairxy.x = imgData[0];
            pairxy.y = imgData[1];
            movemark.push(pairxy);
            moveShape(x, y);

        } else {
            var imgData = getImg(x, y);
            pairxy.imgdata = imgData[2];
            pairxy.x = imgData[0];
            pairxy.y = imgData[1];
            movemark.push(pairxy);
            moveShape(x, y);
        };
    };

    function moveShape(x, y) {
        switch (shape) {

            case "square":
                ctx.fillRect(x, y, size, size);
                break;
            case "erase":
                ctx.strokeRect(x + 1, y + 1, size - 2, size - 2);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(x, y, (size / 2), 0, 2 * Math.PI);
                ctx.fill();
                break;
            case "uptriangle":
                var path = new Path2D();
                path.moveTo(x + size, y);
                path.lineTo(x + size, y + size);
                path.lineTo(x, y + size);
                ctx.fill(path);
                break;
            case "downtriangle":
                var path = new Path2D();
                path.moveTo(x, y);
                path.lineTo(x + size, y);
                path.lineTo(x, size + y);
                ctx.fill(path);
                break;
        }

    };

    function getImg(x0, y0) {

        x=x0-1;
        y=y0-1;
        rsize=size+2;

        switch (shape) {


            case "square":
                var imgData = ctx.getImageData(x, y, rsize, rsize);
                return [x, y, imgData]
                break;
            case "erase":
                var imgData = ctx.getImageData(x, y, rsize, rsize);
                return [x, y, imgData]
                break;
            case "circle":
                var imgData = ctx.getImageData(x - (size / 2), y - (size / 2), rsize, rsize)
                return [x - (size / 2), y - (size / 2), imgData]
                break;
            case "uptriangle":
                var imgData = ctx.getImageData(x, y, rsize, rsize);
                //ctx.putImageData(imgData, 0, 0);
                return [x, y, imgData]
                break;
            case "downtriangle":

                var imgData = ctx.getImageData(x, y, rsize, rsize);
                return [x, y, imgData]
                break;
        }

    };


});
