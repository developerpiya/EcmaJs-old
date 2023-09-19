const setOfWords=["My name is Priya Kushwah and I am a Software Developer",
"You are a web developer and become a mern developer",
"Hii ! How are you So, what's going on your mind",
"Today is rain , and monsoon is very osm Look very pretty!"];

const msg=document.getElementById('msg');
const typeWords=document.getElementById('mywords');
const btn=document.getElementById('btn');
let startTime,endTime;

const playGame=()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date= new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}
const endPlay=()=>{
let date=new Date();
endTime=date.getTime();
let totalTime=((endTime-startTime)/1000);
console.log(totalTime);

let totalStr=typeWords.value;
let wordCount = wordCounter(totalStr);

let speed=Math.round((wordCount/totalTime)*60);
let finalMsg=`You typed total at ${speed} words per minutes`;
console.log(finalMsg);

finalMsg += compareWords(msg.innerText,totalStr);
msg.innerText = finalMsg; 
}

const compareWords=(str1,str2)=>{
let words1 = str1.split("");
let words2 = str2.split("");
let cnt=0;

words1.forEach(function(item,index){
    if(item == words2[index]){
        cnt++;
    }
    
})
let errorWords = (words1.length - cnt);
return (` ${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords} .`);
}

const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click',function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled=false;
        playGame();
    }else if(this.innerText=="Done"){
        typeWords.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})