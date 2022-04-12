//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', nasa)

function nasa() {

let datevalue = document.querySelector('input').value

fetch (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${datevalue}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    

}