import {Component, OnInit, ViewChild} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {ContextmenuComponent} from '../../../../contextmenu/contextmenu.component';
import {ProgressChartsComponent} from '../../../progress-charts/progress-charts.component';
import {
    DetailedHistoryModalComponent
} from '../../../../modals/detailed-history-modal/detailed-history-modal.component';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RequestService} from "../../../../../core/request.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-datatable',
    standalone: true,
    imports: [
        CommonModule,
        ContextmenuComponent,
        MatIcon,
        ProgressChartsComponent,
        DetailedHistoryModalComponent,
        HttpClientModule
    ],
    templateUrl: './datatable.component.html',
    styleUrl: './datatable.component.scss',
    providers: [RequestService, HttpClient]
})
export class DatatableComponent implements OnInit {
    @ViewChild(DetailedHistoryModalComponent) modalComponent!: DetailedHistoryModalComponent;

    public hoveredHistoryData: any = null;
    public historyData: any = [];
    public filteredItems: any = [];

    public selectedHistoryData: any = this.historyData[0];
    public sortOrder: string = 'asc';

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;

    public showModal: boolean = false;
    public isRequesting: boolean = false;


    constructor(
        private route: Router,
        private requester: RequestService
    ) {
    }

    async ngOnInit() {
        this.isRequesting = true;

        if (this.route.url.includes('detailedInfo')) {
            this.showModal = true;
        }
        this.sort('values.process.status');
        this.setId(1);

        //Get the history
        const data = (await this.requester.GET('/csv/recent/history/1'))

        if (data.isSuccessfull) {
            this.historyData = data.data;
        } else {
            throw new Error(data.message)
        }

        this.isRequesting = false;

        this.filteredItems = this.historyData; // Initial werden alle Elemente angezeigt
    }

    setId(startId: any) {
        this.historyData.forEach((data: any, index: number) => {
            data.index = startId + index;
        });
    }

    search(event: Event, searchTerm: string): void {
        event.preventDefault();
        
        if (!searchTerm.trim()) {
            this.filteredItems = this.historyData; // Wenn der Suchbegriff leer ist, werden alle Elemente angezeigt
        } else {
            const searchTermLowerCase = searchTerm.toLowerCase();
            this.filteredItems = this.historyData.filter((item: any) =>
                item.name.toLowerCase().includes(searchTermLowerCase) ||
                item.values.process.status.toLowerCase().includes(searchTermLowerCase)
            );
        }
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

    closeModal() {
        this.showModal = false;
    }

    countAiringItems(items: any): number | string {
        let airingCount = 0;
        for (const item of items) {
            if (item.values.process.status === "Airing") {
                airingCount++;
            }
        }

        if (airingCount == 0) {
            return "No items found";
        }

        return airingCount;
    }

    countTotalTests(items: any): Number {
        let totalPass = 0;
        let totalFail = 0;
        for (const item of items) {
            totalPass += item.values.testData.testPass;
            totalFail += item.values.testData.testFail;
        }
        return totalPass + totalFail;
    }

    countFinishedItems(items: any): number | string {
        let finishedCount = 0;
        for (const item of items) {
            if (item.values.process.status === "Finished") {
                finishedCount++;
            }
        }

        if (finishedCount == 0) {
            return "No items found";
        }

        return finishedCount;
    }

    isNumber(data: any): boolean {
        if (typeof Number == typeof data) {
            return true;
        }
        return false;
    }
}
