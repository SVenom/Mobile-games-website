
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const page_type = urlParams.get('signin')

    console.log(page_type);
    if(page_type=="true"){
      document.getElementById("alertbox").style.display="block"
      setTimeout(() => {
        setalertbox({type:null,msg:""})
          
        }, 4000);
    }

    function bigImg(x) {
      x.style.color = "#020af4";
      x.style.background = "#ff9800c4";
      document.getElementById("victor").style.display="none";
      document.getElementById("sara").style.display="none";
      document.getElementById("carlo").style.display="none";
      document.getElementById("andy").style.display="none";
      
      document.getElementById("forv").style.display="none";
      document.getElementById("fors").style.display="none";
      document.getElementById("forc").style.display="none";
      document.getElementById("fora").style.display="none";
    }

    function normalImg(x) {
      x.style.color = "transparent";
      x.style.background = "transparent";
      document.getElementById("victor").style.display="block";
      document.getElementById("sara").style.display="block";
      document.getElementById("carlo").style.display="block";
      document.getElementById("andy").style.display="block";
      
      document.getElementById("forv").style.display="block";
      document.getElementById("fors").style.display="block";
      document.getElementById("forc").style.display="block";
      document.getElementById("fora").style.display="block";

    }