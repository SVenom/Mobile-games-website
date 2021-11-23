function myFunction() {
  alert("Redirect to external website");
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "2px 5px";
    document.getElementById("navbar").style.background = "#000000b8";
    document.getElementById("home").style.color = "#ffb000";
    document.getElementById("news").style.color = "#ffb000";
    document.getElementById("contact").style.color = "#ffb000";
    document.getElementById("navbarDropdown").style.color = "#ffb000";
    document.getElementById("map").style.color = "#ffb000";
  }
  
  else {

    document.getElementById("navbar").style.padding = "5px";
    document.getElementById("navbar").style.background = "#7952b3";
    document.getElementById("home").style.color = "rgba(0,0,0,.9)";
    document.getElementById("news").style.color = "rgba(0,0,0,.9)";
    document.getElementById("contact").style.color = "rgba(0,0,0,.9)";
    document.getElementById("navbarDropdown").style.color = "rgba(0,0,0,.9)";
    document.getElementById("map").style.color = "#rgba(0,0,0,.9)";

  }
}
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const page_type = urlParams.get('signin')

    console.log(page_type);
    if(page_type=="true"){
      document.getElementById("alertbox").style.display="block"
      setTimeout(()=>{
        window.location.replace("index.html")
    },5000);
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