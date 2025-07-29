setInterval(() => {
    const element = React.createElement('div',null, React.createElement('div',null,'Hello FNS !!!'),
                                                    React.createElement('div',null, React.createElement('input', {type:'text'})),
                                                    React.createElement('div',null,new Date().toLocaleTimeString()));
    ReactDOM.render(element, document.getElementById("app1"));
}, 1000)