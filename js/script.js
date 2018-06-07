
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
