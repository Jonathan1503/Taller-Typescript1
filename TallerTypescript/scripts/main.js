import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById('seasonAVG');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    averageSeasons.innerHTML = "Seasons average: ".concat(getTotalSeasons(series));
}
function getTotalSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries += 1;
    });
    return totalSeasons / totalSeries;
}
