import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private filtroDataSideNav = new Subject<any>();
  sideNavFiltroData$ = this.filtroDataSideNav.asObservable();

  constructor() {}

  emitFiltroDataSideNav(data: any) {
    this.filtroDataSideNav.next(data);
  }
}
