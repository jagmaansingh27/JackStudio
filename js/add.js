var show= document.getElementById("show");

 show.addEventListener("click",details);

 var row=1;

  function details(){

    let vehicle =document.getElementById("vehicle_type").value;

   




    let Registration_Number=document.getElementById("reg_no").value;

    let Make=document.getElementById("vehicle_make").value;




   

    let Model=document.getElementById("vehicle_model").value;

    let Year=document.getElementById("year").value;




if(!vehicle||!Registration_Number||!Make||!Model||!Year){

    alert("FILL  THE FORM");

}

 var display=document.getElementById("display");




    var Row =display.insertRow(row);

    var  cell1= Row.insertCell("0");

    var cell2= Row.insertCell("1");

    var cell3= Row.insertCell("2");

    var cell4= Row.insertCell("3");

    var cell5= Row.insertCell("4");

    cell1.innerHTML=vehicle;

    cell2.innerHTML=Registration_Number;

    cell3.innerHTML=Make;

    cell4.innerHTML=Model;

    cell5.innerHTML=Year;

    row++;




 }