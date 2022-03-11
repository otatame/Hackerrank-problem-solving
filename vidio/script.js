let notification = document.querySelector('.notification-count');
let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');

let counter = 0;

update();


btnPlus.addEventListener('click', ()=>{
    counter++;
    update();
})

btnMinus.addEventListener('click', ()=>{
    counter--;
    update();
})

function update(){
    notification.innerHTML = counter;
    console.log(notification.innerHTML);
    if(notification.innerHTML == 0){
        btnMinus.disabled = true;
    }else{
        btnMinus.disabled = false;
    }
    unreadCount();
}

function unreadCount(){
    let parsing = parseInt(notification.innerHTML);
    console.log(`Unread : ${parsing}`);
    console.log(hasUnread(parsing));
    return;
}

function hasUnread(num){
    let states = false;
    if(num === 0){
        return states;
    }else if(num > 0){
        states = true;
        return states;
    }
}

