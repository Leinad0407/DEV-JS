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
const onGeneratePost= (typedPost)=>{
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
    xhr.send(JSON.stringify(typedPost));

}

const sendPost=(postContent)=>{
    let post = {}
    let titlePost = document.querySelector('#titlePost').value
    
    let body = document.querySelector('#bodyPost').value
    let d = new Date();
    let year = d.getFullYear();
    let month =d.getMonth()+1;
    let day = d.getDate();

    let fecha = `${year} / 0${month}/${day}`
    post.name = 'Pantuflito'
    post.lastname = 'González'
    post.title = titlePost
    post.postText=body
    post.date=fecha
    post.read= '6 minutes'

    let clickhash = document.querySelectorAll('.dropdown-item')
    

    let comments = '15 comments'
    post.comments = comments
    let reactions = '10 reactions'
    post.reactions=reactions

    

    

    console.log(post)
    // onGeneratePost(postInfo)
    // clickPublish(post)
    onGeneratePost(post)
}


   
const clickPublish=(post)=>{
    let pubBtn = document.querySelector('#pubBtn')
    
    pubBtn.addEventListener('click',()=>{
        sendPost()
        
        console.log('si jala')
        console.log(post)
        
        
    })
}
clickPublish()