document.querySelector('button').addEventListener('click', fetchForcast)
function fetchForcast(){
let currency = document.querySelector('input').value.toUpperCase()

const url = `https://v6.exchangerate-api.com/v6/ad52c95f8cf89ff1aa44099f/latest/${currency}`

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let [key, value] of Object.entries(data.conversion_rates)){
            let li = document.createElement('li')
            li.textContent = `${key} = ${value}`
            let ul = document.querySelector('ul')
            li.style.padding = '10px'
            li.style.wordBreak = '5px'
            ul.appendChild(li)
            let currency = localStorage.getItem('currency') + ' : ' + li.textContent
            localStorage.setItem('currency', currency)
        }

        document.querySelector('span').innerText = data.time_last_update_utc
        

        
       
    })

    .catch(err => {
        console.log(`error ${err}`)
    })

}

