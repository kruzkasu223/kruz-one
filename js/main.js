$("#myswitch").click(function() {
    $("body").toggleClass("light");
});


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






var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--fc)}";
    document.body.appendChild(css);
};