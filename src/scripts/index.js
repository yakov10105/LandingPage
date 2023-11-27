(function () {
  emailjs.init("Ry72nBZDW4F0N2eLq");
})();
document.onload = function () {
  document
    .getElementById("contact")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_1hfxevs", "template_j88o9qn", this).then(
        function () {
          console.log("SUCCESS!");
          let alert = document.getElementById("success_alert");
          alert.style.display = "flex";
        },
        function (error) {
          console.log("FAILED...", error);
          let alert = document.getElementById("fail_alert");
          alert.style.display = "flex";
        }
      );
      document.forms[0].reset();
    });
};
function closeAlert(isSuccess) {
  const elementId = isSuccess ? "success_alert" : "fail_alert";
  let alert = document.getElementById(elementId);
  alert.style.display = "none";
}
function onContactClick() {
  const formInput = document.getElementById("user_name");
  formInput.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  setTimeout(() => {
    formInput.focus();
  }, 700);
}
