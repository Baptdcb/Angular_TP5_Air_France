import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { ClasseVolDirective } from '../../directives/classe-vol.directive';

@Component({
    selector: 'app-passager',
    imports: [MatIcon, ClasseVolDirective],
    templateUrl: './passager.component.html',
    styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {

    @Input() passager!: Passager; 

}