import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import './shared/rxjs-extensions';
import {UIModule} from './ui/ui.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        UIModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }