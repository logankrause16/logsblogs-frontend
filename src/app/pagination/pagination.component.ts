import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() pageSize!: number;
  @Input() totalItems!: number;
  currentPage = 1;
  pages: number[] = [];

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages(): void {
    const pageCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.pages.length) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }
}
