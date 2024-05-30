import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  filteredData: any;
  filteredDataUnsubscribe: any
  constructor(private utilisService: UtilsService) {}

  ngOnDestroy() {
    if (this.filteredDataUnsubscribe) {
      this.filteredDataUnsubscribe.unsubscribe();
    }
  }

  ngOnInit() {
    this.receberDataFiltro()
  }
  receberDataFiltro() {
    this.filteredDataUnsubscribe = this.utilisService.sideNavFiltroData$.subscribe((data) => {
      this.filteredData = data
      console.log(this.filteredData)

    });
  }

}
