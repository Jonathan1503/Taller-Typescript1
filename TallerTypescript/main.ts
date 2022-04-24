import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('seasonAVG')!;


renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

 
  averageSeasons.innerHTML= `Seasons average: ${getTotalSeasons(series)}`;
  
  

 
}

function getTotalSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries +=1;
        });
    return totalSeasons/totalSeries;
  }
 




