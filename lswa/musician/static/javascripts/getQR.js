document.addEventListener("DOMContentLoaded", function() {

var parentOfButton = document.getElementsByClassName('QRparent');

console.log(parentOfButton);

Array.prototype.forEach.call(parentOfButton, function(getQR){

	getQR.addEventListener('click', function(evt){
		evt.preventDefault();

		var req = new XMLHttpRequest(); 

		var url = "http://localhost:8000/musician/getQRCode/" + getQR.value + '/'; 

		req.open('GET', url, true);

		req.addEventListener('load', function(){
			
			if(req.status >= 200 && req.status < 400){
		      var qrpath = JSON.parse(req.responseText);

		      var arr = qrpath.split(':');

        	  var str = arr[1].trim();

        	  str = str.slice(1, str.length-2);

			  console.log(str);

		      var qrImg = document.createElement("Img");
		      qrImg.setAttribute('src', str);
		      console.log(qrImg['src']);

		      document.body.appendChild(qrImg);
		      
		     
		    }
		    else{
		    	console.log(req.responseText)
		    	console.log("req error")
		    }
		})
		req.addEventListener('error', function(e){
			console.log("req has error");
			document.body.appendChild(document.createTextNode("error!"));
		})

		console.log("befor set header");
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//req.setRequestHeader('X-CSRFToken', csrftoken);
		req.send('music_id=' + getQR.value);
	})
})
})