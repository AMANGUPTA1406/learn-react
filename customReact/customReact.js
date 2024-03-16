function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerText=reactElement.children;
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.co.in/',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);