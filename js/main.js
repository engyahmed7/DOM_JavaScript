let items =Array.from(document.querySelectorAll('.item'));
let box =document.querySelector('.lightBackground .light-item');
let centerdImageDiv= document.getElementById('centerdImageDiv');
let closeIcon=document.getElementById('close');
let leftArrow=document.getElementById('prev');
let rightArrow =document.getElementById('next')
let images=Array.from(document.querySelectorAll('.item img'));

let currentIndex;
items.forEach(function(item){
    item.addEventListener('click',(e)=>{ 
        currentIndex=images.indexOf(e.target)
        centerdImageDiv.classList.remove('d-none');
        box.style.cssText=`background-image: url(${e.target.getAttribute('src')});`
    })
})

closeIcon.addEventListener('click',()=>{
    centerdImageDiv.classList.add('d-none');
})

function slide(i){
    currentIndex=currentIndex + i;
    if(currentIndex < 0){
        currentIndex=images.length-1;
    }
    if(currentIndex>images.length-1){
        currentIndex=0;
    }
    box.style.cssText=`background-image: url(${images[currentIndex].src});`
}

leftArrow.addEventListener('click',()=>slide(-1))
rightArrow.addEventListener('click',()=>slide(1))

// leftArrow.addEventListener('click',()=>{
//    currentIndex--;
//     if(currentIndex < 0){
//         currentIndex=images.length-1;
//     }
//     box.style.cssText=`background-image: url(${images[currentIndex].src});`
// })

// rightArrow.addEventListener('click',()=>{
//     currentIndex++;
//     if(currentIndex>images.length-1){
//         currentIndex=0;
//     }
//     box.style.cssText=`background-image: url(${images[currentIndex].src});`
// }
// )

document.addEventListener('keydown',(e)=>{
    if(e.key=='ArrowRight'){
        slide(1)
    }
    else if(e.key=='ArrowLeft'){
        slide(-1)
    }
    else if(e.key=='Escape'){
        centerdImageDiv.classList.add('d-none');
    }

})