import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core'; 

    
function onAlertNotification() {
        
    error({       
        text: 'Too many matches found. Please enter a more specific query!',   
        delay: 1000,
        });
}

function onAlertErrorInput() {  
 
    error({       
        text: 'Wrong name try again!',   
        delay: 1000,
        });
}

export {onAlertNotification, onAlertErrorInput}