import { Component, OnInit,ViewChild } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  allObjects: any[] = [];
  totalPeople!: number;
  pageSize: number = 10; // adjust as per your requirement
  currentPage: number = 1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllObjects();
  }
  getAllObjects(): void {
    this.swapiService.getPeople(this.currentPage)
    .subscribe((data: any) => {
      this.allObjects = data.results;
      this.totalPeople = data.count;
    });
}

onPageChange(event: PageEvent) {
  this.currentPage = event.pageIndex + 1;
  this.getAllObjects();
}
 
}
