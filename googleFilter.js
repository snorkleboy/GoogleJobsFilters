
//deletes any li with text.content that matches xList
xList = ['CyberCoder']
xList = xList.map((el)=>el.toLowerCase())

function deleteFromListItems(){
    document.body
    .querySelectorAll('li')
    .forEach( (li)=>{
        const text = li.textContent.toLowerCase()
        if(includesAny(text,xList)) li.innerHTML=''
    })
}

function includesAny(string, list){
    for(let filter of list){
        if (string.includes(filter)){
            return true;
        }
    }
    return false;
}

setInterval(deleteFromListItems,5000)
