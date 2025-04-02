// function based components are more popular for new projects
// PascalCasing - Titlecase
function Message () {
    // JSX: JavaScript XML
    const name = 'Jen';
    if (name)
        //Since my name is in the single quotes, the JavaScript will return Hello Jen
        return <h1>Hello {name}</h1>;
    // If the name single quotes are empty, the JavaScript will return Hello World
    return <h1>Hello World</h1>;
}

// To use the component we need to export the default object from this file
export default Message;