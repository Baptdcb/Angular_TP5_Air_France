import { Component } from '@angular/core';
import { IFiltres } from '../../models/filtres.model';
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

  onFiltresChange(filtres: IFiltres): void {
    this.filtres = filtres;
    console.log('Filtres appliqués :', filtres);
  }
}
