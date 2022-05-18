// let newPost= {
//     postImg: imgxxx  
//     name: 'Pedro',
//     lastname : 'Sola', 
//     date: '13 de Mayo', ------->BIBLIOTECA DE FECHA
//     postText: 'Saludos coordiales con mayonesa',
//     hashtags:[ {
//         tag1: 'ventaneando',
//         tag2:'chisme'
//     }],
//     reactions: '1000 reactions',
//     comments: ['500 comments',]      //arreglo de objetos donde cada objeto serúa u comnetario//
                                        //Agregar casi misma estructura de post a los nuevos comentarios//

//     read: '6 mins ago',------> hora de publicacipn menos hora actual


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
                    
                    remotePostList.push(response[property])
                }

                console.log(remotePostList)
                renderCointainersPosts(remotePostList)
                renderCointainersPosts2(remotePostList.reverse())
            
            }
        }
    });

    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
    
};
onGetRequest();

//Función para generar todos los post en el home//
let okPostsList=[]


const createPostsList= (postLista,index) =>{
//se llaman las etiquetas para organizar el contenido de acuerdo a estilos//
    let divMaestro=document.createElement('div')
    divMaestro.classList.add('col')
    divMaestro.classList.add('col-12')
    divMaestro.classList.add('col-xs-12')
    divMaestro.classList.add('col-sm-12')
    divMaestro.classList.add('col-md-9')
    divMaestro.classList.add('col-lg-9')
    divMaestro.classList.add('col-xl-6')
    divMaestro.classList.add('col-xxl-6')



    let divRow=document.createElement('div')
    divRow.classList.add('row')
    let divUserImg=document.createElement('div')
    divUserImg.classList.add('col')
    divUserImg.classList.add('col-2')
    divUserImg.classList.add('col-md-2')
    let divUserName=document.createElement('div')
    divUserName.classList.add('col')
    divUserName.classList.add('col-8')
    divUserName.classList.add('col-md-10')
    let h6postUserName=document.createElement('h6')
    let postDate=document.createElement('p')
    
    let divPostTitle=document.createElement('div')
    divPostTitle.classList.add('col')
    divPostTitle.classList.add('col-8')
    divPostTitle.classList.add('col-md-10')
    let h3postTitle=document.createElement('h3')
    //faltarían los divs de hashtags//
    let divInteractions=document.createElement('div')
    divInteractions.classList.add('col')
    divInteractions.classList.add('col-7')
    divInteractions.classList.add('col-md-6')
    let spanReactions = document.createElement('span')
    let spanComments = document.createElement('span')

    let divRead=document.createElement('div')
    divRead.classList.add('col')
    divRead.classList.add('col-4')
    divRead.classList.add('col-md-3')
    let spanRead = document.createElement('span')

    let divMasterPostList=document.querySelector('#homePosts')

    let userName = document.querySelector('.userNamePost');
    let date = document.querySelector('.postDate');
    const title = document.querySelector('.postTitle')//falta de agregar a objeto
    const hashtagsGroup = document.querySelector('.hashtagGroup')
    const commentsQty = document.querySelector('.postComments')
    const reactionsQty = document.querySelector('.postReactions')
    const timeRead = document.querySelector('.postRead');
    const divContainer = document.createElement('div')


    
    postInfo={
    // etsamos creando un objeto con lo que recibimos del servidor//
    //se debería guardar en un generador de objeto y mandarlo a un array?//
    //de esa manera podemos ejecutar una función que renderice ese array en el DOM//
    userName:`${postLista.name} ${postLista.lastname}`,
    date:postLista.date,
    title:postLista.title,
    hashtagsGroup: postLista.hashtags,
    commentsQty: postLista.comments,
    reactionsQty: postLista.reactions,
    timeRead: postLista.read,
    }
    okPostsList.push(postInfo)
    console.log(okPostsList)
    
    
    okPostsList.forEach((singlePostInfo)=>{
        userName.textContent=singlePostInfo.userName
        date.textContent=singlePostInfo.date
        title.textContent=singlePostInfo.title
    // hashtagsGroup.textContent=singlePostInfo.hashtagsGroup[1]
        commentsQty.textContent=singlePostInfo.commentsQty
        reactionsQty.textContent=singlePostInfo.reactionsQty
        timeRead.textContent=singlePostInfo.timeRead
        
    })

    okPostsList.forEach((singlePostInfo)=>{
        
        
    })
    
    
}
//*****esta es la lista renderizada buena*****//
const renderRemoteList=(listaposts)=>{
    let divMaestro=document.createElement('div')
    divMaestro.classList.add('col')
    divMaestro.classList.add('col-12')
    divMaestro.classList.add('col-xs-12')
    divMaestro.classList.add('col-sm-12')
    divMaestro.classList.add('col-md-9')
    divMaestro.classList.add('col-lg-9')
    divMaestro.classList.add('col-xl-6')
    divMaestro.classList.add('col-xxl-6')

    let divRow=document.createElement('div')
    divRow.classList.add('row')
    divRow.classList.add('secondPost')
    let divUserImg=document.createElement('div')
    divUserImg.classList.add('col')
    divUserImg.classList.add('col-2')
    divUserImg.classList.add('col-md-2')
    let imgLabel = document.createElement('img')
    imgLabel.classList.add('userImgn')

    //****Aquí se debe crear una imagen de perfil random *//
    imgLabel.setAttribute('src',listaposts.userImg)

    let divUserName=document.createElement('div')
    divUserName.classList.add('col')
    divUserName.classList.add('col-7')
    divUserName.classList.add('col-md-7')
    divForDelButton=document.createElement('div')
    divForDelButton.classList.add('col')
    divForDelButton.classList.add('col-3')
    divForDelButton.classList.add('col-md-3')
    let delButton = document.createElement('button')
    
    delButton.setAttribute('class','deleteButton')
    delButton.textContent='Delete'
    let h6postUserName=document.createElement('h6')
    let anchorUsername= document.createElement('a')
    anchorUsername.setAttribute('href','/')
    let postDate=document.createElement('p')
    
    let divPostTitle=document.createElement('div')
    divPostTitle.classList.add('col')
    divPostTitle.classList.add('col-8')
    divPostTitle.classList.add('col-md-10')
    let h3postTitle=document.createElement('h3')
    let anchorPostTitle = document.createElement('a')
    anchorPostTitle.setAttribute('href','./postView.html')
    anchorPostTitle.setAttribute('id','titleLink')

    let divHashtags = document.createElement('div')
    let spanTag = document.createElement('span')// este span se agrego para la segunda iteración de objetos
    let hashtagList = listaposts.hashtags ||[]
    
    console.log(listaposts.hashtags)
    console.log(hashtagList)
    
    
    let divInteractions=document.createElement('div')
    divInteractions.classList.add('col')
    divInteractions.classList.add('col-8')
    divInteractions.classList.add('col-md-8')
    let spanReactions = document.createElement('span')
    spanReactions.classList.add('reactionsTexts')
    spanReactions.classList.add('interactionsSpan')
    let svgReactions = document.createElement('img')
    svgReactions.classList.add('interactionsIcons')
    svgReactions.setAttribute('src','./img/heart.svg')
    let spanComments = document.createElement('span')
    spanComments.classList.add('reactionsTexts')
    spanComments.classList.add('interactionsSpan')
    let svgComments = document.createElement('img')
    svgComments.classList.add('interactionsIcons')
    svgComments.setAttribute('src','./img/chat.svg')

    let divRead=document.createElement('div')
    divRead.classList.add('col')
    divRead.classList.add('col-4')
    divRead.classList.add('col-md-4')
    divRead.classList.add('reactionsTexts')
    let spanRead = document.createElement('span')

    let btnSave = document.createElement('button')
    btnSave.classList.add('saveButton')
    

    let divMasterPostList=document.querySelector('#homePosts')


    //Vieja iteración para primer estructura de datos//
    let hashtagArray = []
        // hashtagList.forEach((tags)=>{
        //     index++
            
        //     let spanTag = document.createElement('span')
        //     spanTag.textContent = `# ${tags.tag1}`
            
        //     divHashtags.appendChild(spanTag)
        // })

    //Aquí termina la iteración de la primer estrutura de datos

    //**********Función para iterar los nuevos hashtags************//
    hashtagList.forEach((tags)=>{
          hashtagArray.push('#'+tags)
    })
      console.log(hashtagArray)
    

    anchorUsername.textContent = `${listaposts.name} ${listaposts.lastname}`
    postDate.textContent =listaposts.date

    anchorPostTitle.textContent=listaposts.title

    spanTag.textContent = hashtagArray

    spanReactions.textContent = listaposts.reactions
    spanComments.textContent = listaposts.comments

    spanRead.textContent=listaposts.read

    btnSave.textContent="save"
    divUserImg.appendChild(imgLabel)
    h6postUserName.appendChild(anchorUsername)
    divUserName.appendChild(h6postUserName)
    divUserName.appendChild(postDate)

    divForDelButton.appendChild(delButton)

    divHashtags.appendChild(spanTag)//agregamos el contenido al hastag

    h3postTitle.appendChild(anchorPostTitle)
    divPostTitle.appendChild(h3postTitle)
    divInteractions.appendChild(svgReactions)
    divInteractions.appendChild(spanReactions)
    divInteractions.appendChild(svgComments)
    divInteractions.appendChild(spanComments)

    divRead.appendChild(spanRead)
    divRead.appendChild(btnSave)


        
    //Aquí deberíamos empezar a asignar datos a las etiquetas creadas más arriba//
    divRow.appendChild(divUserImg)
    divRow.appendChild(divUserName)
    divRow.appendChild(divForDelButton)
    divRow.appendChild(divPostTitle)
    divRow.appendChild(divHashtags)
    divRow.appendChild(divInteractions)
    divRow.appendChild(divRead)
    console.log(divRow)
    divMasterPostList.appendChild(divRow)
    
   
   
}
const renderCointainersPosts2 = (remotePostList)=>{
    // while (divContainer){}
   
    remotePostList.forEach((postLista,index)=>{
      renderRemoteList(postLista,index)
    })

}


const renderCointainersPosts = (remotePostList)=>{
    // while (divContainer){}
   
    remotePostList.forEach((postLista,index)=>{
        createPostsList(postLista,index)
    })

}



