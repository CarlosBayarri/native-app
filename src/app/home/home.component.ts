import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";

import * as Toast from 'nativescript-toast';
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this._itemService.getItems().then((res: Array<DataItem>) => {
            this.items = res;
        });
    }
    showToast() {
        const toast = Toast.makeText('Selected')
        toast.show();
    }
}
