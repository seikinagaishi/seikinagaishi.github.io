// Variables
var user = {
    'name': 'Seiki Nagaishi',
    'bio': 'Seiki Nagaishi é um estudante do quinto semestre de Análise e Desenvolvimento de Sistemas, buscando conhecimento e experiência para atuar na área de programação.'
}

var about = [
    {
        'name': 'Escolaridade',
        'icon': 'graduation-cap.png',
        'info': 'Cursando Ensino Superior'
    },
    {
        'name': 'Instituição',
        'icon': 'school.png',
        'info': 'Instituto Federal de SP - Guarulhos'
    },
    {
        'name': 'Curso',
        'icon': 'book.png',
        'info': 'Análise e Desenvolvimento de Sistemas'
    }
]

var tech = [
    {
        'name':     'HTML',
        'icon':     'html.png',
        'level':    'Intermediário',
        'progress': '80%'
    },
    {
        'name':     'CSS',
        'icon':     'css.png',
        'level':    'Intermediário',
        'progress': '70%'
    },
    {
        'name':     'Javascript',
        'icon':     'javascript.png',
        'level':    'Iniciante',
        'progress': '40%'
    },
    {
        'name':     'PHP',
        'icon':     'php.png',
        'level':    'Iniciante',
        'progress': '40%'
    },
    {
        'name':     'NodeJS',
        'icon':     'nodejs.png',
        'level':    'Iniciante',
        'progress': '30%'
    },
    {
        'name':     'MySQL',
        'icon':     'mysql.png',
        'level':    'Intermediário',
        'progress': '50%'
    }
]

var contact = [
    {
        'name':  'E-mail',
        'info':  'seikinagaishi@gmail.com',
        'icon':  'mail.png'
    },
    {
        'name':  'Whatsapp',
        'info':  '+055 (11) xxxx-xxxx',
        'icon':  'whatsapp.png'
    },
    {
        'name':  'Localização',
        'info':  'Guarulhos, SP',
        'icon':  'location.png'
    }
]

var link = [
    {
        'name': '',
        'link': ''
    },
    {
        'name': '',
        'link': ''
    },
]



// Tabs
let btnAbout    = document.querySelector('#about')
let btnTechs    = document.querySelector('#techs')
let btnContact  = document.querySelector('#contact')
var infoArea    = document.querySelector('#info')



// Setup
document.getElementsByTagName('title')[0].innerText = 'Github | ' + user.name
document.querySelector('#logo').innerText = user.name

loadContent('about')
loadContent('link')



// Button Events
btnAbout.addEventListener('click', () => {
    infoArea.innerHTML = ''
    selectTab(btnAbout)
    loadContent('about')
    loadContent('link')
})

btnTechs.addEventListener('click', () => {
    infoArea.innerHTML = ''
    selectTab(btnTechs)
    loadContent('tech')
})

btnContact.addEventListener('click', () => {
    infoArea.innerHTML = ''
    selectTab(btnContact)
    loadContent('contact')
})



// Functions
function selectTab(tab) {
    if( tab.className == 'option' ) {
        document.querySelector('.option-selected').className = 'option'
        tab.className = 'option-selected'
    }
}

function loadContent(content) {
    let title
    let structure
    let paragraphs = null

    switch(content) {
        case 'about':
            title       = user.name
            structure   = getAboutElements()
            paragraphs  = [user.bio]
            break

        case 'tech':
            title       = 'Nível de Conhecimento'
            structure   = getTechElements()
            break

        case 'contact':
            title       = 'Informações'
            structure   = getContactElements()
            break

        case 'link':
            title       = 'Mini Projetos com Github Page'
            structure   = getLinkElements()
    }

    generateContent(title, structure, paragraphs)
}

