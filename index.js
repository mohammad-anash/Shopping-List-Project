const btn = document.querySelector(".btn");
const InputEl = document.querySelector(".input");

btn.addEventListener("click", () => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("list");

  const anotherDiv = document.createElement("div");
  anotherDiv.textContent = InputEl.value;
  anotherDiv.classList.add("store");

  const para = document.createElement("p");
  para.classList.add("para");
  para.innerHTML = "Delete";
  anotherDiv.appendChild(para);

  contentDiv.appendChild(anotherDiv);

  para.addEventListener("click", () => {
    anotherDiv.remove("list");
    contentDiv.remove("store");
  });
  InputEl.value = ""
  document.body.appendChild(contentDiv);
});
