//makes observer that deletes new elements added to dom that match xlist filters
let xList = ['CyberCoder']
xList = xList.map((el) => el.toLowerCase())

const targetNode = document.body
const config = {
    childList: true,
    subtree: true
};
const deleteFromMutation = function (mutationsList) {
    mutationsList.forEach((mutation) => {
        deleteFilterFromElList(mutation.addedNodes)
    })
};

// Create an observer instance linked to the callback function which deletes 
// newly added nodes if they have text from xList
const observer = new MutationObserver(deleteFromMutation);

//intial delete 
deleteFilterFromElList(targetNode.querySelectorAll('li'));
// Start observing the target node for configured mutations
observer.observe(targetNode, config);

function deleteFilterFromElList(ul, filters = xList) {
    ul.forEach((li) => {
        const text = li.textContent.toLowerCase()
        if (text.match(filters)) {
            console.log([li, li.innerHTML]);
            li.parentNode.removeChild(li);
        }
    })
}
