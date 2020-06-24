console.log('parking')

// var parkingInterval = setInterval(getParking, 2000);
var counter = 0;

function getParking () {
	counter ++ ;
	$.ajax({
        url: '/parking/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
        	console.log(data)
        	if (counter == 10) {
        		console.log('clearing interval')
        		clearInterval(parkingInterval)
        	}
        },
    });
}