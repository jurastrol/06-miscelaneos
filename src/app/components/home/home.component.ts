import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>
    <app-css></app-css>
    <br>
    <app-clases></app-clases>
    <br><br>

    <p class="m-1" [appResaltado]="'orange'">
        Hola Mundo
    </p>
    <br>

    <app-ng-switch></app-ng-switch>

  `,
  styles: []
})

export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
             AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');

  }
  ngDoCheck() {
    console.log('ngDoCheck');

  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
