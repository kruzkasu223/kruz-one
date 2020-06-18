

// Theme Toggler


(function() {
    var themeSwitch = document.getElementById('myswitch');
    if(themeSwitch) {
        initTheme();
        
        themeSwitch.addEventListener("change", function(event){
            resetTheme();
        });

        function initTheme() {
            var lightThemeSelected = (localStorage.getItem("themeSwitch") !== null && localStorage.getItem("themeSwitch") === "light");
            
            themeSwitch.checked = lightThemeSelected;
            
                lightThemeSelected ? document.body.setAttribute("class", "light") : document.body.setAttribute("class", "dark");
        };
    
        function resetTheme() {
            if(themeSwitch.checked) {
                document.body.setAttribute("class", "light");
                localStorage.setItem("themeSwitch", "light");
            }
            else {
                document.body.setAttribute("class", "dark");
                localStorage.removeItem("themeSwitch");
            } 
        };
    }
}());




// Primary Color Changer


const color = localStorage.getItem("color");

if (color) {
    $("body").attr("id", color);
    $(".hero-img").attr("src", "img/hero-"+color+".png");
}



$("#bblue").click(function() {
    $("body").attr("id", "blue");
    $(".hero-img").attr("src", "img/hero-blue.png");
    localStorage.setItem("color", "blue");
});

$("#bteal").click(function() {
    $("body").attr("id", "teal");
    $(".hero-img").attr("src", "img/hero-teal.png");
    localStorage.setItem("color", "teal");
});

$("#bpink").click(function() {
    $("body").attr("id", "pink");
    $(".hero-img").attr("src", "img/hero-pink.png");
    localStorage.setItem("color", "pink");
});

$("#bhotpink").click(function() {
    $("body").attr("id", "hotpink");
    $(".hero-img").attr("src", "img/hero-hotpink.png");
    localStorage.setItem("color", "hotpink");
});

$("#bpurple").click(function() {
    $("body").attr("id", "purple");
    $(".hero-img").attr("src", "img/hero-purple.png");
    localStorage.setItem("color", "purple");
});

$("#bviolet").click(function() {
    $("body").attr("id", "violet");
    $(".hero-img").attr("src", "img/hero-violet.png");
    localStorage.setItem("color", "violet");
});

$("#borange").click(function() {
    $("body").attr("id", "orange");
    $(".hero-img").attr("src", "img/hero-orange.png");
    localStorage.setItem("color", "orange");
});

$("#bred").click(function() {
    $("body").attr("id", "red");
    $(".hero-img").attr("src", "img/hero-red.png");
    localStorage.setItem("color", "red");
});

$("#bgreen").click(function() {
    $("body").attr("id", "green");
    $(".hero-img").attr("src", "img/hero-green.png");
    localStorage.setItem("color", "green");
});

$("#bgray").click(function() {
    $("body").attr("id", "gray");
    $(".hero-img").attr("src", "img/hero-gray.png");
    localStorage.setItem("color", "gray");
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




// Skillbars


$(".skill-per").each(function(){
    var skillper = $(this).attr("per");
    $(this).css("width", skillper+"%");
});




// Contact Form


$(function() {
    
    $("#name-error-message").hide();
    $("#email-error-message").hide();
    $("#msg-error-message").hide();
    
    var error_name = false;
    var error_email = false;
    var error_msg = false;
    
    
    $("#contact-name").focusout(function(){
        check_name();
    });
    
    $("#contact-email").focusout(function() {
        check_email();
    });
    
    $("#contact-msg").focusout(function() {
        check_msg();
    });
    
    
    function check_name() {
        var pattern = /^[a-zA-Z ]*$/;
        var name = $("#contact-name").val();
        
        if (pattern.test(name) && name !== '') {
            $("#name-error-message").hide();
            $("#contact-name").css("border","2px solid var(--pc)");
        }
        else if (name === ''){
            $("#name-error-message").html("! Name Can't be Empty.");
            $("#name-error-message").show();
            $("#contact-name").css("border","2px solid red");
            error_name = true;
        }
        else{
            $("#name-error-message").html("! Enter Only Alphabets.");
            $("#name-error-message").show();
            $("#contact-name").css("border","2px solid red");
            error_name = true;
        }
    }
    
    
    function check_email() {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        var email = $("#contact-email").val();
        
        if (pattern.test(email) && email !== '') {
            $("#email-error-message").hide();
            $("#contact-email").css("border","2px solid var(--pc)");
            
        }
        else if (email === ''){
            $("#email-error-message").html("! E-mail Can't be Empty.");
            $("#email-error-message").show();
            $("#contact-email").css("border","2px solid red");
            error_email = true;
        }
        else{
            $("#email-error-message").html("! Enter Valid E-mail.");
            $("#email-error-message").show();
            $("#contact-email").css("border","2px solid red");
            error_email = true;
        }
    }
    
    
    function check_msg() {
        var msg_length = $("#contact-msg").val().length;
        var msg = $("#contact-msg").val();
        
        if (msg_length > 40) {
            $("#msg-error-message").hide();
            $("#contact-msg").css("border","2px solid var(--pc)");
        }
        else if (msg === ''){
            $("#msg-error-message").html("! Message Can't be Empty.");
            $("#msg-error-message").show();
            $("#contact-msg").css("border","2px solid red");
            error_msg = true;
        }
        else{
            $("#msg-error-message").html("! Enter Atleast 40 Character.");
            $("#msg-error-message").show();
            $("#contact-msg").css("border","2px solid red");
            error_msg = true;
        }
    }
    
    
    $("#contact-form").submit(function() {
        error_name = false;
        error_email = false;
        error_msg = false;
        
        check_name();
        check_email();
        check_msg();
        
        if (error_name === false && error_email === false && error_msg === false) {
            $("#submit-error-message").hide();
            return true;
        }
        else {
            $("#submit-error-message").html("Please Enter All Field Correctly!");
            return false;
        }
    });
});