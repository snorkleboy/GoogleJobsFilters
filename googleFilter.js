//sets interval to delete any li with text that matches xlist filters
xList = ['CyberCoder']
xList = xList.map((el) => el.toLowerCase())

function deleteFromList() {
    document.body
        .querySelectorAll('li')
        .forEach((li) => {
            const text = li.textContent.toLowerCase()
            if (text.match(xList)) li.parentNode.removeChild(li);
        })
}


setInterval(deleteFromList, 5000)