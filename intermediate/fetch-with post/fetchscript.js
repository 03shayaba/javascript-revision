document.getElementById("btn").addEventListener("click", makerequest);

// promise then
function makerequest() {
  console.log("Button Clicked");
//   let obj1 = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//       name: "morpheus",
//       job: "leader"
//     })
//   };
  // syntax -> fetch(url , init)  init => ek object hoti he
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      name: "morpheus",
      job: "leader"
    })
})
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
