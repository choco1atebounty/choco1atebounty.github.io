

$(document).ready(function(){

    let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    let elements2 = $('.element-animation-number');
    elements.each((i,el) => {
        observer.observe(el);
    });

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        
        $(".section").each((i, el) => {

            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq('+ i +')').find('a').addClass ('active');
            }
        });
});
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }

        if (change.isIntersecting){
            change.target.classList.add('show-animation-number');
            duration: 1200;
        }


        $({blurRadius: 5}).animate({blurRadius: 0}, {
            duration: 1000,
            easing: 'swing',
            step: function() {
                $(".lines").css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
    });
       
        $('.lines').each(function () {
            $(this).prop('Counter',0).animate({
                Counter:$(this).text()
            },{
                duration: 1000,
                easing: 'swing',
                step:function(now){
                    $(this).text(Math.ceil(now));
                }
            });
            });

}

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"})
});


// $('form').submit(function(event) {

// if ($("#inputName").val() == "" || $("#inputEmail").val() == "" || $("#textPole").val() == "") {
//     event.preventDefault();
//     alert("Заполните поля!")
// }

// });

$('form').submit(function(event) {
    event.preventDefault();

    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Отправлено!");
        $("form").trigger("reset");
    });
    return false;
});


new WOW().init();