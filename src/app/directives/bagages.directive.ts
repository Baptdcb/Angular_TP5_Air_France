import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBagages]'
})
export class BagagesDirective implements OnChanges {
  @Input('ClasseVol') appClasseVol!: string; 
  @Input('appBagages') appBagages!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateRegles();
  }

  private updateRegles(): void {
    let color = ''; 
    if((this.appClasseVol === 'STANDARD' && this.appBagages > 1) ||
       (this.appClasseVol === 'BUSINESS' && this.appBagages > 2) ||
       (this.appClasseVol === 'PREMIUM' && this.appBagages > 3)) {
      color = 'red'; 
    } 
    
    this.renderer.setStyle(this.el.nativeElement, 'color', color);

  }
}
