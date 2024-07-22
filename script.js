let btn1 = document.querySelector('.btn1');

let btn2  = document.querySelector('.btn2')

let body = document.querySelector('body');

let content3 = document.querySelector('.content3');

let contain = document.querySelector('.contain');

const update1 =()=>{
    // let updatehexvalue = handhexvalue();
    // console.log(updatehexvalue);
        let random1 = '0123456789abcdef';
        let color = '#'
        for(let i = 0 ;i < 6;i++){
            color = color + random1[Math.floor(Math.random()*16)];
        }
        console.log(color);
    
    btn1.innerHTML=color;
    content3.innerHTML =`background-image:linear-gradient(to right , ${color} , #BBB8B2)`;
    document.body.style.backgroundImage = `linear-gradient(to right , ${color} , #BBB8B2)`;
    contain.style.background = `linear-gradient(to right ,${color} , #BBB8B2)`
    btn1.style.backgroundColor = color;
}

btn1.addEventListener('click',()=>{
    update1();
})

const update2 = () =>{
    let random1 = '0123456789abcdef';
        let color = '#'
        for(let i = 0 ;i < 6;i++){
            color = color + random1[Math.floor(Math.random()*16)];
        }
    console.log(color);
    btn2.innerHTML=color;
    content3.innerHTML =`background-image:linear-gradient(to left ,#DE9151 , ${color})`;
    contain.style.background = `linear-gradient(to left,#DE9151,${color})`
    document.body.style.backgroundImage = `linear-gradient(to left ,#DE9151 ,  ${color})`;
    btn2.style.backgroundColor = color;
}

btn2.addEventListener('click',()=>{
    update2();
})


contain.addEventListener('click',()=>{;
    navigator.clipboard.writeText(content3.innerHTML)
    alert("Copied to clipboard");
})