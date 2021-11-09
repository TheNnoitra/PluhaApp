import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Subscription, take} from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public counter: number = 0;

  private pausedValue: number = 0;
  private interval$ = interval(250);
  private subscriptions: Subscription = new Subscription();

  public ngOnInit() {
    this.unsubscribeFromCount();
  }

  public ngOnDestroy() {
    this.unsubscribeFromCount();
  }

  public subscribeToCount(): void {
    if (this.subscriptions.closed) {
      this.pausedValue = this.counter;
      this.subscriptions = this.interval$
        .pipe(
          take(100 - this.pausedValue),
          map(i => ++i + this.pausedValue)
        )
        .subscribe(
          svalue => this.counter = svalue
        );
    }
  }

  public unsubscribeFromCount() {
    if (!this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }

  public resetCounterValue() {
    this.unsubscribeFromCount();
    this.counter = 0;
  }

}
