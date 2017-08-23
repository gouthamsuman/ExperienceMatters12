
import { Component } from '@angular/core';
import { DataService } from '../Data.service'

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    providers: [DataService]
})
export class AppComponent {
}
