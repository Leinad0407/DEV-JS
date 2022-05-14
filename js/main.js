// let newPost= {
//     postImg: imgxxx  
//     name: 'Pedro',
//     lastname : 'Sola',
//     date: '13 de Mayo',
//     postText: 'Saludos coordiales con mayonesa',
//     hashtags:[ {
//         tag1: 'ventaneando',
//         tag2:'chisme'
//     }],
//     reactions: '1000 reactions',
//     comments: ['500 comments',]      //arreglo de objetos donde cada objeto serúa u comnetario//
                                        //Agregar casi misma estructura de post a los nuevos comentarios//

//     read: '6 mins ago',


// };
const onGeneratePost= (newPost)=>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                xhr.response
            }
        }
    });
    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';

    xhr.open('POST', URL_FIREBASE );
    xhr.send(JSON.stringify(newPost));

}
//Aquí se debe llamar la función  on GeneratePost//

const onGetRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let remotePostList = []
                const response = JSON.parse(xhr.response);
                console.log(response)

                for(let property in response ) {
                    response[property]
                    console.log(response[property])
                    remotePostList.push(response[property])
                }

                console.log(remotePostList)
                renderCointainersPosts(remotePostList)
            
            }
        }
    });

    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
    
};
onGetRequest();

//Función para generar todos los post en el home//
const createPostsList= (post,index) =>{

    let userName = document.querySelector('.userNamePost');
    let date = document.querySelector('.postDate');
    const title = document.querySelector('.postTitle')//falta de agregar a objeto
    const hashtagsGroup = document.querySelector('.hashtagGroup')
    const commentsQty = document.querySelector('.postComments')
    const reactionsQty = document.querySelector('.postReactions')
    const timeRead = document.querySelector('.postRead');
    const divContainer = document.createElement('div')
    console.log(post)
    console.log(post.name)
    console.log(post.date)
    // etsamos creando un objeto con lo que recibimos del servidor//
    //se debería guardar en un generador de objeto y mandarlo a un array?//
    //de esa manera podemos ejecutar una función que renderice ese array en el DOM//
    userName.textContent=post.name
    date.textContent=post.date
    reactionsQty.textContent=post.reactions
    // hashtagsGroup.textContent=post.hashtags
    commentsQty.textContent=post.comments
    timeRead.textContent = post.read

    
    
    
    
    
    
    console.log(userName)
    
    divContainer.appendChild(userName)
    divContainer.appendChild(date)
    divContainer.appendChild(reactionsQty)
    // divContainer.appendChild(hashtagsGroup)
    divContainer.appendChild(commentsQty)
    divContainer.appendChild(timeRead)
    console.log(divContainer)
   
}

const renderCointainersPosts = (postList)=>{
    // while (divContainer){}
   
    postList.forEach((post,index)=>{
        createPostsList(post,index)
    })

}

document.body.appendChild(divContainer)



