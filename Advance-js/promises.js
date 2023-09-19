// promise produce
const pobj1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        reject('Error while communicating');
    }, 2000);
});

const getBiodata = (indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let biodata ={
                name:'vinod',
                age :25
            }
                resolve(`My roll no is ${indexdata} . My name is ${biodata.name}. and I am ${biodata.age}`)
            
        }, 2000, indexdata)
    });
}
// promise consume (resolve ke bhi do parameter hote h)
pobj1.then((rollno)=>{
    console.log(rollno);
    return getBiodata(rollno[1]);
}).then((a)=>{
    console.log(a);
}).catch((error)=>{
    console.log(error);
})