import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {SearchBarComponent} from './search/search-bar.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
         SharedModule,
         RouterModule
    ],
    declarations: [
        NavbarComponent,
        SearchBarComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent,
        SearchBarComponent,
        FooterComponent
    ]
})

export class UIModule{}