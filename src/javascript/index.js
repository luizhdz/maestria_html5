(function(){
    loadList()
})()

function loadList(){
    var list = document.querySelector("ul#main_list")

    fetch("/src/data/architecture.json")
    .then(resp => resp.json())
    .then(data=>{
        
        for (const item of data) {
            var li = document.createElement("li")
            li.innerText = item.name

            list.appendChild(li)
        }
    })
}
