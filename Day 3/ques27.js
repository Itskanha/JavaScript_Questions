// 7. **Create and dispatch a custom event:**  
//    ```javascript
//    // Dispatches a custom event that can be listened to elsewhere in the code.
//    ```

let eventOutput = document.getElementById("eventOutput");
let triggerButton = document.getElementById("triggerButton")

let customEvent = new CustomEvent("myCustomEvent", {
    detail: {
        message : "Hello from the custom event!"
    }
})

function handleCustomEvent(event){
    eventOutput.innerHTML = event.detail.message;
}

document.addEventListener("myCustomEvent", handleCustomEvent);

triggerButton.addEventListener("click", function(){
    document.dispatchEvent(customEvent);
})
