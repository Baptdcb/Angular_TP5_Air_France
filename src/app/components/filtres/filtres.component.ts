import { Component, EventEmitter, LOCALE_ID, Output, ViewEncapsulation } from '@angular/core';
import { IFiltres } from '../../models/filtres.model';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { AEROPORTS } from './../../constants/aeroport.constant';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IAeroport } from '../../models/aeroport.model';
import { ThreeDayRangeSelectionStrategy } from '../../date-adapter';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-filtres',
    templateUrl: './filtres.component.html',
    styleUrls: ['./filtres.component.scss'],
    imports: [MatIconModule, MatButtonModule, MatInputModule, FormsModule,
        MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatCommonModule, CommonModule],
    providers: [
        provideNativeDateAdapter(),
        { provide: LOCALE_ID, useValue: 'fr' },
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: ThreeDayRangeSelectionStrategy,
        },
    ],
    encapsulation: ViewEncapsulation.None
})
export class FiltresComponent {

    /**
     * La liste des aéroports disponibles est une constante,
     * on n'utilise que les principaux aéroports français pour l'instant
     */
    aeroports: IAeroport[] = AEROPORTS;

    selectedAirport!: IAeroport
    startDate!: Date
    endDate!: Date

    get isDisabled() {
        return !this.selectedAirport || !this.startDate || !this.endDate
    }

    @Output() emitter = new EventEmitter<IFiltres>();

    applyFilters = () => {
        const filters: IFiltres = {
            aeroport: this.selectedAirport,
            debut: this.startDate,
            fin: this.endDate
        }

        this.emitter.emit(filters)
    }

}