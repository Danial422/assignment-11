function  onSubmitHandler(){
    
    var userTitle = document.getElementById("TITLE").value;
    var userDate = document.getElementById("DATE").value;
    var userData = document.getElementById("DESCRIPTION").value;
    if(userTitle != "" && userDate != "" && userData  != ""){
    document.getElementById("th-3").innerHTML = userTitle  ;
    document.getElementById("th-4").innerHTML = userDate   ;
    document.getElementById("th-5").innerHTML = userData   ;
    document.getElementById("th-6").innerHTML="<button id='del' onclick='deleteData()'>Delete</button>";
    }
    else{
        document.getElementById("th-3").innerHTML="This Field cannot be empty";
        document.getElementById("th-4").innerHTML="This Field cannot be empty";
        document.getElementById("th-5").innerHTML="This Field cannot be empty";
    }

}
    
 
 function deleteData(){

    document.getElementById("th-3").innerHTML="";
    document.getElementById("th-4").innerHTML="";
    document.getElementById("th-5").innerHTML="";
    document.getElementById("th-6").innerHTML="";
}
