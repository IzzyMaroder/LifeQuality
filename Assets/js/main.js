document.addEventListener('alpine:init', function(){

    Alpine.data('life_quality', function(){

        return {
            currentQuality: null,
            città: '',
            

            getQualityofLife: async function(city){
                
                currentCity = city;
                currentCity = currentCity.toLowerCase();
                
                let i=0;
                while(i< city.length) {
                    if(currentCity[i] === ' ') {
                        currentCity = currentCity.substr(0,i)+'-'+currentCity.substr(i+1,city.length);
                        
                    }
                    i++;
                }

                city = currentCity;
                
                const endpoint = ` https://api.teleport.org/api/urban_areas/slug:${city}/scores/`;
                const response = await fetch(endpoint);
                
                if(response.ok){
                    const mycity = await response.json();

                    this.currentQuality = mycity;   
                }else {
                   
                    alert("La città da te inserita non è presente!")
                    
                }
            },

         

            getCity() {
                
            },

            init: function(){
                this.getCity();
            },
        };
    });
});