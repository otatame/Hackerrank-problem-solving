let notifCount = document.querySelector('.notification-count');

let count = null;

function unreadCount(){
    let notifParse = parseInt(notifCount.innerHTML);
    count = notifParse;
    return count;
}

function hasUnread(){
    let state = false;
    if(count <= 0){
        return state;
    }else if(count > 0){
        state = true;
        return state;
    }
}

console.log(unreadCount());
console.log(hasUnread());