console.log('Client JS logic....');

const formDOM = document.querySelector('form');

if (formDOM) {
    const textareaDOM = formDOM.querySelector('textarea');
    const btnDOM = formDOM.querySelector('button');

    console.log(textareaDOM);
    console.log(btnDOM);
}