function generateContent(title, structure, paragraphs = null) {
    let containerElement = generateContainer()
    infoArea.appendChild( containerElement )

    let listOfInfoElements = structure

    let aboutElements = generateInfoBox(title, listOfInfoElements)
    for(element of aboutElements) {
        containerElement.appendChild(element)
    }

    if(paragraphs) {
        for(text of paragraphs) {
            let pElement = document.createElement('p')
            pElement.className = 'container-text'
            pElement.innerText = text

            containerElement.appendChild(pElement)
        }
    }
}


// getStructure
function getAboutElements() {
    let listOfInfoElements = []
    for(item of about) {
        let infoElement = document.createElement('div')
        infoElement.className = 'container-info'

        let iconElement = document.createElement('img')
        iconElement.className = 'container-info-icon'
        iconElement.src = 'img/icon/' + item.icon
        iconElement.alt = item.name

        let textElement = document.createElement('p')
        textElement.className = 'container-info-text'
        textElement.innerText = item.info

        infoElement.appendChild(iconElement)
        infoElement.appendChild(textElement)

        listOfInfoElements.push(infoElement)
    }

    return listOfInfoElements
}

function getTechElements() {
    let listOfInfoElements = []

    for(item of tech) {
        let infoElement = document.createElement('div')
        infoElement.className = 'container-tech'

        let iconElement = document.createElement('img')
        iconElement.className = 'container-tech-icon'
        iconElement.src = 'img/icon/' + item.icon
        iconElement.alt = item.name

        let textElement = document.createElement('p')
        textElement.className = 'container-tech-text'
        textElement.innerText = item.name

        // Skill Bar
        let skillBarElement = document.createElement('div')
        skillBarElement.className = 'skill-bar'

        let skillProgressElement = document.createElement('div')
        skillProgressElement.className = 'skill-bar-fill'
        skillProgressElement.style.width = item.progress

        let skillDescriptionElement = document.createElement('p')
        skillDescriptionElement.className = 'skill-title'
        skillDescriptionElement.innerText = item.level

        skillBarElement.appendChild(skillProgressElement)
        skillBarElement.appendChild(skillDescriptionElement)
        // 

        infoElement.appendChild(iconElement)
        infoElement.appendChild(textElement)
        infoElement.appendChild(skillBarElement)

        listOfInfoElements.push(infoElement)
    }

    return listOfInfoElements
}

function getContactElements() {
    let listOfInfoElements = []

    for(item of contact) {
        let infoElement = document.createElement('div')
        infoElement.className = 'container-info'

        let iconElement = document.createElement('img')
        iconElement.className = 'container-info-icon'
        iconElement.src = 'img/icon/' + item.icon
        iconElement.alt = item.name

        let textElement = document.createElement('p')
        textElement.className = 'container-info-text'
        textElement.innerText = item.info

        infoElement.appendChild(iconElement)
        infoElement.appendChild(textElement)

        listOfInfoElements.push(infoElement)
    }

    return listOfInfoElements
}

function getLinkElements() {
    let listOfInfoElements = []

    for(item of link) {
        let infoElement = document.createElement('div')
        infoElement.className = 'container-info'

        let linkElement = document.createElement('a')
        linkElement.className = 'container-info-link'
        linkElement.innerText = item.name
        linkElement.href = item.link

        infoElement.appendChild(linkElement)

        listOfInfoElements.push(infoElement)
    }

    return listOfInfoElements
}

// Utils
function breakline() {
    let brElement = document.createElement('div')
    brElement.className = 'br'
    return brElement
}

function generateContainer() {
    let containerElement = document.createElement('div')
    containerElement.className = 'container'
    return containerElement
}

function generateInfoBox(title, elements) {
    let titleElement = document.createElement('h1')
    titleElement.className = 'container-title'
    titleElement.innerText = title

    let infoAreaElement = document.createElement('div')
    infoAreaElement.id = 'container-info-area'

    for(element of elements) {
        infoAreaElement.appendChild(element)
    }

    return [titleElement, infoAreaElement]
}