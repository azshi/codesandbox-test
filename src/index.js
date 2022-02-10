import "./styles.css";

const onClickAdd = () => {
  // textbox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleList(inputText);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

const createImcompleList = (text) => {
  // generate div
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // generate li
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  // button(complete)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(delete)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // remove parent tag (div) from imcomplete list
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // let li child element of div
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add imcomplete list
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
