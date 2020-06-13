
// Theme Toggler

$("#myswitch").click(function() {
    $("body").toggleClass("light");
});



// Color Changer

$("#bblue").click(function() {
    $("body").attr("id", "blue");
    $(".hero-img").attr("src", "img/hero-blue.png");
});

$("#bteal").click(function() {
    $("body").attr("id", "teal");
    $(".hero-img").attr("src", "img/hero-teal.png");
});

$("#bpink").click(function() {
    $("body").attr("id", "pink");
    $(".hero-img").attr("src", "img/hero-pink.png");
});

$("#bhotpink").click(function() {
    $("body").attr("id", "hotpink");
    $(".hero-img").attr("src", "img/hero-hotpink.png");
});

$("#bpurple").click(function() {
    $("body").attr("id", "purple");
    $(".hero-img").attr("src", "img/hero-purple.png");
});

$("#bviolet").click(function() {
    $("body").attr("id", "violet");
    $(".hero-img").attr("src", "img/hero-violet.png");
});

$("#borange").click(function() {
    $("body").attr("id", "orange");
    $(".hero-img").attr("src", "img/hero-orange.png");
});

$("#bred").click(function() {
    $("body").attr("id", "red");
    $(".hero-img").attr("src", "img/hero-red.png");
});

$("#bgreen").click(function() {
    $("body").attr("id", "green");
    $(".hero-img").attr("src", "img/hero-green.png");
});

$("#bgray").click(function() {
    $("body").attr("id", "gray");
    $(".hero-img").attr("src", "img/hero-gray.png");
});



// Typewriter Animation

const TypeWriter = function(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    
    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.txtElement.innerHTML = `<span class="cursor">${this.txt}</span>`;
    
    let typeSpeed = 100;
    
    if(this.isDeleting) {
        typeSpeed /= 2;
    }
    
    if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 150;
    }
    
    setTimeout(() => this.type(), typeSpeed);
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.typewriter');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    new TypeWriter(txtElement, words, wait);
}



// Sticky Navbar

$(function() {
   $(window).scroll(function () {
        if ($(this).scrollTop() > 55) {
            $("nav").attr("class", "navbar-fixed");
            $("#nav-space").attr("class", "nav-space");
            
        }
        else {
            $("nav").attr("class", "navbar");
            $("#nav-space").attr("class", "");
            }
    });
});



// Nav Active


var sections = $('.container'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
        var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
      
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});




