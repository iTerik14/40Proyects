let message = document.querySelector('.message_container');
let messageClear = document.querySelector('.clear');

let template = document.getElementById('template_grocery').content;

let textTask = document.querySelector('.grocery');

//botones
let btnSubmit = document.querySelector('.submitBtn');
let btnClear = document.querySelector('.clear');


let container = document.querySelector('.grocery_container');


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let text = textTask.value;
    if (text === "") {
        message.innerHTML = `<span class="message mDel">debes agregar un texto</span>`;
        quitarMessage(message);
    } else {
        crearGrocery(text);
        clearMessage();
    }

})

function quitarMessage(mess) {
    setTimeout(() => {
        mess.innerHTML = "";
    }, 1000)
}

function crearGrocery(text) {
    let cloneTemplate = template.cloneNode(true);
    let elem = cloneTemplate.querySelector('.task_item');
    elem.dataset.id = Math.floor(Math.random() * 100);
    elem.querySelector('.task_text').textContent = text;
    textTask.value = '';
    container.append(elem);
    message.innerHTML = `<span class="message mAdd">item agregado</span>`;
    quitarMessage(message);

}

function clearMessage() {
    if (container.childElementCount) {
        messageClear.innerHTML = `<span class="clearItems">Clear Items</span>`;
        return;
    }
    messageClear.innerHTML = "";
}

//borrar items

btnClear.addEventListener('click', (e) => {
    if (e.target.tagName === "SPAN") {
        container.innerHTML = "";
        message.innerHTML = `<span class="message mDel">borrando todo...</span>`
        quitarMessage(message);
        setTimeout(() => clearMessage(), 300);
    }
});



container.addEventListener('click', (e) => {
    let act = e.target;
    if (act.textContent.trim() === "delete") {
        act.parentElement.parentElement.remove();
        message.innerHTML = `<span class="message mDel">item eliminado</span>`;
        quitarMessage(message);
    }
    if (act.textContent.trim() === "edit") {
        console.log(act.parentElement.parentElement);
        editarTask(act.parentElement.parentElement)
    }
})


function editarTask(task) {
    let tEdit = task.querySelector('.task_text').textContent;
    let btnEdit = document.querySelector('.submitBtn');
    btnEdit.value = "editar";
    textTask.value = tEdit;
    btnEdit.addEventListener("click", () => {
        if (btnEdit.value === "editar") {
            console.log("editar");
        }
    })
}










