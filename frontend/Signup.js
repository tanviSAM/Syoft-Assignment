const SignUpurl = "http://localhost:5000/register";

document.getElementById("form").addEventListener("submit", userList);
var arr = JSON.parse(localStorage.getItem("user")) || [];

async function userList(e) {
  e.preventDefault();
  console.log("clicked");

  var name = document.getElementById("usernm").value;
  var email = document.getElementById("email").value;
  var role = document.getElementById("role").value;
  var phno = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  //   console.log(usernm, mobile, email, password);

  const result = await fetch(SignUpurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      role,
      phno,
      password,
    }),
  }).then((res) => {
    return res.json();
  });
  console.log(result);

  if (!email || !phno || !password) {
    alert("Enter all of the details");
  } else {
    var userObj = {
      name: name,
      email: email,
      role: role,
      phno: phno,
      password: password,
    };
    arr.push(userObj);
    localStorage.setItem("user", JSON.stringify(arr));
    alert("Welcome Aboard!");
    window.location.href = "Signin.html";
  }
}
