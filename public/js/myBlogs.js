function addBlog() {
  const title = document.getElementById("titleField");
  const content = document.getElementById("content");
  const url = "http://localhost:8000/blog";
  const data = {
    title: title.value,
    content: content.value,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      window.location.href = "http://localhost:8000/myblogs";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function deleteBlog(blog) {
  const id = blog.getAttribute("id");
  let url = `http://localhost:8000/blog/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      window.location.href = "http://localhost:8000/myblogs";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function closeWritePad() {
  document.getElementsByClassName("writePad")[0].style.margin = "100vw";
}
function showWritePad() {
  document.getElementsByClassName("writePad")[0].style.margin = "0";
}
function closeeditPad() {
  document.getElementsByClassName("editPad")[0].style.margin = "-100vw";
}
function showeditePad(blog) {
  const id = blog.getAttribute("id");
  document.getElementsByClassName("editPad")[0].style.margin = "0";

  let url = `http://localhost:8000/blog/${id}`;
  let title = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      console.log(title);
      document.getElementsByClassName("edittitle")[0].value =
        responseData.blog.title;
      document.getElementById("_id").value = responseData.blog._id;
      document.getElementsByClassName("editcontent")[0].innerHTML =
        responseData.blog.content;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
function updateBlog() {
  let id = document.getElementById("_id").value;
  const title = document.getElementsByClassName("edittitle")[0];
  const content = document.getElementsByClassName("editcontent")[0];
  const data = {
    title: title.value,
    content: content.value,
  };
  let url = `http://localhost:8000/blog/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      window.location.href = "http://localhost:8000/myblogs";
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function closeShowPad() {
  document.getElementsByClassName("showPad")[0].style.marginTop = "-100vh";
}
function showShowPad(blog, event) {
  if (event.target.classList[0] == "blog") {
    document.getElementsByClassName("showPad")[0].style.marginTop = "0";
    const id = blog.getAttribute("id");
    let url = `http://localhost:8000/blog/${id}`;

    let title = fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        console.log(title);
        document.getElementsByClassName("showtitle")[0].value =
          responseData.blog.title;
        document.getElementById("_id").value = responseData.blog._id;
        document.getElementsByClassName("showcontent")[0].innerHTML =
          responseData.blog.content;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
}
