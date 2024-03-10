const { Temperament } = require("../db")
require("dotenv").config();
const axios = require("axios")
const { API_KEY } = process.env;

const getTemps = async () => {
    try {
        const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`
        const response = await axios.get(URL)
        
        const allArray = response.data
        
        const tempersSet = new Set();
        
        allArray.forEach(dog => {
          if(dog.temperament){
            const tempArray = dog.temperament.split(', ')
            tempArray.forEach(temp => tempersSet.add(temp.trim()));
        }
        })
        const tempersArray = Array.from(tempersSet);
        
        const promises = tempersArray.map(temp => Temperament.findOrCreate({ where:{ name: temp } }))
        await Promise.all(promises);
        
        
        const result = await Temperament.findAll({ order: [['id', 'ASC']] })
        
        if (result) return result
        
        throw new Error("No temperaments found")
        
    } catch (error) {
        throw new Error("Something bad happened" + error.message)
    }
    
    
}
module.exports = {
    getTemps
}

//_________________________________________________________________________________________




