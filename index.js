    // window.scrollTo(0,300)
    // window.scrollTo(0,20)
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const page_type = urlParams.get('signin')

    console.log(page_type);
    if(page_type=="true"){
      document.getElementById("alertbox").style.display="block"
    }

    function bigImg(x) {
      x.style.color = "#020af4";
      x.style.background = "#ff9800c4";
    }

    function normalImg(x) {
      x.style.color = "transparent";
      x.style.background = "transparent";
    }