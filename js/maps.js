var initialize = function () {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;

		var latlong = new google.maps.LatLng(lat, long);

		var mapOptions = {
			center: latlong,
			zoom: 12
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var heartImage = 'img/heart.png';
		var starImage = 'img/star.png';
		var profileImageUrl = '//pbs.twimg.com/profile_images/1245711286/Brad_Pitt_400x400.jpg';
		var profileImageUrl2 = '//pbs.twimg.com/profile_images/472510517123088384/nX8Vm8Sv_400x400.jpeg';
		var profileImageUrl3 = '//pbs.twimg.com/profile_images/456871669085114369/i9uqbJa9_400x400.jpeg';
		var profileImageUrl4 = '//pbs.twimg.com/profile_images/463089630934339584/S7g1a_i2_400x400.jpeg';
		var profileImageUrl5 = '//pbs.twimg.com/profile_images/478274839867031552/3hUN1JZw_400x400.jpeg';
		var profileImageUrl6 = '//pbs.twimg.com/profile_images/2344348679/d7fhjj1t1mms16iq0m1p_400x400.jpeg';
		var profileImageUrl7 = '//pbs.twimg.com/profile_images/2192021713/kimkardashian_400x400.jpg';

		var image = {
			url: profileImageUrl,
			scaledSize: new google.maps.Size(50, 50)
		};
		var image2 = {
			url: profileImageUrl2,
			scaledSize: new google.maps.Size(50, 50)
		};
		var image3 = {
			url: profileImageUrl3,
			scaledSize: new google.maps.Size(50, 50)
		};
		var image4 = {
			url: profileImageUrl4,
			scaledSize: new google.maps.Size(50, 50)
		};
		var image5 = {
			url: profileImageUrl5,
			scaledSize: new google.maps.Size(50, 50)
		};
        var image6 = {
            url: profileImageUrl6,
            scaledSize: new google.maps.Size(50, 50)
        };
        var image7 = {
            url: profileImageUrl7,
            scaledSize: new google.maps.Size(50, 50)
        };

		var marker1 = new MarkerWithLabel({
			icon: image,
			position: latlong,
			map: map,
			labelContent: "#coffee",
			labelAnchor: new google.maps.Point(-28, 35),
			labelClass: "map-label", // the CSS class for the label
			labelStyle: {opacity: 0.75},
			title: 'map-offer'
		});

		var marker2 = new MarkerWithLabel({
			icon: image2,
			position: new google.maps.LatLng(lat, long + 0.06),
			map: map,
			labelContent: "#theater",
			labelAnchor: new google.maps.Point(-28, 35),
			labelClass: "map-label", // the CSS class for the label
			labelStyle: {opacity: 0.75}
		});

		var marker3 = new MarkerWithLabel({
			icon: image3,
			position: new google.maps.LatLng(lat - 0.02, long + 0.01),
			map: map,
			labelContent: "#cinema",
			labelAnchor: new google.maps.Point(-28, 35),
			labelClass: "map-label", // the CSS class for the label
			labelStyle: {opacity: 0.75}
		});

		var marker4 = new MarkerWithLabel({
			icon: image4,
			position: new google.maps.LatLng(lat + 0.02, long - 0.05),
			map: map,
			labelContent: "#beer",
			labelAnchor: new google.maps.Point(-28, 35),
			labelClass: "map-label", // the CSS class for the label
			labelStyle: {opacity: 0.75}
		});

		var marker5 = new MarkerWithLabel({
			icon: image5,
			position: new google.maps.LatLng(lat - 0.02, long - 0.05),
			map: map,
			labelContent: "#beer",
			labelAnchor: new google.maps.Point(-28, 35),
			labelClass: "map-label", // the CSS class for the label
			labelStyle: {opacity: 0.75}
		});

        var marker6 = new MarkerWithLabel({
            icon: image6,
            position: new google.maps.LatLng(lat + 0.02, long - 0.00),
            map: map,
            labelContent: "#shopping",
            labelAnchor: new google.maps.Point(-28, 35),
            labelClass: "map-label", // the CSS class for the label
            labelStyle: {opacity: 0.75}
        });

        var marker7 = new MarkerWithLabel({
            icon: image7,
            position: new google.maps.LatLng(lat, long - 0.07),
            map: map,
            labelContent: "#dating",
            labelAnchor: new google.maps.Point(-28, 35),
            labelClass: "map-label", // the CSS class for the label
            labelStyle: {opacity: 0.75}
        });



        google.maps.event.addListener(marker1, 'click', function() {
            changeMan(0);
        });
        google.maps.event.addListener(marker2, 'click', function() {
            changeMan(1);
        });
        google.maps.event.addListener(marker3, 'click', function() {
            changeMan(2);
        });
        google.maps.event.addListener(marker4, 'click', function() {
            changeMan(3);
        });
        google.maps.event.addListener(marker5, 'click', function() {
            changeMan(4);
        });
        google.maps.event.addListener(marker6, 'click', function() {
            changeMan(5);
        });
        google.maps.event.addListener(marker7, 'click', function() {
            changeMan(6);
        });

        jQuery(function($){

            window.changeMan = function(n){
                var $slides = $('.slide');
                $('.slide-active').removeClass('slide-active');
                $slides.eq(n).addClass('slide-active');
                console.log(n);
            }

            $('#reply-btn').click(function index(e) {
                e.preventDefault();

                var tweet = "Yep, #brad, I'am with you!";

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



        });

	});

};

google.maps.event.addDomListener(window, 'load', initialize);