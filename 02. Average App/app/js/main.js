// Get element from dom
const $ = (query = "", all = false) => {
  return all ? document.querySelectorAll(query) : document.querySelector(query);
};

// Component for Items
const Items = (itemsList = []) => {
  let all = "";

  for (const item of itemsList) {
    all += `
     <div class="items__list__item">
          <button class="edit">Edit</button>
          <button class="remove">Remove</button>
          <span>${item}</span>
      </div> 
      `;
  }

  return all;
};

// API Call
const getAverage = async (items) => {
  const res = await fetch("http://127.0.0.1:4000", {
    method: "POST",
    body: JSON.stringify({ items }),
  });
  const data = await res.json();

  return data.average;
};

// Main
const main = async () => {
  const itemsList = [];

  // On Add
  $(".add-item-btn").addEventListener("click", async (e) => {
    const input = $("#itemInput");

    itemsList.push(parseFloat(input.value)); // Add to list of items
    input.value = ""; // Reset Input
    $(".items__list").innerHTML = Items(itemsList); //   Render

    // Calculating Average from Server
    $(".average span").innerHTML = await getAverage(itemsList);
  });
};

main();
