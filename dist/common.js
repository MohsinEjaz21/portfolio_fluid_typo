/* Please ❤ this if you like it! */


(function ($) {
  "use strict";

  //Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
      t.style.top = n.clientY + "px",
      e.style.left = n.clientX + "px",
      e.style.top = n.clientY + "px",
      i.style.left = n.clientX + "px",
      i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }

  // &&&&&&&&&&&&&&&&&&
  // Navigation
  // &&&&&&&&&&&&&&&&&&


  var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        const element = toggleClass(body, 'nav-active')
        if (element.contains('nav-active')) {
          localStorage.setItem('navActive', 'true');
        } else {
          localStorage.setItem('navActive', 'false');
        }
        return element;
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
      }
      else {
        element.classList.add(stringClass)
      };
      return element;
    };
    init();
  }();


  // &&&&&&&&&&&&&&&&&&
  // Switch Ligth dark
  // &&&&&&&&&&&&&&&&&&


  $("#switch").on('click', function () {

    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $("#switch").removeClass("switched");
    }
    else {
      $("body").addClass("light");
      $("#switch").addClass("switched");
    }
  });


  // &&&&&&&&&&&&&&&&&&
  // Type Animation
  // &&&&&&&&&&&&&&&&&&

  // <script src='https://unpkg.com/typeit@8.2.0/dist/index.umd.js'></script>

  // new TypeIt("#demo", {
  //   strings: "Software Engineer",
  //   speed: 75,
  //   cursor: false,
  //   pause:false
  //   // loop: true,
  // }).go();


  // &&&&&&&&&&&&&&&&&&
  // Type Animation
  // &&&&&&&&&&&&&&&&&&



})(jQuery);
