const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";

let sWords=['python','java','C Programming','C#','reactjs','nodejs','angularjs','vanilla','mongodb','sql'];

const createNewWords=()=>{
    let ranNum=Math.floor(Math.random()*sWords.length);
    // console.log(ranNum);
    let newTempWords=sWords[ranNum];
    // console.log(newTempWords)
    return newTempWords;

}

const scrambleWords=(arr)=>{
for (let i=arr.length-1;i>0;i--){
    let temp=arr[i];
    // console.log(temp);
    let j=Math.floor(Math.random()*(i+1));
    // console.log(i);
    // console.log(j);

    arr[i]=arr[j];
    arr[j]=temp;
}
return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
      
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML=randWords;
    }else{
        let tempWord=guess.value;
        if(tempWord === newWords){
            // console.log("Correct");
            play=false;
            msg.innerHTML=`Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML="Start Again";
        }else{
            // console.log("Incorrect");
            msg.innerHTML=`Sorry Boss. It's not Correct. plz try again ${randWords}`;
        }
    }
    
})