let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function displayBlogs(list) {
  const container = document.getElementById("blogContainer");
  container.innerHTML = "";

  list.slice(0, 10).forEach(blog => {
    const div = document.createElement("div");
    div.className = "blog-card";
    div.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
    container.appendChild(div);
  });
}

// search
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const filtered = blogs.filter(blog =>
    blog.title.toLowerCase().includes(keyword) ||
    blog.content.toLowerCase().includes(keyword)
  );

  displayBlogs(filtered);
});

// initial load
displayBlogs(blogs);