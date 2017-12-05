$(document).ready(function () {

  console.log("Scripts are running");
  mobileNav();
  //toggleProjectModal();
  //dismissEditTodoModal();
  //dismissCreateTodoModal();
  //toggleTodoModal();
  setDateToToday();
});

function mobileNav() {

  $('.mobile-nav-toggle').on('click', function () {
    $('nav').toggleClass('is-open');
    $('.mobile-nav-toggle').toggleClass('is-open');
  });
  $('#content').on('click', function () {
    $('nav').removeClass('is-open');
    $('.mobile-nav-toggle').removeClass('is-open');
  });
}

function toggleProjectModal() {
  $("#addProject").click(function () {
    $("#projectModal").modal();
    console.log("Toggle Modal");
  });
}

function dismissCreateTodoModal() {
  $("#addTodo").click(function () {
    $("#todoModal").modal("toggle");
    console.log("Toggle Modal");
  });
}

function dismissEditTodoModal() {
  $("#editTodo").on('click', function () {
    if ($("#editTodoForm").isValid) {
      $("#editTodoModal").modal("toggle");
      console.log("Toggle Modal");
    }
  });
}

function setDateToToday() {
  document.getElementById('datePicker').valueAsDate = new Date();
  console.log('Date was set');
}
