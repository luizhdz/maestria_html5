(function(){
    loadList()
})()

function loadList(){
    var list = document.querySelector("ul#main_list")
    
    for (const item of data) {
        var li = document.createElement("li")
        li.innerText = item.name

        list.appendChild(li)
    }
}
