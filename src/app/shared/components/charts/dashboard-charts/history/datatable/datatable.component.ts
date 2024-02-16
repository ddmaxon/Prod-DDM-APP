import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Sort } from '@angular/material/sort';
import { ContextmenuComponent } from '../../../../contextmenu/contextmenu.component';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [
    CommonModule,
    ContextmenuComponent,
    MatIcon,
  ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit {

  historyData: any = [
    {
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
          progress: 5,
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


  constructor() { }

  ngOnInit() {
    this.sort('values.process.status');
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
}
