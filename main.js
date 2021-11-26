
const card = document.querySelector('#card');
const btnOpenForm = document.querySelector('#btnOpenForm');
const form = document.querySelector('#form');
const monthSelec = document.querySelector('#monthSelec');
const yearSelec = document.querySelector('#yearSelec');
const cardNumber =  document.querySelector('.number');
const cardName =  document.querySelector('.name');
const logo =  document.querySelector('.logo');
const signature = document.querySelector('#signature');
const ccvInput = document.querySelector('#ccvInput');
const ccvCard = document.querySelector('.ccv');
const yearExpiration = document.querySelector('.year');
const monthExpiration = document.querySelector('.month');
const currentYear = new Date().getFullYear();


const showFront = ()=>{

    if (card.classList.contains('active')) {
        card.classList.remove('active')
    }
}

const showBack = ()=>{

  card.classList.add('active');
          
}


card.addEventListener('click',()=>{
    card.classList.toggle('active')
})

btnOpenForm.addEventListener('click',()=>{
    btnOpenForm.classList.toggle('active')
    form.classList.toggle('active')
})

for( i = 1; i <= 12; i++){
    insertNumber = document.createElement('option');
    insertNumber.innerHTML = i;
    monthSelec.appendChild(insertNumber);
}

for( i =  currentYear; i <= currentYear + 10; i++ ){
    insertYear = document.createElement('option');
    insertYear.innerHTML = i;
    yearSelec.appendChild(insertYear);
}


form.numberInput.addEventListener('keyup', (e)=>{
    
    logo.innerHTML = "";
    
    let valueInputNumber = e.target.value;

    form.numberInput.value = valueInputNumber
    // esta expresión regular elimina espacios en blanco
    .replace(/\s/g, "")
    // esta expresión regular elimina letras
    .replace(/\D/g, "")
    // esta expresión regular agrupa los numeros en grupos de 4
    .replace(/([0-9]{4})/g, '$1 ')
    // el metodo .trim() elimina el último espacio de una cadena de texto
    .trim();

    cardNumber.textContent = valueInputNumber;

    if (cardNumber.textContent == "") {
        
        cardNumber.textContent = "#### #### #### ####"
    }

    if (valueInputNumber[0] == 4) {
        const imgLogo = document.createElement('img');
        imgLogo.src = 'img/visa.png'
        logo.appendChild(imgLogo)
    }

    if (valueInputNumber[0] == 5) {
        const imgLogo = document.createElement('img');
        imgLogo.src = 'img/mastercard.png'
        logo.appendChild(imgLogo)
    }

    showFront();
})


form.nameInput.addEventListener('keyup', (e)=>{

    let valueInputName = e.target.value;

    form.nameInput.value  = valueInputName.replace(/\d/g, "");

    cardName.textContent = valueInputName
    signature.textContent = valueInputName

    if (cardName.textContent == "") {
        
        cardName.textContent = "LUIS PADRINO"
    }

    if (signature.textContent == "") {
        
        signature.textContent = "LUIS PADRINO"
    }

    
    
    showFront();  
})

ccvInput.addEventListener('keyup', (e) =>{

    let ccvValue = e.target.value;

    ccvInput.value = ccvValue.replace(/\D/g, "").replace(/\s/g, "")

    ccvCard.textContent = ccvValue;

    showBack()

})

yearSelec.addEventListener('change', (e)=>{

    let year = e.target.value;
    yearExpiration.textContent = year.slice(2)

    showFront();
})

monthSelec.addEventListener('change', (e) =>{

    let month = e.target.value;
    monthExpiration.textContent = month 
    
    showFront();
})


