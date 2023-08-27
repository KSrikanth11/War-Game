const tanker=document.getElementById("tanker");

document.addEventListener("mousemove",(e)=>{
    const x = e.clientX;
    

    const centerX = tanker.offsetLeft + tanker.offsetWidth / 2;
   

    const angle =  (x - centerX) / window.innerWidth * 180;
    // const angleDeg = angle * (180 / Math.PI);

    tanker.style.transform= `translate(-50%) rotate(${angle}deg)`;
    // tanker.style.left = x + 'px';
    // tanker.style.top = y + 'px';
});

const checkboxes = document.querySelectorAll(".checked");
const score = document.getElementById('numbers');
var counter=0;
checkboxes.forEach((checkbox,index)=>{
    
    console.log(checkbox);
    checkbox.addEventListener("change",()=>{
        const label = document.querySelectorAll('.picture1')
        console.log(label);
        
        if(checkbox.checked){
            label[index].style.display="none";
            counter++;
             document.getElementById('numbers').innerHTML=counter;
           
            setTimeout(()=>{
                label[index].style.display="block";
                checkbox.checked=false;
            },4000);
        }
        
        
    });
});