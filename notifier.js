
let permissionStatus = Notification.permission;
console.log("Notifications permission status is: " + permissionStatus);

switch (permissionStatus) {
	case "default":
		console.log("User has not been asked about notifications yet!");
		break;
	case "granted":
		console.log("User has given us permission to create notifications!");
        setTimeout(() => {
            let newNotification = new Notification("Example notification", {
                body: "Ding dong!"
            });

            // If we click on the notification pop up, focus or jump to the browser tab that caused it:
			newNotification.addEventListener("click", (event) => {
				window.focus();
			})
            
        }, 5000);
		break;
	case "denied":
		console.log("User said no.");
		break;
	default:
		console.log("Something went wrong with Notification permissions.");
		break;
}

/*

function().then(something Else with the result of the first function).catch(error => do something with an error)

*/

function askNotificationPermission(){
    Notification.requestPermission().then(result => {
        console.log("User said: " + result);
        permissionStatus = result;
    });
}