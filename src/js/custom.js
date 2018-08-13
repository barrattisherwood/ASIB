$(document).ready(function(){
    // footer year
    var d = new Date();
    var n = d.getFullYear();
    $("#footer-year").html(n);

    // get header height and set padding top body
    var headerHeight = $('header').innerHeight();
    $('body').css('padding-top', headerHeight + 'px');

    //Off canvas close when anything else except whitelist is clicked / tapped
    $(document).click(function(e) {
        if($(e.target).is('a.toggle, .off-canvas')) {
            e.preventDefault();
            return;
        } else {
            closeOffCanvasNav();
        }
    });    
});

function closeOffCanvasNav() {
    $('.off-canvas').removeClass('open');
    $('body').removeClass('modal-open');
}

function openOffCanvasNav() {
    $('.off-canvas').addClass('open');
    $('body').addClass('modal-open');
}

// Accordion script
$('.toggle').click(function(e) {
    e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

$('.hamburger').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    if ($('.off-canvas').hasClass( "open" )) {
        closeOffCanvasNav();
    } else {
        openOffCanvasNav();
    }
});

$('.off-canvas-close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    closeOffCanvasNav();
});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}