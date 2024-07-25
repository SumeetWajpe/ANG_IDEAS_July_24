export class PostModel {
  constructor(
    public id: number = 0,
    public userId: number = 0,
    public title: string = '',
    public body: string = ''
  ) {}
}
