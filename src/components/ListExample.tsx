import ListGroup from "./ListGroup";

function ListExample() {
  /* Use const when you're defining a variable that will not change. Use let when you want to reassign a variable */
  /* These items were passed here so that we can dynamically change the values here rather than at the component level*/
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default ListExample;
