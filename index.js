
let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

const renderLeads = value => ulEl.innerHTML += `<li>
                                                    <a href='${value}' target='_blank'>${value}</a>
                                                </li>`;


const saveLead = () => {
    if (inputEl.value === ""){
        return
    }
    myLeads.push(inputEl.value);
    // const li = document.createElement("li")
    // li.textContent = inputEl.value;
    // ulEl.append(li)  
    renderLeads(inputEl.value)
    inputEl.value = "";
}

inputBtn.addEventListener("click", saveLead)

