//Show back to top button
$(window).scroll(function(){
    var activebackTop = 'active'
    if($(this).scrollTop() > 500) {
       $('.backtop').addClass(activebackTop);
   } else {
       $('.backtop').removeClass(activebackTop);
   }
});

//Back to top animation
$('.backtop').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

//Smooth scroll
$('.btn a[href^="#"], .menu-nav a[href^="#"]').click(function(e){
    e.preventDefault()
    var targetId = $(this).attr('href'),
        offsetId = $(targetId).offset().top;
    $('html,body').animate({
        scrollTop: offsetId
    }, 1000); 
});

/*Mobile Menu*/
$('.mobile-btn').click(function(e){
    e.preventDefault();
    $(this).toggleClass('show');
    $('.mobile-menu').toggleClass('show');
})

