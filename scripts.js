function validate(){
  var fname=document.getElementById("fname").value;
  var mname=document.getElementById("mname").value;
  var lname=document.getElementById("lname").value;
  var dob=new Date(document.getElementById("birthday").value);
  var today=new Date;
  var age=document.getElementById("Age").value;
  var error_message=document.getElementById("error_message");
  error_message.style.padding="10px";
  var text;
  if(fname.length<5){
    text="Please Enter a Valid First Name";
    error_message.innerHTML=text;
    return false;
  }
  if(mname.length<5){
    text="Please Enter a Valid Middle Name";
    error_message.innerHTML=text;
    return false;
  }
  if(lname.length<5){
    text="Please Enter a Valid Last Name";
    error_message.innerHTML=text;
    return false;
  }
  if(dob>today&&dob!=null){
    text="You have entered an incorrect dob";
    error_message.innerHTML=text;
    return false;
  }
  if(isNaN(age)|| age.length<1){
    text="You have entered an incorrect age";
    error_message.innerHTML=text;
    return false;
  }
  alert("Form Submitted Successfully");
  return true;
}
