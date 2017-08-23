import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SpeakingComponent } from './components/speaking/speaking.component';
import { SpeakingDetailsComponent } from './components/speaking/speakingdetails.component';
import { WritingComponent } from './components/writing/writing.component';
import { ReadingComponent } from './components/reading/reading.component';
import { ListeningComponent } from './components/listening/listening.component';
import { PersonalIntroduction } from './components/personalintroduction/personalintroduction.component';
import { AudioComponent } from './components/audio/audio.component';

import { SpeakingDetailGuard } from './components/speaking/speaking-guard.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SpeakingComponent,
        SpeakingDetailsComponent,
        WritingComponent,
        ReadingComponent,
        ListeningComponent,
        PersonalIntroduction,
        AudioComponent,
        HomeComponent
    ],
    providers: [SpeakingDetailGuard],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'speaking-data', component: SpeakingComponent },
            { path: 'speaking-data/:id', canActivate: [SpeakingDetailGuard], component: SpeakingDetailsComponent },
            { path: 'writing-data', component: WritingComponent },
            { path: 'reading-data', component: ReadingComponent },
            { path: 'listening-data', component: ListeningComponent },
            { path: 'personalintroduction-data', component: PersonalIntroduction },
            { path: 'audiocomponent-data', component: AudioComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
