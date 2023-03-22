/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

const teamMembers = [
    {
        name: 'Ratallo',
        role: 'God aimer',
        photo: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Alegandro',
        role: 'Almost god aimer',
        photo: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Lookas',
        role: 'Bot a pedali',
        photo: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Kolen',
        role: 'Stella nascente',
        photo: './assets/img/scott-estrada-developer.jpg',
    },
    {
        name: 'Paolino',
        role: 'Motivatore',
        photo: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Giamma',
        role: 'Bot senza pedali',
        photo: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
]

console.log(teamMembers);

for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
    console.log(teamMember);

    const rowElement = document.querySelector('.row')

    const markup = `
    <div class="col-4">
    <div class="card my-3">
    <img src="${teamMember.photo}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${teamMember.name}</h5>
        <p class="card-text">${teamMember.role}</p>
    </div>
    </div>
    </div>
`

    rowElement.innerHTML += markup
}
