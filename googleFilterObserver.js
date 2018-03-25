//makes observer that deletes new elements added to dom that match xlist filters, also does initial sweep of all LI's 
let xList = ['CyberCoder', 'jobspring','we work remotely','hired', 'tandem recruiting group']
xList = xList.map((filter)=>filter.toLowerCase())

const targetNode = document.body
//config obj for observer element
// subtree true means that it will do deep check of childList change, instead of 
// just immediate children
const config = {childList:true,subtree: true};
// deleteFromMutation is a callback for the observer, which will be passed in a list of mutations. every 
//mutation has a type, and if it is a childlist mutation is will have removed/added nodes.
// this callback checks added nodes text for any mention of xList words and deletes them. 
const deleteFromMutation = function(mutationsList) {
    mutationsList.forEach((mutation)=> GetLiAndFilter(mutation))          
};
function GetLiAndFilter(mutation){
    mutation.addedNodes.forEach(node=>{
        //script nodes have querySelectorAll undefined, which throws an 'not function error' when called. 
        if (node.querySelectorAll){
            filterFromElList(node.querySelectorAll('li'))
        }
    })
}
function filterFromElList(ul,filters = xList){
    ul.forEach( (li)=>{
        const text = li.textContent.toLowerCase()
        const match = text.match(filters.join('|'))
        if (match) {
            console.log({match,li});
            li.parentNode.removeChild(li);
        }
    })
}

// Create an observer instance linked to the callback function which deletes 
// newly added nodes if they have text from xList
const observer = new MutationObserver(deleteFromMutation);

//intial delete 
filterFromElList(targetNode.querySelectorAll('li'));
// Start observing the target node for configured mutations
observer.observe(targetNode, config);

