//  Navbar toggle
$(".navbar-toggler").on("click", function() {
  $("#pushContent").slideToggle();
});

// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        // Get the height of the navbar
        var navbarHeight = $("div#navbar").height();

        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120
          },
          1000
        );
        return false;
      }
    }
  });
});

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal(".project-one-left", {
  duration: 2000,
  easing: "ease",
  scale: 0.85
});
sr.reveal(".project-one-right", {
  duration: 2000,
  easing: "ease",
  scale: 0.85
});

/*
function checkName() {
	    var name = document.getElementById("name").value;
	    if (name === "") {
		    alert("Please enter your Name.");
		    return false;
	    } else if (isNaN(name) === false) {
		    alert("Please enter a valid Name.");
		    return false;
	    };
       };

function checkEmail() {
		var email = document.getElementById("email").value;
		var x = email.indexOf("@");
        var y = email.lastIndexOf(".");
        if (email === "") {
            alert ("Please enter a valid email address.");
            return false;
        } else if (x < 1 || y < x+2 || y+2 >= email.length) {
            alert("Please enter a valid email address.");
            return false;
        };
    };

    function checkMessage() {
  		var message = document.getElementById("msg").value;
  		if (message === "" || message.length < 3) {
  			alert("Please tell us why you're contacting us.");
  			return false;
  		};
  	};

    document.getElementById("btn").addEventListener('click', function(){
    if(checkName() === false){
      return false;
    } else if (checkEmail() === false){
      return false;
    } else if(checkMessage() === false){
      return false;
    }

  });
	*/
