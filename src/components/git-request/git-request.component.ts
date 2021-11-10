import {Component} from '@angular/core';
import {UserInfo} from '../../interfaces/user-info';
import {GitUserInfoService} from '../../services/git-request/git-user-info.service'
import {debounceTime, Observable, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-git-request',
  templateUrl: './git-request.component.html',
  styleUrls: ['./git-request.component.scss']
})
export class GitRequestComponent {

  // контрол "Имя пользователя"
  public userNameControl: FormControl = new FormControl('');

  // результирующий список найденных репозиториев пользователя
  public resultItemList$: Observable<UserInfo[]> = this.userNameControl.valueChanges
    .pipe(
      debounceTime(500),
      switchMap(userName => this.searchService.search(userName))
    );

  constructor(private searchService: GitUserInfoService) {
  }

}
