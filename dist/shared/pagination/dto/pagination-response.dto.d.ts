export declare class PaginationResponseDto<T> {
    data: T[];
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    isLast: boolean;
    constructor(data: T[], total: number, page: number, limit: number);
}
