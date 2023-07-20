import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  columnDefinitions1: Column[] = [];
  gridOptions1!: GridOption;
  dataset1: any[] = [];
  page = 1;


  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.columnDefinitions1 = [
      { id: 'title', name: 'City Name', field: 'title' },
      { id: 'description', name: 'Description', field: 'description' },
      {
        id: 'action',
        name: 'Action',
        field: 'action',
        minWidth: 100,
        maxWidth: 200,
        excludeFromHeaderMenu: true,
        excludeFromExport: true,
        excludeFromColumnPicker: true,
        formatter: (row: number, cell: number, value: any, columnDef: Column, dataContext: any): string => {
          const editIcon = '<button><i class="fas fa-edit"></i></button>';
          const deleteIcon = `<button (click)="onDeleteRecord(${dataContext.id})"><i class="fas fa-trash"></i></button>`;
          const cloneIcon = '<button><i class="fas fa-copy"></i></button>';
          return editIcon + ' ' + deleteIcon + ' ' + cloneIcon;
        }
      }
    ];

    this.gridOptions1 = {
      enableAutoResize: false,
      enableSorting: true,
      gridHeight: 300,
      gridWidth: 1200,
    };

    this.loadData();
  }

  loadData(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<any[]>(apiUrl).subscribe((data) => {
      this.dataset1 = data;
      this.totalPages = Math.ceil(this.dataset1.length / this.pageSize);
    });
  }

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.dataset1.slice(startIndex, endIndex);
  }

 // ...

pageChange(page: number): void {
  this.currentPage = page;
}

  addCity(): void {

  }

  save(): void {

  }

  onDeleteRecord(id: number): void {

  }

  onPreviousPage(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  onNextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }
}

