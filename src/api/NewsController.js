import axios from "axios"

export default class NewsController {
    #apiKey = '0b0c21a383e04e20bc28a3003c51bc12'
    #baseUrl = `https://newsapi.org/v2/everything?q=health&apiKey=${this.#apiKey}`
     
    async getAllNews(){
        const response = await axios.get(this.#baseUrl)
       return response.data.articles
    }
}