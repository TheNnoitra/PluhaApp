import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInfo} from '../../interfaces/user-info';
import {GitUserInfoService} from '../../services/git-request/git-user-info.service'
import {debounceTime, Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-git-request',
  templateUrl: './git-request.component.html',
  styleUrls: ['./git-request.component.scss']
})
export class GitRequestComponent implements OnInit, OnDestroy {

  // результирующий список найденных репозиториев пользователя
  public resultItemList: UserInfo[] = new Array<UserInfo>();
  // контрол "Имя пользователя"
  public userNameControl: FormControl = new FormControl('');

  // подписка на действие изменение значения контрола "Имя пользователя"
  private subscription: Subscription = new Subscription();

  constructor(private searchService: GitUserInfoService) { }

  ngOnInit() {
    this.subscribeToSearchStringKeyUp();
  }

  ngOnDestroy() {
    this.unsubscribeFromSearchStringKeyUp();
  }

  // Создать подписку на изменение значения контрола "Имя пользователя"
  private subscribeToSearchStringKeyUp(): void {
    this.subscription.add(
      this.userNameControl.valueChanges
        .pipe(
          debounceTime(500)
        )
        .subscribe({
          next: userName => this.searchService.search(userName)
            .subscribe(
              result => {
                this.resultItemList = result;
              },
              error => {
                // тут наверно можно сделать обработчик ошибки и выводить сообщение,
                // что пользователь не найден
                this.resultItemList.length = 0;
              }
            )
        })
    );
  }

  // отписаться от действия изменение значения контрола "Имя пользователя"
  private unsubscribeFromSearchStringKeyUp(): void {
    this.subscription.unsubscribe();
  }

}
