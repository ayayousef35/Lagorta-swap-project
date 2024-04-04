import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }
  
  getPeople(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/?page=${page}`);
  }

  searchPeopleByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/?search=${name}`);
  }

//   getAllObjects(): Observable<any[]> {
//     const requests = [];
//     for (let i = 1; i <= 5; i++) { // Assuming there are 5 pages with 82 objects in total
//       requests.push(this.http.get<any>(`${this.apiUrl}/people?page=${i}`));
//     }
//     return forkJoin(requests).pipe(
//       map((responses: any[]) => {
//         let allObjects: any[] = [];
//         responses.forEach(response => {
//           allObjects = allObjects.concat(response.results);
//         });
//         return allObjects;
//       })
//     );
// }
}
