import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  navigateMenu(event: any) {
    console.log(event);

    // event.parent().removeClass("current");
    let li = event.target;
    event.target.removeClass("current");
    // var active_section;

    // active_section = $(this);
    // if (direction === "up") active_section = active_section.prev();

    // var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

    //    navigation_links.parent().removeClass("current");
    // active_link.parent().addClass("current");
  }
}
