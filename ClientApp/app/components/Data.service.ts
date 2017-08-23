import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    testData : string = "TestData";
    Template: string = "Hi My name is .... I am .. years old and I live in Sydney Australia. I have completed my Bachelor’s degree in ...     I am currently working at ... as a .... from past three years.     I am currently holding 457 visa which is going to be expire in a year(change this as per your viasa).     I am planning to apply for permanent resident visa, so that I can continue my services her for long term.     I am giving this exam as part of the PR visa to assess my English language.In my free time I would like to do some .....        ";
    private _Url = '/api/SampleData/GetData';
    constructor(private _http: Http)
    {

    }

    getProducts(): Observable<Response> {
        return this._http.get(this._Url).map(response => response.json())
            .do(data => console.log('All:' + JSON.stringify(data) + 'NEXT:' + data))
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json() || 'Server Error');

    }
}