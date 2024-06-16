const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click', function(x){
        // console.log(x.target);
        // console.log(x);
        if(x.target.id === 'gray'){
            body.style.backgroundColor = x.target.id
        }
        if(x.target.id === 'white'){
            body.style.backgroundColor = x.target.id
        }
        if(x.target.id === 'blue'){
            body.style.backgroundColor = x.target.id
        }
        if(x.target.id === 'yellow'){
            body.style.backgroundColor = x.target.id
        }
    })
})
