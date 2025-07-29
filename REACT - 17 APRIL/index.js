setInterval(() => {
    const element = `
        <div>
            <div>
                <h2>Hello, FNS !!!</h2>
            </div>
            <div>
                <input type="text" placeholder="Enter your name"></input>
            </div>
            <div>
                ${new Date().toLocaleTimeString()}
            </div>
        </div>
    `;
    document.getElementById("app1").innerHTML = element;
}, 1000);