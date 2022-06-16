
import { formatDistanceToNow, toDate } from 'date-fns'
import { Timestamp } from 'firebase/firestore';

// render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const when = formatDistanceToNow(
            data.created_at.toDate(),
            { addSuffix: true }
            
        );
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;
        this.list.innerHTML += html

        // console.log(formatDistanceToNow(data.created_at.toDate()));
        // console.log(data.created_at);
        // console.log(formatDistanceToNow(data.created_at.toDate()));
        
    }
    

}

export { ChatUI };