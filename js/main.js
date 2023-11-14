const FORM = document.getElementById("form");
const ERROR = document.getElementById("error");
const INPUT = document.getElementById("input");

const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const result = { Email: email };
  if (email !== "") {
    INPUT.style.border = "1px solid hsl(223, 100%, 88%)";
    ERROR.style.display = "none";
    FORM.reset();
    console.log(result);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successful registration",
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInLeft
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutRight
          animate__faster
        `,
      },
    });
  } else {
    ERROR.style.display = "block";
    INPUT.style.border = "2px solid hsl(354, 100%, 66%)";
    Swal.fire({
      confirmButtonText: "Ok",
      icon: "error",
      title: "Error",
      text: "Validate the structure of the entered email!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  }
};

FORM.addEventListener("submit", handleSubmit);
