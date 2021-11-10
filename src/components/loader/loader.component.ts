import {Component} from '@angular/core';
import {interval, filter, Observable, scan, BehaviorSubject, mergeMap} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  // observable interval
  private interval$ = interval(250);
  private variant$: BehaviorSubject<'start' | 'pause' | 'stop'> = new BehaviorSubject<'start' | 'pause' | 'stop'>('stop');

  // значение индикатора загрузки
  public loaderIndicatorValue$: Observable<number> = this.variant$.pipe(
    mergeMap(val =>
      this.interval$.pipe(
        scan((sum, next) => {
          if (val === 'start') {
            return sum + 1;
          }
          else if (val === 'pause') {
            return sum;
          }
          else if (val === 'stop'){
            return 0;
          }
        }),
        filter(val => val <= 100)
      )
    )
  );


  public start(): void {
    this.variant$.next('start');
  }

  public pause(): void {
    this.variant$.next('stop');
  }

  public reset(): void {
    this.variant$.next('pause');
  }

}
