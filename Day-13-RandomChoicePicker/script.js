const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus() // focus methodu sayfayı açar açmaz textareaya odaklanmamıza yarıyor


textarea.addEventListener('keyup', (e) => { // keyup klavyede basılan tuşun bırakıldığı anda datasını alır, keydown ise basılır basılmaz datayı alır.
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) 

    tagsEl.innerHTML= ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })

    // split fonksiyonu bir stringte o atanan değerin(örnekte biz virgül kullandık) önceki elemanını arrayin elemanı olarak atar.
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}