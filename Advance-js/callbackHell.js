const getRollNo =() =>{
setTimeout(()=>{
    console.log('API getting rollno');
    let roll_no = [1,2,3,4,5];
    console.log(roll_no);

    setTimeout((rollno)=>{
        biodata = {
            name :'Vinod',
            age: 26
        }
        console.log(`My roll no is ${rollno} and My name is ${biodata.name} and age is ${biodata.age}`);

        setTimeout((name)=>{
            biodata.gender = 'Male';
            console.log(`My roll no is ${rollno} and My name is ${biodata.name} and age is ${biodata.age} and gender is ${biodata.gender}`);
        },2000 , biodata.name)
    },2000,roll_no[1])
    
},2000);
}
getRollNo();