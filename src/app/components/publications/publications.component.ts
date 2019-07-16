import {Component, Input, OnChanges} from '@angular/core';
import {PublicationsService} from '../../services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [PublicationsService]
})
export class PublicationsComponent implements OnChanges {

  @Input() user;

  private publications;
  private total;
  private title = 'All Publications';
  private order = 'asc';
  private mod = 0;
  private pages = 1;
  private itemPages;
  private currentlyPage = 1;

  constructor(private service: PublicationsService) {

    this.service.getPublications(this.order).subscribe(
      result => {
        this.publications = result;
        this.total = this.publications.length;
        this.calculatePage(this.total);
        this.updatePage(1);
      },
      error => {
        console.log('Cant read publications');
      }
    );
  }

  calculatePage(items) {
    this.mod = (items) % 10;
    this.pages = Math.trunc((items) / 10);
    (this.mod !== 0) ? this.pages ++ : this.mod = 0;
    this.itemPages = Array(this.pages).fill(0);
  }

  updatePage(page) {
    (page === -1) ? this.currentlyPage = this.pages : this.currentlyPage = page;

    if (!this.user) {
      this.service.getPage(this.order, this.currentlyPage).subscribe(
        result => {
          this.publications = result;
        },
        error => {
          console.log('Cant read pages');
        }
      );
    } else {
      this.service.getUserPage(this.user.email, this.order, this.currentlyPage).subscribe(
        result => {
          this.publications = result;
        },
        error => {
          console.log('Cant read user page');
        }
      );
    }
  }

  showAll() {
    this.service.getPublications(this.order).subscribe(
      result => {
        this.publications = result;
        this.total = this.publications.length;
        this.calculatePage(this.total);
        this.updatePage(1);
      },
      error => {
        console.log('Cant get publications');
      }
    );
    this.title = 'All Publications';
    this.user = null;
  }

  orderByDate() {
    (this.order === 'asc') ? this.order = 'desc' : this.order = 'asc';
    this.updatePage(this.currentlyPage);
  }

  ngOnChanges() {

    this.service.getPublicationByAuthor(this.user.email, this.order).subscribe(
      result => {
        this.publications = result;
        this.total = this.publications.length;
        this.calculatePage(this.total);
        this.updatePage(1);
      },
      error => {
        console.log('Cant get publications');
      }
    );
    this.title = `Publications of ${this.user.name} ${this.user.lastname}`;
  }
}
