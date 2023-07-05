window.addEventListener("DOMContentLoaded", function() {
  var contentClass = document.getElementsByClassName("collapsible");
  var cardToggle = document.getElementsByClassName("open-benefit");
  var card = document.getElementsByClassName("hidden-benefit");



  for (var i = 0; i < cardToggle.length; i++) {
        cardToggle[i].addEventListener("click", function() {
        var img = this.querySelector("img");

        var index = Array.from(cardToggle).indexOf(this);
        var computedStyle = window.getComputedStyle(card[index]);
        var display = computedStyle.getPropertyValue("display");
  

        if(display === "none")
        {
          card[index].style.display = "block";
          img.src = "./svgs/arrow_up.svg"
        }

        else {
          card[index].style.display = "none";
          img.src = "./svgs/arrow_down.svg"

        }
      })
  }

  for (var i = 0; i < contentClass.length; i++) {
    contentClass[i].addEventListener("click", function() {
      var img = this.querySelector("img");
      var elem = this.nextElementSibling;

      //elem.style.display
      if (window.getComputedStyle(elem).display === "none") {
        elem.classList.remove("content-question");
        elem.classList.add("content-question-animation")
        //elem.classList.toggle("content-question-animation");
        img.src = "./svgs/arrow_up.svg";
      } else {
        elem.classList.remove("content-question-animation");
        void elem.offsetWidth;
        elem.classList.add("content-question");
        img.src = "./svgs/arrow_down.svg";
      }
    });
  }



});