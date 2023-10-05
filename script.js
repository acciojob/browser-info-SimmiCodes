function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let version;

   
    if (userAgent.includes("Chrome")) {
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    }
    // Check for Firefox
    else if (userAgent.includes("Firefox")) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    }
    // Check for Safari
    else if (userAgent.includes("Safari")) {
        browserName = "Apple Safari";
        version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    }
    // Check for Edge
    else if (userAgent.includes("Edg")) {
        browserName = "Microsoft Edge";
        version = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
    }
    
    else {
        browserName = "Unknown Browser";
        version = "";
    }

    const browserInfo = `You are using ${browserName} version ${version}`;
    const browserInfoDiv = document.getElementById("browser-info");
    browserInfoDiv.textContent = browserInfo;
}


getBrowserInfo();