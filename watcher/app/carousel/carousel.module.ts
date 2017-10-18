import {NgModule} from '@angular/core';

import {NavbarComponent} from '../ui/navbar/navbar.component';
import {SearchBarComponent} from '../ui/search/search-bar.component';
import {FooterComponent} from '../ui/footer/footer.component';
import {SharedModule} from '../shared/shared.module';

import {CarouselContainerComponent} from './carousel-container.component';
import {CarouselImageComponent} from './carousel-image.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CarouselContainerComponent,
        CarouselImageComponent,
    ],
    exports: [
        CarouselContainerComponent,
        CarouselImageComponent,
    ]
})

export class CarouselModule{}