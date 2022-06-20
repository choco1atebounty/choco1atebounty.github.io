$('#js-button').click(function(){
	var value1 = $('#type-site').val();
	var value2 = $('#type-Design').val();
    var value3 = $('#type-adaptive').val();

    var x = Number(value1);
    var y = Number(value2);
    var z = Number(value3);

    var a = Number(value1);
    var b = Number(value2);
    var c = Number(value3);

    console.log (value1 + value2 + value3);
    var summa = (a + b + c + ' тысяч');
    var time = (x + y + z  + ' дней');

    $('#js-result-st').html(summa);

    $('#js-result-time').html(time);


});