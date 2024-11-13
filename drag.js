var draggables = document.querySelectorAll(".task");
let droppables = document.querySelectorAll(".swim-lane");


draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};

// const items = document.querySelectorAll('.item');  
// const container = document.querySelector('.container');  

// items.forEach(item => {  
//     item.addEventListener('dragstart', (e) => {  
//         e.dataTransfer.setData('text/plain', item.innerHTML);  
//     });  
// });  

// container.addEventListener('dragover', (e) => {  
//     e.preventDefault(); // Prevent default to allow drop  
// });  

// container.addEventListener('drop', (e) => {  
//     e.preventDefault();  
//     const data = e.dataTransfer.getData('text/plain');  
//     const newItem = document.createElement('div');  
//     newItem.textContent = data;  
//     newItem.className = 'item';  
//     container.appendChild(newItem);  
// });