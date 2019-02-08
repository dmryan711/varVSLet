
document.write("<h3> These boxes are created declaring var i in a for loop. var is being updated, so the alert will not work as intended. Click each box below</h3>");
for(var i = 0;i< 42;i++){
    var div = document.createElement("div");
    
    div.addEventListener('click',function(){
        alert("I am element "+i);
    });
    document.body.appendChild(div);
}

document.write('<br />');
document.write("<h3> These boxes are created declaring let i in a for loop. The variable is being created each iteration of the loop (i think), so the alert WILL  work as intended. Click each box below</h3>");

for(let i = 0;i< 42;i++){
    var div = document.createElement("div");
    div.className = "blue"
    
    div.addEventListener('click',function(){
        alert("I am element "+i);
    });
    document.body.appendChild(div);
}