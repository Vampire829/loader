
const usersHtml=(text)=>{
    const creatLi = document.createElement('li');
    const createA = document.createElement('a');
    createA.href ='#';
    createA.textContent=text;
    creatLi.append(createA);
    return creatLi
}

const dataCreate = document.querySelector('#data__container');



const togolLoader = ()=>{
    const loaderHtml = document.querySelector('#loader');
    const loaderAtrb = loaderHtml.hasAttribute('hidden')
    if(loaderAtrb){
       loaderHtml.removeAttribute('hidden')
    }else {
       loaderHtml.setAttribute('hidden', '')
    }
 }
 
const url='https://jsonplaceholder.typicode.com/users';
const result = () => {
    togolLoader()
    const request = fetch(url,{
        method: 'GET',
    });
    request
        .then((response) => {
            console.log(response);
            if(!response.ok){
                throw new Error('ощибка')
            }
            return response.json()
        })
        .then((todo)=>{
            console.log(todo)
            todo.forEach((element)=> {
                const elementHtml = usersHtml(element.name)
                 dataCreate.append(elementHtml)
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(()=>{
            togolLoader()
        })
}

result()