function login(){
    var id = document.querySelector("#id");
    var pw = document.querySelector("#pw");

    if(id.value == "" || pw.value == ""){
        alert("Unable to login.")
    }
    else{
        location.href = 'main.html';
    }
}

function back(){
    history.go(-1);
}

function create_id(){
    var id = document.querySelector("#id");
    var pw = document.querySelector("#pw");
    var r_pw = document.querySelector("#r_pw");

    if(id.value == "" || pw.value == "" || r_pw.value == ""){
        alert("Please enter valid value!!")
    }
    else {
        if(pw.value !== r_pw.value){
            alert("Please check your password!")
        }
        else{
            location.href = 'login.html';
        }
    }
}