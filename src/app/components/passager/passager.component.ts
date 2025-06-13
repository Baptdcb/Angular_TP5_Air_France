import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClasseVolDirective } from '../../directives/classe-vol.directive';
import { BagagesDirective } from '../../directives/bagages.directive';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip'; 


@Component({
    selector: 'app-passager',
    imports: [MatIcon, ClasseVolDirective, BagagesDirective, CommonModule, MatTooltipModule],
    templateUrl: './passager.component.html',
    styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {

    @Input() passager!: Passager; 
    @Input() afficherPhotos!: boolean ; 

}