import { Component, OnInit } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

@Component({
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  constructor(
    private lazyService: LazyDashboardTileService,
    private externalService: ExternalDashboardTileService
  ) { }


  addTile(): void {
    this._add('dashboard-tile');
  }

  private _add(tileKind = 'dashboard-tile'): void {

    const data =  [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    // TODO: Add custom element to page
    const tile = document.createElement(tileKind);
    tile['a'] = data[0];
    tile['b'] = data[1];
    tile['c'] = data[2];
    tile.setAttribute('class', 'col-sm-3');
    //tile.addEventListener('click', (e) => { alert('Ouch!')});

    document.getElementById('content').appendChild(tile);

  }

  addLazy(): void {

    this.lazyService.load().then(_ => {
      this._add('lazy-dashboard-tile');
    });
  }

  addExternal(): void {
    this.externalService.load();
    this._add('external-dashboard-tile');
  }

}
