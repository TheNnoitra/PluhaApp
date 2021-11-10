import {Component} from '@angular/core';
import {interval, map, Observable, reduce, take, takeWhile} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  // observable interval
  private interval$ = interval(50);

  // значение индикатора загрузки
  public loaderIndicatorValue$: Observable<number> = this.interval$.pipe(
     map(i => ++i),
     take(100)
  );

}
