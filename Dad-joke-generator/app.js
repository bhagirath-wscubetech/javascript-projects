const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

// Get your API key and add it here
const API_KEY = ''

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': API_KEY
    }
}
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


    async function getJoke() {
        // console.log("clicked")
        try{
        jokeEl.innerText = 'Updating...'
        btnEl.disabled = true
        btnEl.innerText = 'Loading...'
        const response = await fetch(apiURL, options)
        const data = await response.json()
        // console.log(data[0].joke)
        jokeEl.innerText = data[0].joke
        btnEl.disabled = false
        btnEl.innerText = 'Tell me A Joke'
    }
        catch (error) {
        jokeEl.innerText = 'There was an error, try again later '
        btnEl.disabled = false
        btnEl.innerText = 'Tell me A Joke'
        console.log(error)
}
}



btnEl.addEventListener('click', getJoke)
