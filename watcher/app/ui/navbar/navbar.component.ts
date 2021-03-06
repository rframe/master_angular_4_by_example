/**
 * Created by russell.frame on 10/18/2017.
 */
import {Component} from '@angular/core';
import {NavItem} from './navItems';


@Component({
    moduleId: module.id,
    selector: 'tv-navbar',
    templateUrl: './navbar.template.html'
})
export class NavbarComponent {
    appName: string = 'TV Watcher';
    navItems: NavItem[] = [
        {routerLink: '/', label: 'Home', active: false}
    ];
}