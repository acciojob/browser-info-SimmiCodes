//your JS code here. If required.
const browserName = navigator.appName;
        const version = navigator.appVersion;
        const message = "You are using " + browserName + " version " + version;
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = message;