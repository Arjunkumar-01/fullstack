let register = ()=>{
    
    let fname = document.forms["regForm"]["fname"].value;
    let arr1 = [];

    if(/^$/.test(fname)) {
        arr1.push("First Name can't be empty");
    }else if(!/^[A-Za-z0-9]{4,8}$/.test(fname)){
        arr1.push("First Name should be 4-8 characters long");
    }
    document.getElementById("fname_errors").innerHTML = arr1.join('<br>');


    let lname = document.forms["regForm"]["lname"].value;
    let arr2 = [];

    if(/^$/.test(lname)) {
        arr2.push("Last Name can't be empty");
    }else if(!/^[A-Za-z0-9]{4,8}$/.test(lname)) {
        arr2.push("Last Name should be 4-8 characters long");
    }
    document.getElementById("lname_errors").innerHTML = arr2.join('<br>');


    let email = document.forms["regForm"]["useremail"].value;
    let arr3 = [];

    if(/^$/.test(email)) {
        arr3.push("Email can't be empty");
    }else if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        arr3.push("Invalid Email");
    }
    document.getElementById("email_errors").innerHTML = arr3.join('<br>');


    let password = document.forms["regForm"]["userpassword"].value;
    let arr4 = [];

    if(/^$/.test(password)) {
        arr4.push("Password can't be empty");
    }else if(/(?=.[0-9])(?=.[!@#$%^&])(?=.[A-Z])(?=.*[a-z]).{8,16}/.test(password)) {
        arr4.push("Password should be 8-16 characters long");
    }
    document.getElementById("password_errors").innerHTML = arr4.join("<br>");

    return false;
}