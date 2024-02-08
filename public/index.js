let url = "http://localhost:4000/"
let body = document.querySelector("body")
let darkButton = document.querySelector("#dark-button")
let lightButton = document.querySelector("#light-button")

darkButton.addEventListener("click", event => {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    getData(url + "dark-mode")
    console.log(document.cookie)

})

lightButton.addEventListener("click", event => {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    getData(url + "light-mode")
    console.log(document.cookie)
})

window.addEventListener("load", event => {
    console.log(document.cookie)
    if(document.cookie.includes("theme=dark-mode")){
        body.classList.add("dark-mode")
    } else {
        body.classList.add("light-mode")
    }
}
)

async function getData(url){
    await fetch(url, {
        method: "GET",
        credentials: "include"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}