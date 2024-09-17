import React from "react";

/*const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log('Hello from component')
  // not react
  return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>{a} plus {b} is {a + b}</p>
      </div>
  )
  // react
  return React.createElement(
      'div',
      null,
      React.createElement(
          'p',null,'Hello world, it is ',now.toString()
      ),
      React.createElement('p',null,a,' plus ',b,' is ',a + b)
  )
}*/

/*const Hello = (props) => {
  return(
      <div>
        <p>Hello world les copains {props.name}, you are {props.age}</p>
      </div>
  )
}

const App = () => {
  const age = 32;
  return (
      <div>
        <h1>Grettings</h1>
        <Hello name="simon" age={age}/>
      </div>
  )
}*/

const Hello = (props) => {
  return(
      <div>
        <p>Hello world les copains {props.name}, you are {props.age}</p>
      </div>
  )
}

const App = () => {
 const friends = [
   {name:'allyson', age:21},
   {name:'nicolas',age:21}
 ];
 const tabNameFriends = ['Allyson ',' Nicoals'];
 return(
     <div>
       <Hello name='test' age={32}/>
       <p>{friends[0].name} {friends[0].age}</p>
       <p>{friends[1].name} {friends[1].age}</p>
       <p>{tabNameFriends}</p>
     </div>
 )

}

export default App