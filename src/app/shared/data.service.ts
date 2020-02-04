import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface DataItem {
    id: number;
    name: string;
    desc: string;
    price: string;
    imageSrc: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {
    private items: Array<DataItem> = [
        { id:1, name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
        { id:2, name: "Bowl of Crap", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
        { id:3, name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
        { id:4, name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
        { id:5, name: "Cuff Links", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
        { id:6, name: "Skateboard", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
        { id:7, name: "Off-Brand Soda", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
        { id:8, name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
        { id:9, name: "Pie!", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
    ];
    constructor(private http: HttpClient) {
        
    }

    getItems() {
        return new Promise((resolve, reject) => {
            /*this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos').toPromise().then((res: DataItem[]) => {
                this.items = res;
                resolve(res);
            });*/
            resolve(this.items);
        });        
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
