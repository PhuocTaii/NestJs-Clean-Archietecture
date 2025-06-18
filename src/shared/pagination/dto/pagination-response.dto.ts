export class PaginationResponseDto<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  isLast: boolean;

  constructor(data: T[], total: number, page: number, limit: number) {
    this.data = data;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.totalPages = Math.ceil(total / limit);
    this.isLast = page >= this.totalPages - 1; //totalPages starts from 1 not 0 while page starts from 0
  }
}
