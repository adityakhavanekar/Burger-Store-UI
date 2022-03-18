let name,email,subject;
let nameEr,mailEr,subEr;
let submitbtn;

$(function(){
    name = $("#nameip");
    email = $("#mailip");
    subject = $("#subip");

    nameEr = $("#nameEr");
    mailEr = $("#mailEr");
    subEr = $("#subEr");

    submitbtn = $("#sub-btn");

    name.keyup(function(){
        validate_name();
    });

    email.keyup(function(){
        validate_mail();
    });

    subject.keyup(function(){
        validate_sub();
    });

    submitbtn.submit(function(){
        validateForm();
    })
});

function validate_name(){
    nameEr.html("");
    let namev = name.val();

    if(namev==""){
        nameEr.html("<b>This field is required</b>");
        name.css({"border-bottom":"2px solid red"})
        console.log("Hello");
    }

    else if(namev.length<3){
        nameEr.html("<b>Name should be of minimum 3 characters</b>");
        name.css({"border-bottom":"2px solid red"})
    }

    else{
        name.css({"border-bottom":"2px solid blue"})
    }
}

function validate_mail(){
    mailEr.html("");
    let mailv = email.val();

    if(mailv==""){
        mailEr.html("<b>This field is required</b>");
        email.css({"border-bottom":"2px solid red"})
    }
    else if(!mailv.includes("@")){
        mailEr.html("<b>Enter a valid Email address</b>");
        email.css({"border-bottom":"2px solid red"});
    }
    else{
        email.css({"border-bottom":"2px solid blue"})
    }
}

function validate_sub(){
    subEr.html("");
    let subv = subject.val();

    if(subv==""){
        
        subEr.html("<b>This field is required</b>");
        subject.css({"border-bottom":"2px solid red"});
    }
    else{
        subject.css({"border-bottom":"2px solid blue"})
    }
}

function validateForm(){

    let vn = validate_name();
    let ve = validate_mail();
    let vs = validate_sub();

    return (vn && ve && vs);
}
