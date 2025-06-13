import { Component } from '@angular/core';
import { IFiltres } from '../../models/filtres.model';
import { VolService } from '../../services/vol.service'; // Import VolService
import { FiltresComponent } from "../filtres/filtres.component";
import { ListeVolsComponent } from "../liste-vols/liste-vols.component";
import { ListePassagersComponent } from "../liste-passagers/liste-passagers.component";
import { Vol } from '../../models/vol.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss'],
  imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent]
})
export class ViewAirFranceComponent {
  filtres?: IFiltres;
  vols: Vol[] = []; 
  volSelectionne?: Vol; 

  volType: string = this.activatedRoute.routeConfig?.path || '';
  
  
  constructor(
    private volService: VolService,
    private activatedRoute: ActivatedRoute 
  ) {} 

  consoleLog(){
    console.log("Type de vol :", this.volType);
  }

  changementDeFiltres(filtres: IFiltres): void {
    this.filtres = filtres;
    

    const { aeroport, debut, fin } = filtres;

    let volType = "" ;
    if (this.volType === 'decollages') {
      volType = 'departure';
    }
    else if (this.volType === 'atterrissages') {
      volType = 'arrival';
    }


    const debutSeconds = Math.floor(debut.getTime() / 1000);
    const finSeconds = Math.floor(fin.getTime() / 1000);

    this.volService.getVols(aeroport.icao, debutSeconds, finSeconds , volType).subscribe(vols => {
      console.log('Vols récupérés :', vols);
      this.vols = vols;
    });
  }

  VolRecu(vol: Vol): void {
    this.volSelectionne = vol;
    
  }
}
