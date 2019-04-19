export class User {
  private prototype: any;
  public id: string;
  public name: string;
  private email: string;
  public image: string;
  public tokenFbUser: string;

  constructor(
    id: string,
    name: string,
    email: string,
    image: string,
    tokenFbUser: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.tokenFbUser = tokenFbUser;
  }
}
