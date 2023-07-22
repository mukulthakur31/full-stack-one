const search=()=>{
    const searchbox=document.getElementById("search items").value.toUpperCase()
    const storeitems=document.getElementById("products")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")

    for(var i=0;i<pname.length;i++){
        // there is a litle bit confusion why we use [0] is this line 
        let match=product[i].getElementsByTagName("h2")[0]
       
      
    //   if(match){
       let textvalue=match.innerHTML||match.textContent
       if(textvalue.toUpperCase().indexOf(searchbox)>=1){
        product[i].style.display="";
       }
        else{
            product[i].style.display="none";
        }
    }
    
}
// }
