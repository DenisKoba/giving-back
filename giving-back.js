$(document).ready(function () {
    $(window).scroll( function(){
        var giving_top_of_object = $('.js-giving-scroll-trigger').offset().top;
        var giving_top_of_window = $(window).scrollTop();
        if( giving_top_of_window > giving_top_of_object){
            $('.js-giving-stats-counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },

                    {   duration: 1500,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }

                    });
            });
        }
    });

    var playButton = document.querySelector(".js-play-button");
    var givingMyVideo = document.querySelector(".js-giving-youtube-video");
    var givingGalleryPopup = document.querySelector(".js-giving-gallery-popup");
    var givingPopupBG = document.querySelector(".js-giving-popup-bg");
    var givingCloseVideo = document.querySelector(".js-giving-close-video");
    var givingGalleryLeft = document.querySelector("#js-giving-back-left-button");
    var givingGalleryRight = document.querySelector("#js-giving-back-right-button");
    var givingPreview = document.getElementsByClassName("js-giving-back-slide-pager");
    var givingPhoto = document.getElementsByClassName("js-giving-back-slide");
    var givingPhotoContainer = document.querySelector("#js-navigation-bar");

    $("#giving-play, .js-play-button").click(function () {
        $(givingMyVideo).fadeIn();
        $(playButton).hide();
        $(givingCloseVideo).addClass("js-giving-close-move-cross");
    });

    $(".js-giving-close-video").click(function () {
        $(givingCloseVideo).removeClass("js-giving-close-move-cross");
        $(givingMyVideo).fadeOut();
        $(playButton).show();
    });

    $(".js-giving-cross").click(function () {
        $(givingGalleryPopup).hide();
        $(givingPopupBG).fadeOut();
    })

    $(".js-show-giving-gallery").click(function () {
        $(givingPopupBG).fadeIn();
        setTimeout(function(){$(givingGalleryPopup).fadeIn();}, 300);
    });


    $(".js-giving-scroll-interview").on("click", function() {
        var givingVideoInterview = document.querySelector(".js-giving-interview");
        $("html, body").animate({
            scrollTop: $(givingVideoInterview).offset().top
        }, 1500);
    });

    function clickOnGivingPreview(n){

        currentGivingSlide = $(n).attr('data-id');

        $(givingPreview).removeClass('js-opacity');
        $(n).addClass('js-opacity');
        $(givingPhoto).hide();
        newSlide = $('.js-giving-back-slide[data-id="'+currentGivingSlide+'"]');
        newSlide.show();
    }

    $(givingPreview).on('click', function(e) {
        clickOnGivingPreview(this);
    });


    var kenyaGalleryIndex = 1;
    showKenyaGallery(kenyaGalleryIndex);

    function showKenyaGallery(n) {
        var i;
        if (n > givingPhoto.length) {kenyaGalleryIndex = 1}
        if (n < 1) {kenyaGalleryIndex = givingPhoto.length}
        for (i = 0; i < givingPhoto.length; i++) {
            givingPhoto[i].style.display = "none";
        }

        for (i = 0; i < givingPreview.length; i++) {
            givingPreview[i].className = givingPreview[i].className.replace(" js-opacity", " ");
        }

        givingPhoto[kenyaGalleryIndex-1].style.display = "block";
        givingPreview[kenyaGalleryIndex-1].className += " js-opacity";
        givingPhotoContainer.style.right = givingPreview[kenyaGalleryIndex-1].offsetLeft - "px";
    }

    givingGalleryLeft.onclick = function  () {
        showKenyaGallery(kenyaGalleryIndex += -1);
    }


    givingGalleryRight.onclick = function  () {
        showKenyaGallery(kenyaGalleryIndex += 1);
    }
});

$(window).scroll( function(){
    var giving_top_of_object = $('.js-giving-scroll-trigger').offset().top;
    var giving_top_of_window = $(window).scrollTop();
    if( giving_top_of_window > giving_top_of_object){
        $('.js-giving-stats-counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {   duration: 1500,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }

                });
        });
    }
});