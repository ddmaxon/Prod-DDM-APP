import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ContextmenuComponent } from '../../../../contextmenu/contextmenu.component';
import { ProgressChartsComponent } from '../../../progress-charts/progress-charts.component';
import { DetailedHistoryModalComponent } from '../../../../modals/detailed-history-modal/detailed-history-modal.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [
    CommonModule,
    ContextmenuComponent,
    MatIcon,
    ProgressChartsComponent,
    DetailedHistoryModalComponent
  ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit {
  @ViewChild(DetailedHistoryModalComponent) modalComponent!: DetailedHistoryModalComponent;

  hoveredHistoryData: any = null;

  historyData: any = [
    {
      id: "Aosdijasdoiasd",
      name: "MMAGIPC7224_230710_060420_LogFile_Framework_2012.csv",
      values: {
        testData: {
          testCount: 4,
          testPass: 4,
          testFail: 0,
          testPassRate: 100,
          tests: [
            {
              name: "Test 1",
              result: "Pass",
              time: "00:00:00",
              vals: []
              //...
            },
            //...
          ],
        },
        date: "2021-06-04",
        time: "20:12:00",
        type: "csv (MotTestLog)",
        size: "1.2MB",
        download: "https://www.google.com",
        process: {
          status: "Finished",
          time: "00:00:00",
          progress: 100,
          message: "Finished",
          log: "https://www.google.com",
          error: "https://www.google.com",
          //...
        }
        //...
      }
    },
    {
      id: "AwlisdUiweazqqwasd",
      name: "HWA13676_230711_060549_LogFile_Framework_2012.csv",
      values: {
        testData: {
          testCount: 43,
          testPass: 41,
          testFail: 2,
          testPassRate: 95.3,
          tests: [
            {
              name: "Test 1",
              result: "Pass",
              time: "00:00:00",
              vals: []
              //...
            },
            //...
          ],
        },
        date: "2021-06-04",
        time: "20:12:00",
        type: "csv (MotTestLog)",
        size: "48MB",
        download: "https://www.google.com",
        process: {
          status: "Finished",
          time: "00:00:00",
          progress: 100,
          message: "Finished",
          log: "https://www.google.com",
          error: "https://www.google.com",
          //...
        }
        //...
      }
    },
    {
      id: "ouzapowdapoDapohsad",
      name: "test.csv",
      values: {
        testData: {
          testCount: 30,
          testPass: 4,
          testFail: 26,
          testPassRate: 100,
          tests: [
            {
              name: "Test 1",
              result: "Pass",
              time: "00:00:00",
              vals: []
              //...
            },
            //...
          ],
        },
        date: "2021-06-04",
        time: "20:12:00",
        type: "csv (MotTestLog)",
        size: "1.2MB",
        download: "https://www.google.com",
        process: {
          status: "Finished",
          time: "00:00:00",
          progress: 100,
          message: "Finished",
          log: "https://www.google.com",
          error: "https://www.google.com",
          //...
        }
        //...
      }
    },
    {
      id: "adalbaWaluidhaushdlö",
      name: "test2.csv",
      values: {
        testData: {
          testCount: 54,
          testPass: 4,
          testFail: 0,
          testPassRate: 100,
          tests: [
            {
              name: "Test 1",
              result: "Pass",
              time: "00:00:00",
              vals: []
              //...
            },
            //...
          ],
        },
        date: "2021-06-04",
        time: "20:12:00",
        type: "csv (MotTestLog)",
        size: "1.2MB",
        download: "https://www.google.com",
        process: {
          status: "Airing",
          time: "00:00:00",
          progress: 7.407,
          message: "Airing",
          log: "https://www.google.com",
          error: "https://www.google.com",
          //...
        }
        //...
      }
    },
  ];

  selectedHistoryData: any = this.historyData[0];

  sortOrder: string = 'asc';

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  showModal: boolean = false;


  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    if(this.route.url.includes('detailedInfo')){
      this.showModal = true;
    }
    this.sort('values.process.status');
    this.setId(1);
  }

  setId(startId: any) {
    this.historyData.forEach((data: any, index: number) => {
      data.index = startId + index;
    });
  }

  sort(path: string) {
    const sortOrder = this.sortOrder || 'asc';
    const sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1;

    this.historyData = this.historyData.slice().sort((a: any, b: any) => {
      const valueA = this.getValueByPath(a, path);
      const valueB = this.getValueByPath(b, path);

      let result: number;
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        result = valueA.localeCompare(valueB);
      } else {
        result = valueA - valueB;
      }

      return result * sortOrderMultiplier;
    });

    // Umkehrung der Sortierreihenfolge für das nächste Mal
    this.sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  }

  getValueByPath(obj: any, path: string): any {
    const keys = path.split('.');
    let value = obj;
    for (const key of keys) {
      if (value[key] !== undefined) {
        value = value[key];
      } else {
        // Wenn das Objekt keinen Wert für den angegebenen Schlüssel hat, gib undefined zurück
        return undefined;
      }
    }
    return value;
  }

  setSelectedHistoryData(data: any) {
    this.selectedHistoryData = data;
    console.log(this.selectedHistoryData);
  }

  //activates the menu with the coordinates
  onrightClick(event: any) {
    this.contextmenuX = event.x
    this.contextmenuY = event.y
    this.contextmenu = true;
  }

  //disables the menu
  disableContextMenu() {
    this.contextmenu = false;
  }

  openModal(data: any) {
    this.selectedHistoryData = data;
    this.showModal = true
  }

  closeModal(){
    this.showModal = false;
  }
}
