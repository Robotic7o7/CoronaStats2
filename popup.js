{
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("click-this").addEventListener("click", hello);
      });
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("Reset").addEventListener("click", clearVal);
      });

      var customImageurl = "images/rohan-logo.png"
      function loadGraphics(){
          //v-- will work given your example conditions
          document.getElementById("loadImage").src = customImageurl;
      }
      loadGraphics()
     
    function clearVal(){
        customImageurl = "images/rohan-logo.png";
        loadGraphics();
        const myNode0 = document.getElementById("country");
        myNode0.innerHTML = '';
        const myNode1 = document.getElementById("totalcases");
        myNode1.innerHTML = '';
        const myNode2 = document.getElementById("totaldeaths");
        myNode2.innerHTML = '';
        const myNode3 = document.getElementById("new");
        myNode3.innerHTML = '';
        const myNode4 = document.getElementById("rec");
        myNode4.innerHTML = '';
        document.getElementById("te").value = "";
    }
    function hello(){
        var country= document.getElementById('te').value
        if(country === "India" || country === "india"){
            IndiaStat()
        }
        else if(country === "USA" || country === "Usa" || country === "usa"){
            USAStat()
        }
        else if(country === "China" || country === "china"){
            ChinaStat()
        }
        else if(country === "France" || country === "france"){
            FranceStat()
        }
        else if(country === "Italy" || country === "italy"){
            ItalyStat()
        }
        else if(country === "Reset" || country === "reset"){
            clearVal()
        }
        else{
            alert("Country Invalid or No Data to Show")
            customImageurl = "images/rohan-logo.png"
            loadGraphics()
        }
        
    }
    function IndiaStat(){
        clearVal()
        customImageurl = "images/India.jpg";
        loadGraphics();
        fetch('https://corona.lmao.ninja/v2/countries/India')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            document.getElementById("country").textContent += data.country
            document.getElementById('totalcases').textContent += data.cases
            document.getElementById('totaldeaths').textContent += data.deaths
            document.getElementById('new').textContent += data.todayCases
            document.getElementById('rec').textContent += data.recovered
        })
        
    }
    function USAStat(){
        clearVal()
        customImageurl = "images/USA.jpg";
        loadGraphics();
        fetch('https://corona.lmao.ninja/v2/countries/USA')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            document.getElementById("country").textContent += data.country
            document.getElementById('totalcases').textContent += data.cases
            document.getElementById('totaldeaths').textContent += data.deaths
            document.getElementById('new').textContent += data.todayCases
            document.getElementById('rec').textContent += data.recovered
        })
    }
    function ChinaStat(){
        clearVal()
        customImageurl = "images/China.jpg";
        loadGraphics();
        fetch('https://corona.lmao.ninja/v2/countries/China')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            document.getElementById("country").textContent += data.country
            document.getElementById('totalcases').textContent += data.cases
            document.getElementById('totaldeaths').textContent += data.deaths
            document.getElementById('new').textContent += data.todayCases
            document.getElementById('rec').textContent += data.recovered
        })
    }
    function ItalyStat(){
        clearVal()
        customImageurl = "images/Italy.jpg";
        loadGraphics();
        fetch('https://corona.lmao.ninja/v2/countries/Italy')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            document.getElementById("country").textContent += data.country
            document.getElementById('totalcases').textContent += data.cases
            document.getElementById('totaldeaths').textContent += data.deaths
            document.getElementById('new').textContent += data.todayCases
            document.getElementById('rec').textContent += data.recovered
        })
    }
    function FranceStat(){
        clearVal()
        customImageurl = "images/France.jpg";
        loadGraphics();
        fetch('https://corona.lmao.ninja/v2/countries/France')
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            document.getElementById("country").textContent += data.country
            document.getElementById('totalcases').textContent += data.cases
            document.getElementById('totaldeaths').textContent += data.deaths
            document.getElementById('new').textContent += data.todayCases
            document.getElementById('rec').textContent += data.recovered
        })
    }
    
}


