learing react AMAN
npm - node package mannager
npx - node pakage executer

to download react "npx-> npm install create-react-app -> npx create-react-app 01basicreact"

we are using vite->react
"npm create vite@latest" where "create" is a utility

After instalation of the react or vite-react go to the package.jason file and read. see libraries and run commands. 
Now is node_modules file is not present in the folder then install it using the commond= "npm install" or "npm i".




///////////////lecture Number 3/////////////////////
React dom is the implementation of React on web, while React Native is the implementation of React on Mobile Apps.
React have its own DOM structure.
We can build custom tags in react.

similar to javaScript, React also renders the structure.

We can also remove "<React.StrictMode>" tag we will study on it further.

The index.html file although doees not contain script tags but the react-scripts gets injected automatically, we can see them on package.json file.

"const root = ReactDOM.createRoot(document.getElementById('root'));" this creates a reactDOM and its root is taken from an element from the html by getElement. After it react renders the DOM to the main page.

In vite-react the index.html file is outside and not inside the public folder and there are no scripts in the package.jason so the javaScript is directly included in the index.html file.

In vite the component should be in the .jsx file.
Also by convention we should name the Functions starting with Capital letter.

We can return only one element. so we use "<>... </>" fragments to wrap the whole code and return it.



////////////////// Lecture 4 ////////////////////////

Rendering is something about changing the DOM structure or inserting new elements... React somewhat renders the elements.
So react can render the elements in HTML form. We should pass the function that returns the HTML tag that is to be rendered in the HTML page. we use the syntax " <functionName/>" or if it is object(using createElement(//HTML elemnts) method) then it will be same.

How to return or insert the javaScript varibles in the React-HTML, using the "{xyzVariable}" currly braccess. This is called evaluated Expression and inside the curly braces only the final value will be returned we cannot use or evalute the variables.. example: if condn or for loop etc. Hence known as Evaluated Expressions.
Now expressions are inserted as it is after the innerText In the object of HTML tags.



/////////////////// lecture 5 ///////////////////////
The line break tag will be <br/> not only <br>.
React want to handel all the UI updations. If we use the javaScript we have to use many lines of code... etc...

Hooks: Methods using which the updations in UI takes place.
hooks come from library included on the top "import { useState } from 'react'"
useState is used to set the UI in the DOM.
useState(15) or useState("dacc") or etc... we can give any default value inside the useState method. 
This useState(15) returns an array containing a variable followed by a function.
for example:   let [counter,setCounter] = useState(15); 
setCounter updates the DOM with counter variable on all the places at once....Jaduu.
Whenever the setCounter function will be called the React will react and make all the DOM update with current value of its associated variable.


////////////////////// lecture 6 //////////////////








