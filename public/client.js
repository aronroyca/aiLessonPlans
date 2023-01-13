const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userFormData = new FormData(userForm);
  const userParameters = [...userFormData.values()];
  console.log("submitted");

  fetch("/createPlan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userParameters),
  });
});
