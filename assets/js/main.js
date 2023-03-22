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
        photo: '',
    },
    {
        name: 'Alegandro',
        role: 'Almost god aimer',
        photo: '',
    },
    {
        name: 'Lookas',
        role: 'Bot a pedali',
        photo: '',
    },
    {
        name: 'Kolen',
        role: 'Stella nascente',
        photo: '',
    },
    {
        name: 'Paolino',
        role: 'Motivatore',
        photo: '',
    },
    {
        name: 'Giamma',
        role: 'Bot senza pedali',
        photo: '',
    },
]

console.log(teamMembers);

for (let i = 0; i < teamMembers.length; i++) {
    const teamMember = teamMembers[i];
    console.log(teamMember);
    
}