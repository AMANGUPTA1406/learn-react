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
React want to handle all the UI updations. If we use the javaScript we have to use many lines of code... etc...

Hooks: Methods using which the updations in UI takes place.
hooks come from library included on the top "import { useState } from 'react'"
useState is used to set the UI in the DOM.
useState(15) or useState("dacc") or etc... we can give any default value inside the useState method that will be the default value for the counter variable. 
This useState(15) returns an array containing a variable followed by a function.
for example:   let [counter,setCounter] = useState(15); 
setCounter updates the DOM with counter variable on all the places at once....Jaduu.
Whenever the setCounter function will be called the React will react and make all the DOM update with current value of its associated variable.


////////////////////// lecture 6 //////////////////
/////mostly for interview and important theory/////

reload= whole new DOM will be structured and painted.
react(creatRoot)= compares its DOM to real one and only the changes are updated in the DOM.

React Fiber
study : https://github.com/acdlite/react-fiber-architecture
1. Introduction
2. What is reconciliation
3. Scheduling -> The key points are:
4. What is a fiber?


/////////////////////lecture 7 /////////////////////

A utility-first CSS framework = tailwind CSS.
Steps:  go to tailwind website -> get started -> framework Guide -> which type of framework -> vite React
Steps: follow the given steps given -> change the content -> it searches in index file and also in the files that are in src folder.

JSX is not a regular javaScript file, class -> className, etc;

Now using tailwind we can use components and use ClassNames to give different classes of tailwind to give style as css we don't have to write whole css file for it.

We can create another folder "Components" and we can make jsx files which we want to use again and again, we will also import it to parent file.

Now different properties can be give to the different components using props.
"props" is the syntax for getting different objects to component. 
whenever we want to inject javascript into jsx return element we use "{}" currly baraces.

we can use {variable names} in place of props
If we have to pass arrays or any other type of variable we have to insert it into object first and then pass that object in an variable also placing that object in curly braces==== someObj={myArr}



/////////////////////lecture 8 /////////////////////

revisit


/////////////////////lecture 9 /////////////////////
bgChanger
<h1 style={{color: "red"}}>Hello Style!</h1> is the syntax to give styles in the react app
onClick always needs a function so, we can directly write a function inside it not nessecarily making a function outside the return. for example: onClick={()=>setColor("red")}


//////////////////////lecture 10 ////////////////////
creating a password generator


useCallback(fn, dependencies)  : Call useCallback at the top level of your component to cache a function definition between re-renders.
fn: The function value that you want to cache.
dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.
import { useCallback } from 'react';
useCallback is for optimization, otherwise we can also not use it.

the htmlFor attribute is used to get the HTML for the given HTML elements.

useEffect is a React Hook that lets you synchronize a component with an external system.
useEffect(setup, dependencies?)
setup is the function we need to execute whenever there is any ched-chad in the following dependencies.

useRef is a React Hook that lets you reference a value that’s not needed for rendering. We can access any part of the HTML in order to select or do any task
const ref = useRef(initialValue)

To copy any value in react to clipboard is "window.navigator.clipboard.writeText(password);"



//////////////////////lecture 11 ////////////////////

Creating cutom hook
They are javaScript files, so we will create Hooks folder inside the src in which we will make our custom hook
"useCurrencyInfo.js" is the hook
Custom hooks can also use built-in hooks from React.









//////////////////////lecture 12 ////////////////////
React Router DOM
Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

