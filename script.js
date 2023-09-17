let Kategoriya = document.querySelector('.Kategoriya')
let answers = document.querySelectorAll('.korzinka')

let cookie = false
let cookies = document.cookie.split('; ')

for (let i=0; i < cookies.length; i +=1){
    if (cookies[i].split('=')[0]=='products'){
        
        break
    }
}
if (cookie){
    
container_main.style.display = "none"


btn_start.addEventListener('click', function(){
    container_start.style.display = 'none'
    container_main.style.display = 'flex'
})