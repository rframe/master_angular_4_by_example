/**
 * Created by russell.frame on 10/18/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Carousel} from './carousel';
import {CarouselService} from './carousel.service';

@Component({
    moduleId: module.id,
    selector: 'tv-carousel-container',
    templateUrl: './carousel-container.template.html'
})
export class CarouselContainerComponent implements OnInit {
    slides: Carousel[];
    errorMessage: string;

    constructor(private _carouselService: CarouselService) {}

    ngOnInit(): void {
        this.getSlides();
    }

    getSlides() {
        this._carouselService.featured()
                .subscribe((x) => this.slides = x, error => this.errorMessage = <any> error);

    }
}