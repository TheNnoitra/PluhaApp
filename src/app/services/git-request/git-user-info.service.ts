import {Injectable} from '@angular/core';
import {Observable, of, map} from 'rxjs';
import {UserInfo} from '../../models/user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUserInfoService {

  constructor(private readonly http: HttpClient) {
  }

  public search(searchString: string): Observable<UserInfo[]> {
    if (!searchString || !searchString.trim()) {
      return of([]);
    }

    const url = `https://api.github.com/users/${searchString}/repos`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        map(jsonRes => this.mapToResultList(jsonRes as any[]))
      );
  }

  public clear(): UserInfo[] {
    return [];
  }

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
