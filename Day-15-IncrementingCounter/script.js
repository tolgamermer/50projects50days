const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target')) //  parseInt kullanmazsak bize targeti string olarak döndürüyor
        console.log(typeof target, target); 

        const c = parseInt(counter.innerText) // counter'ın içindeki sayıyı c değişkenine atıyoruz ki kullanabilelim
        
        const increment = target / 200 // direkt sayfada target gözükmesin diye, düzenli bir artış ve eş zamanlı bitsinler diye 

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}` // math.ceil ondalıklı sayıyı yuvarlar
            setTimeout(updateCounter, 1) 
        } else {
            counter.innerText = target 
        }

    }

    updateCounter()
})