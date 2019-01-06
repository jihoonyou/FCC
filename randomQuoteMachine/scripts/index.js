$(document).ready(function() {

	var colors = ['#40e0d0', '#ff0000', '#fff0f5', '#f0e130', '#C0C0C0', '#32cd32', '#4169e1', '#FF0080', '#f5fffa', '#E6E6FA', '#FFF0F5'];
	var quote;
	var author;
	var rand;

	function getQuotation() {

		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(data) {
				quote = data.quoteText;
				author = data.quoteAuthor;
				$(".quotation").html(quote);
				$(".author").html(author);
			}	
		});
	}

	function colorChange() {
		rand = Math.floor(Math.random() * 11);
		
		$('.quote-area').css({color: colors[rand]});
		$('h1').css({color: colors[rand]});
	}

	getQuotation();
	colorChange();

	$("#quote-btn").on("click", function() {

		getQuotation();
		colorChange();
	}); 

	$("#twitter-btn").on("click", function() {

		console.log(rand);
		window.open('http://twitter.com/share?text=' + encodeURIComponent(quote + ' \n' + author));
	});	

	$("#smile-btn").on("click", function() {
		alert(":)");
	});
	

});

