$( document ).ready(function() {
    $('.door__wrap').addClass('active');
    $('.door__main').addClass('active');
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    $('.tabs__control').on('click', function () {
        $('.tabs__control').each((i,el) => $(el).removeClass('active'));
        $('.tab__container').each((i, el) => $(el).removeClass('active'));
        $(`.tab__container-${ $(this).data('tab') }`).addClass('active');
        $(this).addClass('active');
    });

    $('.video-button').on('click', function () {
        const video = `<iframe 
            width="718"
            height="404" 
            src="${ $(this).data('src') }" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>`
        $('.popup').html(video);
        openPopup();
    });

    $('.popup-bg').on('click', closePopup);

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });
});

function openPopup() {
    $('body').addClass('modal-active');
    $('<div>', { class: 'popup__close-btn', text: '×', click: function () {
        closePopup();
    }}).appendTo('.popup');
}

function closePopup() {
    $('body').removeClass('modal-active');
    $('.popup').html('');
}
