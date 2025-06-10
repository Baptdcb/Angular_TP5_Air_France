import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Vol } from '../../models/vol.model';

@Component({
    selector: 'app-vol',
    imports: [MatIcon],
    templateUrl: './vol.component.html',
    styleUrls: ['./vol.component.scss']
})
export class VolComponent {
    @Input() vol!: Vol

}
