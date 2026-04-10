const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Invalid credentials");
  }
}

window.onload = function () {
  if (localStorage.getItem("isAdmin") === "true") {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  }
};

function publishBlog() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Fill all fields");
    return;
  }

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  blogs.unshift({ title, content });

  localStorage.setItem("blogs", JSON.stringify(blogs));

  alert("Blog published!");

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function logout() {
  localStorage.removeItem("isAdmin");
  location.reload();
}