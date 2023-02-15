## Namaste React Course by Akshay Saini
# _Chapter 03_ - Laying the Foundation

## Q: What is JSX?
A:  JSX is a html light syntax but not an HTML inside JavaScript.
Example :- (React Element)
    const heading = (
        <h1>Namaste React</h1>;
    );    

## Q: Superpower of JSX?
A:  JSX is a html light syntax but not an HTML inside JavaScript.
    JSX => React.createElement => Object => HTML(DOM)
    JSX will create developer friendly code
    JSX provide good readability and less code.

## Q: Role of Type attribute in script tag? What options can i use there?
A: Type attribute indicates the type of script represented.
    type : module and importmap and blocking
    <script src="javascript.js" type="module"></script>


## Q: {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX
A:  {TitleComponent} calling React ELement into functionl components
    {<TitleComponent />} calling functionl components into another functionl components
    {<TitleComponent></TitleComponent>} calling functionl components into another functionl components

