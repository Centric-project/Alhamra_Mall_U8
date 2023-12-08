
    jQuery.get('/en?json=true', function (msg) {
        entirePage = JSON.parse(msg);
            console.log(msg)
        })