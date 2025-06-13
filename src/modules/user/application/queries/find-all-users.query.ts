export class FindAllUsersQuery {
  constructor(
    public readonly page: number = 0,
    public readonly limit: number = 10,
  ) {}
}