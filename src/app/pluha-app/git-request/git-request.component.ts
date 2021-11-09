import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInfo} from '../../models/user-info';
import {GitUserInfoService} from '../../services/git-request/git-user-info.service'
import {debounceTime, Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-git-request',
  templateUrl: './git-request.component.html',
  styleUrls: ['./git-request.component.scss']
})
export class GitRequestComponent implements OnInit, OnDestroy {

  public resultItemList: UserInfo[] = [];
  public search: FormControl = new FormControl('');

  private subscription: Subscription = new Subscription();

  constructor(private searchService: GitUserInfoService) {

  }

  ngOnInit() {
    this.subscribeToSearchStringKeyUp();
  }

  ngOnDestroy() {
    this.unsubscribeFromSearchStringKeyUp();
  }

  private subscribeToSearchStringKeyUp(): void {
    this.subscription.add(
      this.search.valueChanges
        .pipe(
          debounceTime(500)
        )
        .subscribe({
          next: searchString => this.searchService.search(searchString)
            .subscribe(result => this.resultItemList = result),
          error: () => {
            this.resultItemList = this.searchService.clear();
          }
        })
    );
  }

  private unsubscribeFromSearchStringKeyUp(): void{
    this.subscription.unsubscribe();
  }

}
