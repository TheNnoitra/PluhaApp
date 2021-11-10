import {Component} from '@angular/core';
import {
  interval,
  Observable,
  scan,
  BehaviorSubject,
  switchMap,
  takeWhile, map
} from "rxjs";

enum Action {
  Start,
  Pause,
  Reset
}

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {

  // observable interval
  private interval$ = interval(250);
  private variant$: BehaviorSubject<Action> = new BehaviorSubject<Action>(Action.Reset);

  // значение индикатора загрузки
  public loaderIndicatorValue$: Observable<number> = this.variant$.pipe(
    switchMap(acc => this.interval$.pipe(
      map(value => acc)
    )),
    scan((acc, next) => {
      return next === Action.Start ? ++acc : next === Action.Pause ? acc : 0;
    }),
    takeWhile(val => val <= 100)
  );

  public start(): void {
    this.variant$.next(Action.Start);
  }

  public pause(): void {
    this.variant$.next(Action.Pause);
  }

  public reset(): void {
    this.variant$.next(Action.Reset);
  }

}