Link and NavLink are the two new concepts which are used from reacr Router dom .
Link is in place of <a> tag because a tag reloads the page again so what will be the point of using react.
NavLink have bit extra properties - it is used when classes have to changed so we will define className in callback. so this call back have some properties named "isActive" which shows is the mouse is on the active site. when yess we will change the classes.
className={({isActive}) =>
            `block py-2 pr-4 pl-3 
            ${isActive ? "text-orange-700 ":"text-gray-700"} 
            duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}

In Link in place of href we use to=""

//Layout.jsx file is used to keep the Header and footer always same and change the middle part. this can be done using "Outlet " which we grt froom the react router dom.
import {Outlet} from 'react-router-dom'

in the function of the layout, we write:
<Header/>
<Outlet/>
<Footer/>
Now only the Outlet will get changed.

So to render these files we will do in the main.jsx
we use a self closing tag <RouterProvider router={router}/> form the react-router-dom
Now wwe have to define the router variable :
        const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/> ,
            children: [
              {
                path: "",
                element: <Home/>
              },
              {
                path: "about",
                element: <About/>
              },
              {
                path: "contactUs",
                element: <ContactUs/>
              }
            ]
        }   
        ])   

Another method to define the router variable is as follows:
        const router = createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<Home/>} /> 
              <Route path="about" element={<About/>} />
              <Route path="contactUs" element={<ContactUs/>} />
            </Route>
          )
        )           
Here  the createRouterFromElements() is used inside which the <Route> tag is used followed by nesting in it.

Now we can accsess the Url using 
const {userId} = useParams();
userId is defined in the main.jsx path <Route path="user/:userId" element={<User/>} />
for which we get access in the User.jsx 
using useParams() form react-router-dom we can access userId.




//////////////////////lecture 13 ////////////////////
        Context Api
If we want to create a card inside another card and inside another card. let say we have Left and right navigation bars in right bar we have topCard and Bottom card. in top card it has a normal card component which wants a props username="chai". In react if we want to pass that prop then we have to pass it to all the component inside by inside. For this we use Context Api form which we need not to pass prop to all the component in order to pass it to most inside one. Context Api exist only in React.
For this we make a Global variable from where any component can take that variable.
Since it is library not a framework so naming is not that strong importance.

Apart from react we use Redux, ReduxTool-kit(RTK) for react we have react-Redux. or Zustand.

Create a new folder context-> UserContext.js its a pure java script file. now import react, declare a variable
using a method: const UserContext = React.createContext();
createContext is a provider which provides variable.
We use this UserContext as a wrapper.
Therefore all the components inside it will get access to that UseContext.

Now we have to make a Provider in Context folder. UserContextProvider

if we wrap this UserContext outside classes then all the classes inside it will get access to the UserContext Provider as a Global Variable.

We have also to make a Provider along with it. -> context->UserContextProvider.jsx
In the func give {children} as an argument, this children will contain all the classes which is to be wraped inside the <UserContext.Provider>.

Now we will create a useState Hook
We will also have to write which value is geting accessed by the components or classes.
<UserContext.Provider value={{user,setUser}}>

Now how to get the access of the created store.=>in App.jsx
we wrap this up with
 <UserContextProvider>
      <h1>Aman and react</h1>
    </UserContextProvider>
Now the access is taken.

Now in any component which is wraped inside the App.jsx should import useContext Hook.

Now we can access the function or the variable decleared in UserContext using
const {setUser} = useContext(UserContext);

THEME SWITCHER 
Default value is being added inside the context file i.e.:

export const themeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

Now appart from UserContextProvider.jsx a different file we export that thing in the same .js file using
export const ThemeProvider = ThemeContext.Provider

We also export 
export default function useTheme(){
    return useContext(ThemeContext);
}
so that we don't have to import 2 things in every component and then Wrapm the app.jsx

To take the access of which things we have to take we will do:
<ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
Now we also have to define these methods and variables what function they do.

How will the page will change the light or dark for that we have this in the app.jsx file
useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])

Make card and ThemeBtn components.
Now handle the context in the ThemeBtn file take the context variables and onChange change the theme, we have to make a event in the checkBtn.

talwind configuration: darkMode: "class"




//////////////////////lecture 14 ////////////////////
Manage Your Todos
First create the project -> make a contextAPI
Give default values nessecary

if we don't want to write return in the function we have to remove the curly braces and write the function in the same line.
















