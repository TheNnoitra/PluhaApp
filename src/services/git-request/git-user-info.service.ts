import {Injectable} from '@angular/core';
import {Observable, of, map, catchError, throwError} from 'rxjs';
import {UserInfo} from '../../interfaces/user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUserInfoService {

  constructor(private readonly http: HttpClient) { }

  // Поиск репозиториев по имени пользователя git
  public search(userName: string): Observable<UserInfo[]> {
    if (!userName || !userName.trim()) {
      return of([]);
    }

    const url = `https://api.github.com/users/${userName}/repos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        catchError(err => {
          // надо бы придумать другой обработчик ошибки. или оставиьт только 'return throwError(err);'
          console.log('При выполнении запроса произошла ошибка...', err);
          return throwError(err);
        }),
        map(jsonRes => this.mapToResultList(jsonRes as any[]))
      );
  }

  // маппим результирующий json в модульку по интерфейсу
  private mapToResultList(jsonResult: any[]) {
    const resList: UserInfo[] = [];
    for (let jsonItem of jsonResult) {
      const resultItem: UserInfo = {
        name: jsonItem.hasOwnProperty('name') ? jsonItem['name'] : 'Имя не указано',
        description: jsonItem.hasOwnProperty('description') ? jsonItem['description'] : 'Описание отсутствует',
        url: jsonItem.hasOwnProperty('html_url') ? jsonItem['html_url'] : ''
      };

      resList.push(resultItem);
    }
    return resList;
  }
}
