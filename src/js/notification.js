import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core'; 


export default
    function onAlertNotification() {  
 
    error({       
        text: 'Too many matches found. Please enter a more specific query!',   
        delay: 1000,
        });
}