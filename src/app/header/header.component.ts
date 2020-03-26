import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'short-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });


      //close menu on screen resize
     window.addEventListener("resize", (screenwidth)=> {
      let screenWidth = document.documentElement.clientWidth;
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      if (screenWidth>=1024 && el.classList.contains('is-active')){
        console.log("im here");
        el.classList.remove('is-active');
        $target.classList.toggle('is-active');
        
      }
    })





     
    });
  }

});

  }

}
