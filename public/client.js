const userForm = document.getElementById("userForm");
const lessonPlan = document.getElementById("lessonPlan");

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
  })
    .then((res) => res.json())
    // .then((res) => console.log(res))
    .then((res) => (lessonPlan.textContent = res.result));
});
