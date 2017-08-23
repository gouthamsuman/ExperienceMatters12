import { Component } from '@angular/core'
import { DataService } from '../Data.service'

@Component({
    selector: 'personalintroduction',
    template: require('./personalintroduction.component.html')
})
export class PersonalIntroduction {

    

    Template: string = "";
    testdata: string = "";
    RawData: string = null;
    errorMessage: string;
    
    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this.Template = this._dataService.Template;
        this.testdata = this._dataService.testData;

        this._dataService.getProducts().subscribe(products => this.RawData = JSON.stringify(products), error => this.errorMessage = <any>error);
       

    }

}