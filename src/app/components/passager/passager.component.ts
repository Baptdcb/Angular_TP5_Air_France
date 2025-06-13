import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClasseVolDirective } from '../../directives/classe-vol.directive';
import { BagagesDirective } from '../../directives/bagages.directive';

@Component({
    selector: 'app-passager',
    imports: [MatIcon, ClasseVolDirective, BagagesDirective],
    templateUrl: './passager.component.html',
    styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {

    @Input() passager!: Passager; 

}