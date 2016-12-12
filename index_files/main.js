function openMap(ll) {
	if (isMobile.apple.device) {
		window.open('maps://?q=' + ll, '_system');
	}
	else if(isMobile.android.device){
		window.open('geo:0,0?q=' + ll, '_system');
	}
}

$(document).ready(function() {
	$("img").unveil();

   // 百度地图API功能
	var map = new BMap.Map("dituContent");	// 创建Map实例
	map.centerAndZoom(new BMap.Point(113.40531, 22.519967), 14);	 // 创建点坐标
	var marker1 = new BMap.Marker(new BMap.Point(113.365749, 22.528505));  // 创建标注
	var marker2 = new BMap.Marker(new BMap.Point(113.434758, 22.515708));  // 创建标注
	map.addOverlay(marker1);              // 将标注添加到地图中
	map.addOverlay(marker2);
	
	//创建信息窗口
	var infoWindow1 = new BMap.InfoWindow("<div style='overflow: auto;'><h4 class='map-title script'>Chrismas feasting</h4><div class='address'><span class='region'>西区富华道16号富业广场3楼荣光国宴（富洲酒店对面）</span><br><span class='postal-code'>508400</span><br><span class='city-name'>广东省中山市</span></div></div>");
	var infoWindow2 = new BMap.InfoWindow("<div style='overflow: auto;'><h4 class='map-title script'>Wedding day</h4><div class='address'><span class='region'>东区大鳌溪新村三街14号</span><br><span class='postal-code'>508400</span><br><span class='city-name'>广东省中山市</span></div></div>");
	marker1.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});
	marker2.addEventListener("click", function(){this.openInfoWindow(infoWindow2);});
	marker2.openInfoWindow(infoWindow2);
	
	var i = 0;
	setInterval(function() {
		if (i == 0) {
			marker1.openInfoWindow(infoWindow1);
			i = 1;
		}
		else {
			marker2.openInfoWindow(infoWindow2);
			i = 0;
		}
	}, 5000)
	
	//39b92e64ae5622663ceceaccd8ab8eb1
	//oCL7n7ncO6jNUf5MoiYjsjCaGiQeR1VK
   
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("December 24, 2016").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';
        
      
        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";  
     
    }, 1000);
    
    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });

});