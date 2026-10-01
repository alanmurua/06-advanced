


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generetorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());

    const genId = idGnerator();

    const button = document.createElement('button');

    button.innerText = 'Click me';
    element.append (button);
   
    const renderButton = () => {
        const {value } = genId.next();
        button.innerText = `Click ${ value}`;
    }

    button.addEventListener('click', renderButton )
}


function* idGnerator () {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction () {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no se pueden hacer nada'

}