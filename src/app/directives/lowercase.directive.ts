import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[appLowerCase]'
})
export class ChangeDirective {

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ) { }

    @HostListener('keyup') onKeyUp() {
      this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    }
}
