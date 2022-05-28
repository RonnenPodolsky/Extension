let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")

const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

const myLeadsInLocalStorage = JSON.parse( localStorage.getItem("leads") )


const renderLeads = leads => {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

const inputIsBlank = () => {
    if (inputEl.value === ""){
        return true
    }
    return false;
}


if (myLeadsInLocalStorage){
    myLeads = myLeadsInLocalStorage;
    renderLeads(myLeads)
}

inputBtn.addEventListener("click", function(){
    if (inputIsBlank()) {alert("can't empty"); return}

    myLeads.push(inputEl.value);
    renderLeads(myLeads) 

    let temp_str_leads = JSON.stringify(myLeads)
    localStorage.setItem("leads", temp_str_leads)

    inputEl.value = "";
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})
