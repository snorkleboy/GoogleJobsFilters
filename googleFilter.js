//sets interval to delete any li with text that matches xlist filters
xList = ['CyberCoder']
xList = xList.map((el) => el.toLowerCase())

function deleteFromList() {
    deleteFilterFromElList(document.body.querySelectorAll('li'))
}

function deleteFilterFromElList(ul, filters = xList) {
    ul.forEach((li) => {
        const text = li.textContent.toLowerCase()
        const match = text.match(filters.join('|'))

        if (match) {
            console.log({
                match,
                li
            });
            li.parentNode.removeChild(li);
        }
    })
}
setInterval(deleteFromList, 5000)
