"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponseDto = void 0;
class PaginationResponseDto {
    constructor(data, total, page, limit) {
        this.data = data;
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.totalPages = Math.ceil(total / limit);
        this.isLast = page >= this.totalPages;
    }
}
exports.PaginationResponseDto = PaginationResponseDto;
//# sourceMappingURL=pagination-response.dto.js.map