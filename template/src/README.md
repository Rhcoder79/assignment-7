
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 Ans:JSX is javaScript XML,it helps to write html code and also help to make component where we can write multiple code as a component we use for UI Library.
 - What is the difference between State and Props?
 Ans:By the help of state we can manage data dynamicly,
 props are passed from a parent component to a child component.
 - What is the useState hook, and how does it work?
 Ans:UseState is a hook that allows functional components to have state. wite the help of this we can update data,
 example: const [count,setCount]=useState(0); 
 - How can you share state between components in React?
 Ans:the most common way is lifting state up,where the state moved of the nearest common parent component and then passed down via props.
 - How is event handling done in React?
Ans:in react,event handlers are written in camelCase like onClick, onChange and passed as function references rather than string
example: <button onClick={handleClick}>click here</button>







