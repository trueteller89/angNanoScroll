 $('.nano').nanoScroller({
                                    preventPageScrolling: true
        });
		
		fixColumnHeight: function(cid) {
        var $height;
        var column = jQuery('.b-column[data-cid="' + cid + '"]');
        var nano = column.find('.nano');
        var column_title = nano.find('.b-column__title');
        var scroll_top = column.find('.scroll_top_top');
        var layout_height = jQuery('body').height() - (jQuery('.r_navbartop').outerHeight(true));
        if (jQuery(window).width() < 768) {
            // $height = jQuery('body').height() - (jQuery('.r_navbartop').outerHeight(true) + jQuery('.mobile_navbar').outerHeight(true) + 50);
            var scropTop = $('.scroll_top_top');
            if (scropTop.size()) {
                $height = jQuery('.mobile_scrollWrap').height();
            } else {
                $height = jQuery('.mobile_scrollWrap').height();
            }
        } else {
            $height = layout_height - (column_title.innerHeight() + scroll_top.outerHeight() + 70);
        }
        nano.height($height);
        console.log("nanoheight=",$('.nano').height());
        // return $height;
    },
    testfunc:function(){console.log("works!");}