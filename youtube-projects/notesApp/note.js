let btn = document.getElementById('btn');
let txtContainer = document.getElementById('txt-container');

btn.addEventListener('click',()=>{
    let para = document.createElement('textarea');
    para.className = 'txt';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'delete'
    txtContainer.appendChild(para).appendChild(deleteBtn);
    console.log(deleteBtn);
})