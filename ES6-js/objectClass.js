class Student{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    //Instance Method
    biodata(){
        console.log(`Hi I am a class method ${this.myname}. ${this.myage}. ${this.mycls}`);
    }
}
class Player extends Student{
    constructor (name,age,cls,game){
        super(name,age,cls);
        this.mygame=game;
    }
    play_biodata(){
        console.log(`${super.biodata()} ${this.mygame}`);
    }
}

let obj1=new Player('vinod',22,'5','Football');
let obj2=new Student('kushwah','30','12');
obj1.play_biodata();
obj2.biodata();