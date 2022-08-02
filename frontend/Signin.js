const SignUpurl = "http://localhost:5000/login";

document.getElementById("form").addEventListener("submit", userList);
var arr = JSON.parse(localStorage.getItem("user")) || [];

async function userList(e) {
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //   console.log(email, password);

  const result = await fetch(SignUpurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    return res.json();
  });
  console.log(result);

  if (!email || !password) {
    alert("Enter all of the details");
  } else {
    var userObj = {
      email: email,
      password: password,
    };
    arr.push(userObj);
    localStorage.setItem("user", JSON.stringify(arr));
    alert("Hello Member");
    // window.location.href = "index.html";
  }
}
