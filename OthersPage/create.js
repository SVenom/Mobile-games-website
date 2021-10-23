
var n=0;
function myfunction(){
    n++
   
    var s,p
    s="";
    
    if (n==1){
        s=document.getElementById("box1").value
        console.log(s)
        if(s!=""){
        document.getElementById("Next").style.display= "none";
        document.getElementById("nextpage").style.display="block";

        }
        else{
            n--
            alert("Please fill the form");
        } 
    }
    else if(n==2){
        s=document.getElementById("box2").value
        console.log(s)
        if(s!=""){
        document.getElementById("nextpage").style.display="none";
        document.getElementById("next2").style.display="block";
        }
        else{
            n--
            alert("Please fill the form");
        }


    }
    else if(n==3){
        s=document.getElementById("box3").value
        console.log(s)
        if(s!=""){
        document.getElementById("next2").style.display="none";
        document.getElementById("next3").style.display="block";
        }
        else{
            n--
            alert("Please fill the form");
        }
        

    }
    else if(n==4){
        s=document.getElementById("box4").value
        p=document.getElementById("box5").value
        if(s!="" && p!=""){
        document.getElementById("next2").style.display="none";
        document.getElementById("next3").style.display="block";
        document.getElementById("homes").click();
        document.getElementById("next4").style.display="block";

        }
        else{
            n--
            alert("Please fill the form");
        }

    }
}
