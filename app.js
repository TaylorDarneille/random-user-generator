const requestUrl = "https://randomuser.me/api/?results=";

document.addEventListener("DOMContentLoaded", ()=>{

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        fetchPeople(requestUrl+input.value)
    })

    const fetchPeople = (endpoint) => {
        fetch(endpoint)
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            let people = jsonData.results;
            while(peopleList.firstChild) {
                peopleList.removeChild(peopleList.firstChild)
            }
            people.forEach(addPerson);
        })
        .catch((error)=>{
            console.log("error!!!:", error);
        });
    }

    const addPerson = (person)=>{
        let li = document.createElement("li");
        li.textContent = person.name.first, person.name.last;
        peopleList.appendChild(li);
    }

});