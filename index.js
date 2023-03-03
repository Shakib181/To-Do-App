var StName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var cgpa = document.getElementById("cgpa");
var BTN = document.getElementById("btn");
BTN.addEventListener('click',function(event){
    event.preventDefault();
    if(StName.value == ''){
        alert("Please your name");
    }
    else if(roll.value == ''){
        alert("Please your roll");
    }
    else if(dept.value == ''){
        alert("Please your dept");
    }
    else if(cgpa.value == ''){
        alert("Please your cgpa");
    }
    else{
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');

        //for Name
        var td = document.createElement('td');
        td.innerHTML = StName.value;
        tr.appendChild(td);
        

        //for roll
        var td1 = document.createElement('td');
        td1.innerHTML = roll.value;
        tr.appendChild(td1);
        

        //for dept
        var td2 = document.createElement('td');
        td2.innerHTML = dept.value;
        tr.appendChild(td2);
        

        //for cgpa
        var td3 = document.createElement('td');
        td3.innerHTML = cgpa.value;
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
})