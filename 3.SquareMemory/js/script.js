    var level = 0;
    var array = Array();
    var index = 0;
    var isclickable = false;

    function start() {
        level = 0;
        document.getElementById('startbtn').style.display = "none";
        var levelshow = document.getElementById('level');
        levelshow.style.visibility = "visible";
        document.getElementById('levelnow').innerHTML = level;
        question();

    }

    function question() {
        document.getElementById('levelnow').innerHTML = level;
        document.getElementById('yourturn').style.display = "none";
        isclickable = false;
        var time;
        index = 0;
        for (i = 0; i < (level + 1); i++) {
            time = 2000 * i;
            var pick = Math.floor(Math.random() * 4) + 1;
            array.push(pick);
            setTimeout((function(pick) {
                var pickbox = document.getElementById('box' + pick);
                pickbox.classList.add("select");
            }).bind(this,pick), 1000 + time);


            setTimeout(function() {
                var pickbox = document.getElementById('box' + array[index]);
                pickbox.classList.remove("select");
                if ((index + 1) == array.length) {
                    isclickable = true;
                    document.getElementById('yourturn').style.display = "block";
                    console.log('finish');
                } else {
                    index++;

                }

            }, 2000 + time);

        }

    }


    function answer(event) {

        if (isclickable == true) {
            x = event.currentTarget;
            var number = parseInt(x.id[3]);
            var arraytop = array.shift();
            if (number != arraytop) {
                array = [];
                start();
            } else {
                if (array.length === 0) {
                    level++;
                    question();
                }
            }
        } else {
            console.log('nonclick');
        }
    }
