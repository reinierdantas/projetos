
//forma otimizada icone ao passar o mouse
$('.menu-nav ul li a').mouseenter(function(){
    $(this).find('.fa-bone').addClass('show');
});
$('.menu-nav ul li a').mouseleave(function(){
    $(this).find('.fa-bone').removeClass('show');
});
//
$('.mobile-btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
})

//slide da minha galeria de imagens
$('.slide >:first').addClass('activate');
function rotateSlide(){
    var activeSlide = $('.slide > .activate'),
        nextSlide = activeSlide.next();
    if(nextSlide.length == 0){
        nextSlide = $('.slide >:first');
    }
    activeSlide.removeClass('activate');
    nextSlide.addClass('activate');
}
setInterval(rotateSlide,5000);

//Ativar ao clique meu conteudo ao clicar
$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'boom';
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);
    
    $allClick.click(function(e){
        e.preventDefault();
        
        var id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]');
        
        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);
        
        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
});

//scroll suave
$('.menu-nav a[href^="#"]').click(function(e){
    e.preventDefault();
    var targId = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        offsetTop = $(targId).offset().top;
    $('html, body').animate({
        scrollTop: offsetTop - menuHeight
    }, 1000);
});

//voltar ao topo
$('.logo, .backtop').click(function(){
    $('html,body').animate({
        scrollTop: 0
    }, 2000);
})

//scroll aparecer o back to top
$(window).scroll(function(e){
    e.preventDefault();
    var backTop = 'appear';
    if($(this).scrollTop() > 700){
        $('.backtop').addClass(backTop);
    } else{
        $('.backtop').removeClass(backTop);
    }
})