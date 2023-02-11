let myLinks =[]
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById("save-btn")
const tabSave = document.getElementById("save-tab")
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')
let linkFromLocal = JSON.parse(localStorage.getItem('myLinks')) 

// console.log(linkFromLocal)


let saveLinks  = () => {
    let listItems = ''
    for(let i = 0 ; i < myLinks.length ; i++){
        
        // console.log(myLinks[i])
      
         listItems +=   `<li>
         <a target='_blank' href="${myLinks[i]}">${myLinks[i]}<a/>

         </li>`
        
    }
    ulEl.innerHTML = listItems
}

saveLinks()

 
   
saveBtn.addEventListener('click', function(){
    
    myLinks.push(inputEl.value)
    // console.log(myLinks)
    inputEl.value = ''
    localStorage.setItem('myLinks', JSON.stringify(myLinks))
    saveLinks()
       
})



if(linkFromLocal){
  myLinks = linkFromLocal
  saveLinks()
}





const urlLink = [

    {url:'https://www.w3schools.com/js/tryit.asp?filename=tryjson_parse'}
]

deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear()
     myLinks = []
     saveLinks()
    
 })
 

 tabSave.addEventListener('click', function(){
    chrome.tabs.query({active: true , currentWindow: true,}, function(tabs){


        myLinks.push(tabs[0].url)
         localStorage.setItem('myLinks',JSON.stringify(myLinks) )
         saveLinks()
    })

    
})
