let data = {};
const avatarElem = document.getElementById("avatar");
const cards = [];

function renderCards() {
  //loop through the data and create a card for each user
  const dat = data;

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
  const url = "https://reqres.in/api/users?page=1";
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      data = res.data;
      renderCards();
    });
}
fetchData();
