/* In React, properties (or "props") are like instructions or settings you give to a reusable part of a webpage 
(a "component") to tell it what to display or how to behave, allowing you to customize it easily without changing 
the component's code itself. Example: you have a pre-made button, and you want to change its color, text, or size. 
Instead of changing the button's code, you simply provide the button with "props" (like "color: blue," "text: 
Click Me," "size: large") that tell it how to look and act. */

import { useState } from "react";

/* Using these properties to pass data to our component */
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  /* We create an array of items because writing static <li> items is repetitive/pretty useless. That's why it's important to write items dynamically. In PHP, we can use for loops, but we cannot in JS. In JS, arrays have a method called mapping. we use items.map
items.map((item) => <li>{item}</li>); */

  // useState is known as a hook. A hook is function that allows us to tap into built in features in react.
  const [selectedIndex, setSelectedIndex] = useState(-1); // setting this to -1 means no item is selected. Setting this to 0 would mean that the first item is selected

  // Sometimes we want to render different content based on certain conditions
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map(
          (
            item,
            index // Adding Index in this parameter, will tell you the number of the item
          ) => (
            // each child in list should have unique key property to identify the element
            // in a real world scenario, each item will have a key property and id. {item.id}
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}
export default ListGroup;
