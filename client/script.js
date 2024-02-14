const form = document.getElementById("form");
const baseurl = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.getElementById("search").value;
  search(value);
});

const search = async (value) => {
  const response = await fetch(`${baseurl}&q=${value}`);
  const data = await response.json();
  console.log(data);
};
