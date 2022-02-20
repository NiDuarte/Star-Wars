import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_PLANETS_STAR_WARS } from 'src/environments/environment';
import { ColecaoPlentaDTO, PlanetaDTO } from './models/model';
@Injectable({
  providedIn: 'root'
})
export class TabelaStartWarsService {

  constructor(
    private http: HttpClient

  ) { }

  listarPlanetas(page = 1): Promise<ColecaoPlentaDTO> {
    let parametro = new HttpParams();
    parametro = parametro.set('format', 'json');
    parametro = parametro.set('page', page.toString());
    return new Promise<ColecaoPlentaDTO>(
      (resolve, reject) => {
        this.http.get(API_PLANETS_STAR_WARS, { params: parametro }).toPromise<any>().then(
          (response: ColecaoPlentaDTO) => {
            response.results = response.results.map(p => new PlanetaDTO(p));
            resolve(response);
          },
          (e) => {
            reject(e);
          }
        )
      }
    );

  }
}
