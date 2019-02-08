

for(var i = 0;i< 42;i++){
    var div = document.createElement("div");
    
    div.addEventListener('click',function(){
        alert("I am element "+i);
    });
    document.body.appendChild(div);
}


for(let i = 0;i< 42;i++){
    var div = document.createElement("div");
    div.className = "blue"
    
    div.addEventListener('click',function(){
        alert("I am element "+i);
    });
    document.body.appendChild(div);
}