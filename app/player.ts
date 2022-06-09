export class Player{
    id:number;
    firstname:string;
    lastname:string;
    username:string;
    status:string;
    matches:number;

    constructor(id:number,fName:string,lName:string,uName:string,status:string){
        this.id = id;
        this.firstname = fName;
        this.lastname = lName;
        this.username = uName;
        this.status = status;
        this.matches = 0;
    }
}