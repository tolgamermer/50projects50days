const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()



/* USING .THEN

function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    /* fetch('https://icanhazdadjoke.com', config).then(response => response.json()).then(data => console.log(data))
    /* burada json formatında aldıgımız datayı console üzerinde görebiliriz ama biz böyle kullanmıcaz

    fetch('https://icanhazdadjoke.com', config)
        .then(response => response.json())
        .then(data => {
            jokeEl.innerHTML = data.joke // onun yerinde jokeEl htmline ekliyoruz datayı data.joke kısmındaki joke datadan geliyor datada idsi joke
    })

 yukarıdaki gibi yapılabilir ancak daha iyi bir çözüm de var
}
*/ 


//using ASYNC/AWAIT

async function generateJoke() { // get request fetch

    const config = {
        headers: {
            'Accept': 'application/json' 
            // datayı postmandaki gibi almamız için gerekli bir obje oluşturuyoruz 
            // bunu yapmazsak bize HTML döndürecektir biz datayı istiyoruz
        } 
    }

    const response = await fetch("https://icanhazdadjoke.com", config); // ne zaman await kullanıyorsanız o fonksyion async label eklemeliyiz 

    const data = await response.json(); // json formatında datayı alıyoruz

    jokeEl.innerHTML = data.joke // datanın içersinden de joke alıyoruz innerhtml ekliyoruz

    console.log(data) // consoldan da datayı görebiliriz
    
     // 2. örnek daha kolay gözüküyor görüldüğü üzere
  }
