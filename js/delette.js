
const onPostRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                onGuestRequest();
            }
        }
    });
  
    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';
  
    xhr.open('POST', URL_FIREBASE );
    xhr.send(JSON.stringify(person));
  };
  
  const onGuestRequest = () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        const personList = [];
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.response);
                console.log(response)
                for(let property in response) {
                    // console.log(response[property]);
                    const persona = {
                        id: property,
                        ...response[property],
                    }
                    personList.push(persona);
                }
  
                console.log(personList, 'personList')
                renderList(personList);
            }
        }
    });
    // spread operator 'copia' el contenido de un objeto omde una rreglo
  
    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';
  
    xhr.open('GET', URL_FIREBASE );
    xhr.send();
  };
  
    
  /*  let URL_FIREBASE = `https://pruebadevproyecto-77329-default-rtdb.firebaseio.com/.json`;
    if(idPerson) {
        xhr.open('DELETE', URL_FIREBASE );
        xhr.send();
    }; */
  
    const onDeleteRequest = (idPerson) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', () => {
          if(xhr.readyState === 4){
              if(xhr.status === 200){
                  alert(` El post de esta persona ${idPerson} fue eliminado`)
                  onGuestRequest()
               
              }
          }
      });
      let URL_FIREBASE = `https://devto-72d84-default-rtdb.firebaseio.com/posts/${idPerson}.json`;
       
      if(idPerson){
      xhr.open('DELETE', URL_FIREBASE );
      xhr.send();
      }
    };
    onGuestRequest()
    

  const button = document.querySelector('#deleteButton');
  const div = document.querySelector('div');
  
  let person = {};
  const personList = [];
  
  const createLi = (person, index) => {
      
    const button = document.createElement('button');
    button.classList.add('btn-danger');
    button.classList.add('btn');
    button.textContent = 'Eliminar'
    button.setAttribute('id', person.id)
    div.appendChild(button)
    button.addEventListener('click', (event) => {
        const removeId = event.target.id;
        onDeleteRequest(removeId)
        // renderList()
    });
  };
  
  const renderList = (personListNew) => {
    while(ul.children.length > 0) {
        ul.firstChild.remove()
    }
    personListNew.forEach((person) => {
        createLi(person)
    });
  };
  document.body.appendChild(div)