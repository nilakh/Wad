$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
 
    $("#name").text(studentObj.name);
    $("#email").text(studentObj.email);
    $("#gender").text(studentObj.gender);
    $("#phone").text(studentObj.phone);
    $("#address").text(studentObj.address);
    $("#department").text(studentObj.department);
  
    
  }