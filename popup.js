{
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("click-this").addEventListener("click", hello);
      });
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("clear").addEventListener("click", clearVal);
      });

    function clearVal(){
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
        else{
            alert("No Data to Show")
        }
        
    }
    function IndiaStat(){
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


