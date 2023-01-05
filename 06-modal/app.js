const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')

openModal.addEventListener('click', ()=>{
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})