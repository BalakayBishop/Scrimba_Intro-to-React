1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?
   React will place them in the DOM node that was instantiated when we call createRoot and passed the document.selectElementById()


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
React and JSX would compose this h1 element into a plain JavaScript object with custom properties.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
There are two sibling elements without a single parent element. JSX does not allow us to render more than one element at a time. Therefore, if we wanted to render these two elements we would need to place them within a single parent element, like a div

4. What does it mean for something to be "declarative" instead of "imperative"?
- Declarative means that we are telling something what to do, but not how to do it. It is as if we were to be at a restaurant and asked the host(ess) to be seated at table. We trust that the host(hess) will know where, when, and how to seat us.
- On the other hand, imperative means that we are teling something what to do and how to do it. In the same example of being at a restaurant, instead of telling the host(ess) we want a table for 4 and letting them take us, we would need to tell them a table for 4 and then instruct them when to seat us, where to seat us, and how to get us to the table.


5. What does it mean for something to be "composable"?
   For something to be composable, it means that it can be created with reusable and interchangeable 'pieces' that can be combined in various ways to achieve the end result.

-- 

1. What is a React component?
   A React component is small piece of JSX code that is composed within a function that can then be called and reused when desired.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
the name of the function should be MyComponent

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
The way that the component function is being called is incorrect and should be within a self-closing bracket, <Header />