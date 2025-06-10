import { Component } from '@angular/core';
import { IFiltres } from '../../models/filtres.model';
import { VolService } from '../../services/vol.service'; // Import VolService
import { FiltresComponent } from "../filtres/filtres.component";
import { ListeVolsComponent } from "../liste-vols/liste-vols.component";
import { ListePassagersComponent } from "../liste-passagers/liste-passagers.component";

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss'],
  imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent]
})
export class ViewAirFranceComponent {
  filtres?: IFiltres;

  constructor(private volService: VolService) {} // Inject VolService

  onFiltresChange(filtres: IFiltres): void {
    this.filtres = filtres;
    console.log('Filtres appliqués :', filtres);

    const { aeroport, debut, fin } = filtres;

    console.log('Aéroport sélectionné :', aeroport);
    console.log('Date de début :', debut);
    console.log('Date de fin :', fin);

    // Convert dates to seconds and call the service
    const debutSeconds = Math.floor(debut.getTime() / 1000);
    const finSeconds = Math.floor(fin.getTime() / 1000);

    this.volService.getVolsDepart(aeroport.icao, debutSeconds, finSeconds).subscribe(vols => {
      console.log('Vols récupérés :', vols);
    });
  }
}
