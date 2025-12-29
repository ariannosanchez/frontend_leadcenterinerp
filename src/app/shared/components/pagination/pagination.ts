// import { Component, computed, input, linkedSignal, signal } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { PaginatorModule, PaginatorState } from 'primeng/paginator';
// import { ButtonModule } from 'primeng/button';


// @Component({
//   selector: 'app-pagination',
//   imports: [RouterLink, PaginatorModule, ButtonModule],
//   templateUrl: './pagination.html',
// })
// export class Pagination {
//   pages = input<number>(0);
//   currentPage = input<number>(1);

//   activePage = linkedSignal(this.currentPage);

//   getPagesList = computed(() => {
//     return Array.from({ length: this.pages() }, (_, i) => i + 1);
//   });
// }


import { Component, computed, input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  imports: [PaginatorModule],
  templateUrl: './pagination.html',
})
export class Pagination {
  pages = input<number>(0);
  currentPage = input<number>(1);
  limitPerPage = input<number>(10);

  totalRecords = computed(() => this.pages() * this.limitPerPage());
  first = computed(() => (this.currentPage() - 1) * this.limitPerPage());

  constructor(private router: Router, private route: ActivatedRoute) { }

  onPageChange(event: PaginatorState) {
    const newPage = (event.first! / event.rows!) + 1;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: newPage,
        limit: event.rows
      },
      queryParamsHandling: 'merge'
    });
  }
}