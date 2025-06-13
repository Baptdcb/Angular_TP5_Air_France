import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClasseVol]'
})
export class ClasseVolDirective implements OnChanges {
  @Input() appClasseVol!: string; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateTextColor();
  }

  private updateTextColor(): void {
    let color = 'black'; 
    switch (this.appClasseVol) {
      case 'STANDARD':
        color = '#509dff'; 
        break;
      case 'BUSINESS':
        color = '#fa4f3b';
        break;
      case 'PREMIUM':
        color = '#35f76d';
        break;
    
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
