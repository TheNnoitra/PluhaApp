import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Subscription, take} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  // значение индикатора загрузки
  public loaderIndicatorValue: number = 0;

  private lastValue: number = 0;
  // observable interval
  private interval$ = interval(250);
  // подписка на изменение значнеия (тик) интервала
  private subscriptions: Subscription = new Subscription();

  public ngOnInit() {
    this.unsubscribeFromCount();
  }

  public ngOnDestroy() {
    this.unsubscribeFromCount();
  }

  // действие подписки на изменение значнеия (тик) интервала
  public subscribeToCount(): void {
    if (this.subscriptions.closed) {
      this.lastValue = this.loaderIndicatorValue;
      this.subscriptions = this.interval$
        .pipe(
          take(100 - this.lastValue),
          map(i => ++i)
        )
        .subscribe(
          svalue => this.loaderIndicatorValue = svalue + this.lastValue
        );
    }
  }

  // действие отписки на изменение значнеия (тик) интервала
  public unsubscribeFromCount() {
    if (!this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }

  // действие отписки и обнуление значения индикатора загрузки
  public resetCounterValue() {
    this.unsubscribeFromCount();
    this.loaderIndicatorValue = 0;
  }

}
