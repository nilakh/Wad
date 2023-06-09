$(document).ready(function () {
  // getData();

  $("#btnAddStudent").click(function () {
    //collect student data from student form
    function getStudentData() {
      let student = {
        name: $("#name").val(),
        email: $("#email").val(),
        gender: $("#gender").val(),
        phone: $("#phone").val(),
        address: $("#address").val(),
       department : $("#department").val()
      };
      $("#studentForm")[0].reset();
      return student;
    }

    //store student data to localStorage
    function storeDataToLocalStorage() {
      if (!localStorage.getItem("student")) {
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      } else {
        localStorage.removeItem("student");
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      }
    }

    //send data to server with AJAX request
    function sendData() {
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getStudentData());
      xhr.open("POST", "http://localhost:4000/storedata", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    }

    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    // sendData();
    // window.location.href = "display-data.html";
    window.open("display-data.html");
  });
});
