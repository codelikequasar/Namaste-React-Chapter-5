## Namaste React Course by Akshay Saini
# _Chapter 05_ - Let's get Hooked!

## Q: What is the difference between Named export, Default export and * as export?
A:  Named export -> When we export the function component directly from another component with the help of 
    example (One component) -> export const ABC = () => {
        // data
    }

    (Another Component) -> import {ABC} from 'filepath';

    Default export -> When we export the function component from another component by default with the help of 
    example (One component) -> const ABC = () => {
        // data
    }
    export default ABC

    (Another Component) -> import ABC from 'filepath';


    * as export-> When we export the function component from another component by default but using as a object in imported components with the help of 
    example (One component) -> const ABC = () => {
        // data
    }
    export default ABC

    (Another Component) -> import * as XYZ from 'filepath';
    Calling in function -> <XYZ.Header/>

## Q: What is the important of config.js?
A:  config.js is a normal file which is used to store all the static content used inside the components and it will help to maintain the static code and it will avoid repetation of the code. It is a good practise to create in every project.

## Q: What are React Hooks?
A:  React Hooks is a normal function. It has a specific function of it. Import it using "react".
    1. useState() => its a function returning array function and used to create state variable
    example- > const [variablename, function to update variable(setVariableName)] = useState();


## Q: Why do we need a useState Hook?
A: Because it will help to create the 2 way data binding which will help to update the state variable using fucntion.

syntax- > const [variablename, function to update variable(setVariableName)] = useState();
