const input = document.getElementById("input");
const btn = document.getElementById("btn");
const items_ul = document.getElementById("tasks");

btn.addEventListener("click", () => {

    if (input.value !== "") {
        const new_li = document.createElement("li");
        new_li.setAttribute("class", "item")
        new_li.innerHTML = input.value;
        items_ul.append(new_li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        new_li.appendChild(span);
    }

    input.value = "";
    saveData();
})

items_ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", items_ul.innerHTML);
}

function showTask(){
    items_ul.innerHTML = localStorage.getItem("data")
}

showTask();










