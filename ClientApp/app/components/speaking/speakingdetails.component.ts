import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
    template: require('./speakingdetails.component.html')
})
export class SpeakingDetailsComponent implements OnInit {

    private PageTitle: number;
    constructor(private _route: ActivatedRoute, private _router : Router) {
        
        
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.PageTitle = id;
    }

    onBack(): void{
        console.log("test");
        this._router.navigate(['/speaking-data'])
    }
    
}
