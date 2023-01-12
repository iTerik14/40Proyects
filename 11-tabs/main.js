const menu = document.querySelector('.about_menu');
const menus = document.querySelectorAll('.child');

const about = {
    history: "history Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus doloremque nesciunt ipsa, quas dolore consequatur molestiae blanditiis, commodi inventore optio fugit ducimus tempore aperiam ipsam maxime in velit, id omnis? Facilis similique blanditiis, omnis, qui enim sunt tempora accusamus autem nobis harum aspernatur perferendis voluptatum molestiae repellendus quia reiciendis. Ex quas nemo dignissimos harum error, fugit enim eius rem molestiae.",

    vision: "visiom Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus doloremque nesciunt ipsa, quas dolore consequatur molestiae blanditiis, commodi inventore optio fugit ducimus tempore aperiam ipsam maxime in velit, id omnis? Facilis similique blanditiis, omnis, qui enim sunt tempora accusamus autem nobis harum aspernatur perferendis voluptatum molestiae repellendus quia reiciendis. Ex quas nemo dignissimos harum error, fugit enim eius rem molestiae.",

    goals: "goals Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus doloremque nesciunt ipsa, quas dolore consequatur molestiae blanditiis, commodi inventore optio fugit ducimus tempore aperiam ipsam maxime in velit, id omnis? Facilis similique blanditiis, omnis, qui enim sunt tempora accusamus autem nobis harum aspernatur perferendis voluptatum molestiae repellendus quia reiciendis. Ex quas nemo dignissimos harum error, fugit enim eius rem molestiae."
}

menu.addEventListener('click', e => {
    let ab = e.target;
    menus.forEach(elem => {
        elem.classList.remove('child_activo')
    })
    ab.classList.toggle('child_activo')
    let about_con = document.querySelector('.about_content h3');
    about_con.innerHTML = ab.textContent;

    let captur = ab.textContent;
    console.log(captur);
    pintarConte(captur)
})

function pintarConte(ca){
    const con = document.querySelector('.about_content p');
    for (const key in about) {
        console.log(key);
        if(key === ca.toLowerCase()){
            con.innerHTML = about[key];
        }
    }
}