// let todoInput = document.getElementById("todoInput");
// let todoButton = document.getElementById("todoBtn");
// let todoParentList = document.getElementById("todoListParent");

// let editTodo = null;

// const addTodo = () => {
//   let inputBox = todoInput.value.trim();
//   if (inputBox.length <= 0) {
//     alert("please enter your task");
//     return false;
//   }

//   if (todoButton.value === "Edit") {
//     editTodo.textContent = inputBox;
//     todoButton.value = "Add";
//     todoInput.value = "";
//   } else {
//     // Creating Element list and peragrapgh Element
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     p.textContent = inputBox;

//     li.appendChild(p);
//     todoParentList.appendChild(li);

//     todoInput.value = "";

//     //   creating EDIT button
//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.classList.add("btn", "editButton");
//     li.appendChild(editBtn);

//     //   creating EDIT button
//     const dltBtn = document.createElement("button");
//     dltBtn.textContent = "Delete";
//     dltBtn.classList.add("btn", "dltButton");
//     li.appendChild(dltBtn);
//     console.log("yes im here for something");
//   }
// };

// const updateTodo = (e) => {
//   if (e.target.textContent === "Delete") {
//     const confirmation = confirm("Are you sure you want to delete this task?");
//     if (confirmation) {
//       e.target.parentNode.remove();
//     }
//   } else if (e.target.textContent === "Edit") {
//     todoInput.value = e.target.previousElementSibling.innerHTML;
//     todoInput.focus();
//     todoButton.value = "Edit";
//     editTodo = e.target.previousElementSibling;
//   }
//   const target = e.target;
//   if (target.tagName !== "BUTTON") {
//     // Check if clicked element is not a button
//     const taskItem = target.parentNode;
//     taskItem.classList.toggle("completed"); // Toggle strikethrough class
//   }
// };

// todoButton.addEventListener("click", addTodo);
// todoParentList.addEventListener("click", updateTodo);

// METHOD 2

// const inputBox = document.getElementById("todoInput");
// let todoBtn = document.getElementById("todoBtn");
// const todoListParent = document.getElementById("todoListParent");

// let editTarget = null;

// const createTodoTask = () => {
//   let inputValue = inputBox.value.trim();
//   if (inputValue <= 0) {
//     alert("please enter your task");
//   } else {
//     if (editTarget) {
//       editTarget.querySelector("p").textContent = inputValue;
//       editTarget = null;
//       todoBtn.value = "Add";
//       inputBox.value = "";
//     } else {
//       let li = document.createElement("li");
//       let p = document.createElement("p");
//       p.textContent = inputValue;
//       li.appendChild(p);
//       todoListParent.appendChild(li);
//       inputBox.value = "";

//       // create edit task button
//       let editBtn = document.createElement("button");
//       editBtn.innerText = "Edit";
//       editBtn.classList.add("editBtn", "btn");

//       // create dlt task button
//       let dltBtn = document.createElement("button");
//       dltBtn.innerText = "Delete";
//       dltBtn.classList.add("btn", "dltBtn");

//       //  APPEND BUTTONS
//       li.appendChild(editBtn);
//       li.appendChild(dltBtn);
//       // EVENT LISTNER
//       dltBtn.addEventListener("click", deleteTask);
//       editBtn.addEventListener("click", editTask);
//       // add event listener for the list item
//       li.addEventListener("click", () => {
//         p.classList.toggle("completed");
//       });
//     }
//   }
// };

// const deleteTask = (e) => {
//   if (e.target.textContent === "Delete") {
//     let confirmation = confirm("are you sure you want to delete it ");
//     if (confirmation) {
//       e.target.parentNode.remove();
//     }
//   }
// };

// const editTask = (e) => {
//   if (e.target.textContent === "Edit") {
//     editTarget = e.target.parentNode;
//     const paragraph = editTarget.querySelector("p");
//     inputBox.value = paragraph.textContent;
//     todoBtn.value = "Save";
//     inputBox.focus();
//   }
// };

// todoBtn.addEventListener("click", createTodoTask);

// METHOD 3

let todoInput = document.getElementById("todoInput");
let todoButton = document.getElementById("todoBtn");
let todoListParent = document.getElementById("todoListParent");

let editTarget = null;

// CREATE FUNCTION
const createTask = () => {
  let inputBox = todoInput.value.trim();
  if (inputBox === "") {
    alert("Please Enter Your Task ");
  } else {
    if (editTarget) {
      editTarget.textContent = todoInput.value;
      editTarget = null;
      todoButton = "Add";
      todoInput.value = "";
    } else {
      // create ELEMENTS
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = todoInput.value;

      // CREATE EDIT BUTTON
      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("btn", "editBtn");

      // CREATE DELETE  BUTTON
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("btn", "dltBtn");

      // appendChild IN LI AND LI IN UL AND EDIT OR DELETE BUTTON AS WELL

      li.appendChild(p);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      todoListParent.appendChild(li);
      todoInput.value = " ";

      // ADD EVENET LISTNER ON EDIT OR DELETE BUTTON\
      editBtn.addEventListener("click", editTask);
      deleteBtn.addEventListener("click", deleteTask);
      p.addEventListener("click", () => {
        p.classList.toggle("completed");
      });
    }
  }
};
const editTask = (e) => {
  if (e.target.textContent === "Edit") {
    editTarget = e.target.parentNode.querySelector("p");
    todoInput.value = editTarget.textContent;
    todoButton.value = "Save";
    todoInput.focus();
  }
};

const deleteTask = (e) => {
  if (e.target.textContent === "Delete") {
    let confirmation = confirm("Are you sure you want to delete");
    if (confirmation) {
      e.target.parentNode.remove();
    }
  }
};

todoButton.addEventListener("click", createTask);
