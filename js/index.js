(function index($) {
	'use strict';

	var init = function () {
		$('#tell-button').click(function index(e) {
			e.preventDefault();

			var gender = $("#gender option:selected").val();
			var purpose = $("#purpose option:selected").text();
			var activity = $("#activity").val();
			var moreInfo = $("#more-info").val();

			var treatment, tweet;

			if (purpose === 'a date') {
				treatment = gender === 'man' ? 'ladies' : 'gentlemen';

				tweet = "Hey, " + treatment + "!"
					+ " Why not to " + activity + '?'
					+ ' #hangOut with me here http://www.find.out/brad-1.html';
			}

			if (purpose === 'more friends') {
				treatment = gender === 'man' ? 'guys' : 'girls';

				tweet = "Hey, " + treatment + "!"
					+ " Why not to " + activity + '?'
					+ ' #hangOut with me here http://www.find.out/brad-1.html';
			}

			var width = 575;
			var height = 400;
			var left = (jQuery(window).width() - width) / 2;
			var top = (jQuery(window).height() - height) / 2;
			var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet);
			var opts = 'status=1' +
				',width=' + width +
				',height=' + height +
				',top=' + top +
				',left=' + left;

			window.open(url, 'twitter', opts);
		});

		$('#activity').tooltip();
	};

	$(init);
}(jQuery));