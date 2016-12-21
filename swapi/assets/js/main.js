$(function(){
    var data;
    var dataString;


    for(var i = 1; i<4; i++)
    {

        //events
        document.getElementById('box' + i).addEventListener('mouseenter',function()
        {

            getData(this);

            $(this).attr('color','green');

        });

        document.getElementById('box' + i).addEventListener('mouseleave',function()
        {
            $(this).attr('color','blue');
        });
    }

    function getData(data)
    {

        switch (data.id)
        {
            case "box1":
                ranNum = Math.floor((Math.random() * 90) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box2":

                ranNum = Math.floor((Math.random() * 40) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();
                break;

            case "box3":
                ranNum = Math.floor((Math.random() * 7) + 1);
                dataString = $(data).attr('data')  + ranNum.toString();

                break;
        }

        $.ajax({
            url: 'https://swapi.co/api' + dataString,
            method: 'GET', // or GET
            dataType : "json",
            success: function(msg) {
                var x = msg['name'] !== undefined ? msg['name'] : msg['title'];

                $('#text').attr('text','text: ' + x);


            }
        });
    }
});


