function addTask(){
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    if(inputBox.value == ''){
        alert('pls write something here .....');
    }else{
        var li = document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        var span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        
    }
    inputBox.value = '';
    savedata();
}

document.getElementById('list-container').addEventListener('click',function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
      }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
      }
},false);

function savedata(){
    localStorage.setItem('data',document.getElementById('list-container').innerHTML);
}

function showdata(){
    document.getElementById('list-container').innerHTML = localStorage.getItem('data');
}
showdata();
