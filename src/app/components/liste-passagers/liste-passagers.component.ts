import { Component, Input } from '@angular/core';
import { PassagerComponent } from "../passager/passager.component";
import { PassagerService } from '../../services/passager.service';
import { CommonModule } from '@angular/common';
import { Passager } from '../../models/passager.model';
import { Vol } from '../../models/vol.model';

@Component({
    selector: 'app-liste-passagers',
    imports: [CommonModule,PassagerComponent],
    templateUrl: './liste-passagers.component.html',
    styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {

    passagers: Passager[] = [];
    @Input() vol!: Vol; 
    
    constructor(
        private passagerService: PassagerService
    ) {}

    ngOnChanges(): void {
        if (this.vol && this.vol.icao) {
            this.passagerService.getPassengers(this.vol.icao).subscribe(passagers => {
                this.passagers = passagers;
                console.log('Liste des passagers:', this.passagers);
            });
        }
    }
}
