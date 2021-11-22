
function myFunction(e){
    console.log("hello");
    e.preventDefault()
   
    var s="";
    var p="";
        s=document.getElementById("exampleInputEmail1").value
        p=document.getElementById("User").value
        console.log(s)
        console.log(p)
        if(s!="" && p!=""){
            document.getElementById("page").style.display= "none";
            document.getElementById("btns").style.display= "none";
            document.getElementById("next").style.display="block";

        
            setTimeout(()=>{
                window.location.replace("../index.html")
            },5000);

        }
        else{
            alert("Please fill the form");
        } 
    } 