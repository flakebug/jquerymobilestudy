$('button').click( function () {
	$.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json', function(data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push("<li id='" + key + "'>" + key + "</li>");
            });
            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("body");
    });
	
});

