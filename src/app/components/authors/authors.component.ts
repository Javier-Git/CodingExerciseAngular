import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PublicationsService} from '../../services/publications.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [PublicationsService]
})

export class AuthorsComponent implements OnInit {

  @Output() filter = new EventEmitter<any>();
  private title:string = 'Authors';
  private authors;

  constructor(private service: PublicationsService) {
    this.service.getAuthors().subscribe(
      result => {
        this.authors = result;
      },
      error => {
        console.log('Cant read authors');
      }
    );
  }

  ngOnInit() {}

  applyFilter(event) {
    this.filter.emit({'name': event.name, 'lastname': event.lastName, 'email': event.email});
  }

}
