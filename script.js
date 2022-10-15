let data = {};
let filterData = {};
const avatarElem = document.getElementById("avatar");
const previousElem = document.getElementById("previousBtn");
const nextElem = document.getElementById("nextBtn");
const searchElem = document.getElementById("search");

let presentPage = 1;
const cards = [];

previousElem.addEventListener("click", () => {
  presentPage--;
  fetchData();
});
nextElem.addEventListener("click", () => {
  presentPage++;
  fetchData();
});
searchElem.addEventListener("click", () => {
  fetchData();
});

function renderCards() {
  //loop through the data and create a card for each user
  const dat = filterData;

  for (let index = 0; index < dat.length; index++) {
    const context = dat[index];
    cards.push(`
        <div class= "col-12 mb-3 col-sm-6 col-md-3">
            <div class="card" style ="width: 18rem;">
             <img src="${context.avatar}" class="card-img" alt="picture">
             <div class="card-body">
             <h5 class="card-name">${context.first_name} ${context.last_name}</h5>
             <p class="card-email">${context.email}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
            </div>
        </div>
        `);
  }
  avatarElem.innerHTML = cards.join("");
}
//fetch data from the api
function fetchData() {
  const url = "https://reqres.in/api/users?page=${presentPage}";
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      card = [];
      data = res.data;
      filterData = res.data;
      renderCards();
    });
}
fetchData();

function search() {
  //search for a user
  filterData = data.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

search()
