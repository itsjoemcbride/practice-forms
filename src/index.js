const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const submission = Object.fromEntries(new FormData(event.target));
  console.log(submission); // Store the form data

  if (Object.keys(submission).includes("saveUsername")) {
    localStorage.setItem("username", submission.username); // if there is a username saved, allow user to pull it from local storage rather than retype
  }
});
