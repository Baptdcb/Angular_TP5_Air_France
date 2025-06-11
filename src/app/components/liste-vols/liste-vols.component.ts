import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { VolComponent } from "../vol/vol.component";

@Component({
    selector: 'app-liste-vols',
    templateUrl: './liste-vols.component.html',
    styleUrls: ['./liste-vols.component.scss'],
    imports: [CommonModule, VolComponent] // Include CommonModule here
})
export class ListeVolsComponent {
    @Input() vols!: Vol[];
    @Input() volType!: string;

    @Output() emitter = new EventEmitter<Vol>();

    EnvoyerVol(vol: Vol): void {
        this.emitter.emit(vol);
    }
}