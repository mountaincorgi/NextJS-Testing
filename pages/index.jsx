import { useState } from "react";

// components are functions that return JSX
// props must be uppercase and can be pretty much any type
function Header(props) {
  return (<h1>{`🧡 ${props.title}`}</h1>);
};

// Nesting + MAIN COMPONENT
export default function HomePage() {
  {/* [<stateVariable>, <setter>] = useState(<defaultValue>);
    state is stored within a component, unlike props (passed in)
  */}
  const [numLikes, setNumLikes] = useState(0);
  const names = ['Tom', 'Ben', 'Max'];

  {/*
    update state through setter function. Whatever is passed into
    the setter function is the new value of the state variable
  */}
  function handleClick() {
    console.log('increment like count');
    setNumLikes(numLikes + 1);
  }

  return (
    <div>
      {/* passing props (title) */}
      <Header title="React 💙" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>{numLikes}</button>
    </div>
  );
};
