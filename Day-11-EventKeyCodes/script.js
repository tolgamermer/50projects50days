const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) =>{
    insert.innerHTML = `
     <div class="key">
                <! --   a    -->

            ${event.key === ' ' ? 'Space' : event.key} 
            <small>event.key</small>
        </div>

        <div class="key">
                     <! --   65    -->

            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
                  <! --   KeyA    -->

            ${event.code}
            <small>event.code</small>
        </div>
    `
})





/* aşağıdaki kod dizimi if else ile aynı anlamı
 e.key'den gelen data boş bir string ise "Space" olarak döndür
 eğer değilse e.key'den gelen valueyi al kısacası
  bir if else shorthandi

${e.key === ' ' ? 'Space' : e.key} 

*/


/*

sayfayı açıp konsoldan herhangi bir tuşa bastığımızda
çıkan dataları görebiliriz

window.addEventListener('keydown', (e) => {
    console.log(e)
})

*/ 