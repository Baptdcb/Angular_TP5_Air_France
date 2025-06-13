import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PassagerComponent } from "../passager/passager.component";
import { PassagerService } from '../../services/passager.service';
import { CommonModule } from '@angular/common';
import { Passager } from '../../models/passager.model';
import { Vol } from '../../models/vol.model';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-liste-passagers',
    imports: [CommonModule, PassagerComponent, MatSlideToggleModule,  FormsModule],
    templateUrl: './liste-passagers.component.html',
    styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {

    passagers: Passager[] = [];
    @Input() vol!: Vol; 
    afficherPhotos: boolean = false; 

    constructor(
        private passagerService: PassagerService
    ) {}

    ngOnChanges(): void {
        if (this.vol && this.vol.icao) {
            this.passagerService.getPassagers(this.vol.icao).subscribe(passagers => {
                this.passagers = passagers;
                console.log('Liste des passagers:', this.passagers);
            });
        }
    }

    @Output() changementPhotos = new EventEmitter<boolean>();

    envoiAfficchagePhotos(event: MatSlideToggleChange) {
        this.changementPhotos.emit(event.checked);
    }
}
