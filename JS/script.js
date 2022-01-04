


function food(){
    let url="https://foodish-api.herokuapp.com/api/"
fetch(url)
.then((res)=>res.json())

.then((data)=>{
    display(data)
   
})
.catch(()=>{
    console.log('error')
})

}





function display(data){
    let image=document.getElementById('img')
    let header =document.getElementById('heading').innerHTML=image.src=data.image;
   console.log(header);
   let imagefood= document.createElement('img');
   imagefood.setAttribute('src',data.image)
   imagefood.setAttribute('height','200')
   imagefood.setAttribute('width','200')
   imagefood.setAttribute('margin','200')
   document.getElementById('value').appendChild(imagefood)
    
    
  
  
}









 
















  








    


















 










