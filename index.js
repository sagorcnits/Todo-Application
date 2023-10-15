let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let check = 0;
  for (let data of userData) {
    if (data.name === name || data.email === email || data.phone === phone) {
      check = 1;
      break;
    }
  }

  if (check === 1) {
    alert("please form check");
  } else {
    userData.push({
      name: name,
      email: email,
      phone: phone,
    });

    localStorage.setItem("userDetails", JSON.stringify(userData));
    e.target.reset();
  }
  displayData();
});

function displayData() {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";
  userData.forEach((element, index) => {
    finalData += `<div class="container">
            <h3  class="removBtn" onclick = "removedata(${index})">X</h3>
                    <h5>name</h5>
                    <div>${element.name}</div>
                    <br />
                    <h5>Email</h5>
                    <div>${element.email}</div>
                    <br />
                    <h5>phone</h5>
                    <div>${element.phone}</div>
                </div>`;
  });

  main.innerHTML = finalData;
}

displayData();

function removedata(index) {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
}
