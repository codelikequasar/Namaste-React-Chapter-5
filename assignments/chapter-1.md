## Namaste React Course by Akshay Saini
# _Chapter 01_ Inception

Q1. What is Emmet?
Ans. Emmet is a free add-on or plug-in for text editor like visual studio code. 
    It allows to type shortcuts that are then expanded into full pieces of code.

Q2. Difference between a Library and Framework?
Ans. 
*Framework*
    1. Provides ready to use tools, standards, templates and policies for fast applications development.
    2. The framework controls calling of libraries for our code.   
    3. Helps us to develop a software application quickly.   

*Library*
    1. Provides reusable function for our code.
    2. Our code controls when and where to call a library.
    3. Help us to reuse a software function

Q3. What is CDN? Why do we use it?
Ans. A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery       of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way. The mission of a CDN is to reduce latency. 

Q4. Why is React known as React?
Ans.1. React is named React because of its ability to "react" to changes in data and it was designed to be a declarative, efficient, 
    and flexible JavaScript library for building user interfaces. 
    2. React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

Q5. What is crossorigin in script tag?
Ans. The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. 
    It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
    *If you serve React from a  CDN, we recommend to keep the crossorigin attribute set: <script crossorigin src="..."></script>*
    Syntax -> <script crossorigin="anonymous|use-credentials">

Q6. What is difference between React and ReactDOM?
Ans. React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.
    *After Installing react and react-dom then we will use above import in our code.
    Import React from "react";
    Import ReactDOM from "react-dom/client";
    *

Q7. What is difference between react.development.js and react.production.js files via CDN?
Ans. Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is build several times (maybe 3-5x) slower than the production build.
*OR*
The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine

Q8. What is async and defer? - see my Youtube video https://www.youtube.com/watch?v=IrHmpdORLu8)
Ans. Async - The async attribute is a boolean attribute. 
    The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.
    Syntax ->  <script src="demo_async.js" async></script>

    Defer - The defer attribute is a boolean attribute. 
    The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. 
    Instead, the browser will continue to process the HTML, build DOM.
    Syntax -> <script src="demo_defer.js" defer></script>

    *OR*
    Async allows your script to run as soon as it's loaded, without blocking other elements on the page. 
    Defer means your script will only execute after the page has finished loading.

