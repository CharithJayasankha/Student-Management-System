document.getElementById("saveStudent").addEventListener("click", function () {
  const studentName = document.getElementById("studentName").value;
  const studentEmail = document.getElementById("studentEmail").value;
  const studentPhone = document.getElementById("studentPhone").value;
  const studentClass = document.getElementById("studentClass").value;
  const studentDOB = document.getElementById("studentDOB").value;

  if (
    studentName &&
    studentEmail &&
    studentPhone &&
    studentClass &&
    studentDOB
  ) {
    alert("Student added successfully!");
    // Clear form fields
    document.getElementById("studentForm").reset();
    // Close modal
    var modalEl = document.querySelector("#studentFormModal");
    var modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  } else {
    alert("Please fill all fields");
  }
});
