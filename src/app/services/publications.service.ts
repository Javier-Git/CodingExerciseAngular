import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {

  public currentUser:string = '';
  public url:string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get(this.url + 'authors');
  }

  getPublications(order: string) {
    return this.http.get(this.url + 'publications?_sort=date&_order=' + order);
  }

  getPublicationByAuthor(email, order) {
    return this.http.get(this.url + 'publications?email=' + email + '&_sort=date&_order=' + order);
  }

  getUserPage(email, order, page) {
    return this.http.get(this.url + 'publications?email=' + email + '&_sort=date&_order=' + order + '&_page=' + page);
  }

  getPage(order, page) {
    return this.http.get(this.url + 'publications?_sort=date&_order=' + order + '&_page=' + page);
  }
}
