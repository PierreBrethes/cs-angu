export class User {
    private prototype: any;
    public id: string;
    public name: string;
    private email: string;
    public tokenFbUser: string;
    public image: string;

    constructor(
        id: string,
        name: string,
        email: string,
        tokenFbUser: string,
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tokenFbUser = tokenFbUser;
        this.image = image;
    }
}
