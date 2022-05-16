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
//Aquí se debe llamar la función  on GeneratePost//

//CONST textArea = document.querySelector('#textArea).value

// const inputs = document.querySelectorAll('.form-control')


// let post = {};
// console.log(post)


// se le debe poner un id especifico a los text area y  guardar su valor
//como nos enseñó odon en discord

// inputs.forEach((postInfo)=>{
//     let post = {};
//     console.log(post)
//     postInfo.addEventListener('keyup',(event)=>{
//         if (event.target.name === 'title'){
//             post.title = event.target.value
//             console.log(post.title)
//     }
//         if (event.target.name === 'bodyPost'){
//             post.content = event.target.value
//             console.log(post.content)
//     }
// })
// })
const sendPost=(postContent)=>{
    let post = {}
    let titlePost = document.querySelector('#titlePost').value
    
    let body = document.querySelector('#bodyPost').value
    let d = new Date();
    let year = d.getFullYear();
    let month =d.getMonth();
    let day = d.getDate();

    let fecha = `${year} / ${month}/${day}`
    post.name = 'Pantuflito'
    post.lastname = 'González'
    post.title = titlePost
    post.postText=body
    post.date=fecha
    post.read= '6 minutes'

    let clickhash = document.querySelectorAll('.dropdown-item')
    // let clickhash2 = document.querySelector('#hash2')
    // let clickhash3 = document.querySelector('#hash3')
    // let clickhash4 = document.querySelector('#hash4')

    // clickhash.addEventListener('click',(event)=>{
    //     if (event.target.name === 'hash1'){
    //         post.hashtags = event.target.value
    //     }
    //     if (event.target.name === 'hash2'){
    //         post.hashtags = event.target.value
    //     }
    //     if (event.target.name === 'hash3'){
    //         post.hashtags = event.target.value
    //     }
    //     if (event.target.name === 'hash4'){
    //         post.hashtags = event.target.value
    //     }
        
        
    // })

    //  clickhash2.addEventListener('click',(event)=>{
    //      post.hashtags = event.target.value
    // })
    // clickhash3.addEventListener('click',(event)=>{
    //      post.hashtags = event.target.value
    // })
    // clickhash4.addEventListener('click',(event)=>{
    //      post.hashtags = event.target.value
    // })

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
    // console.log(pubBtn)
    pubBtn.addEventListener('click',()=>{
        sendPost()
        
        console.log('si jala')
        console.log(post)
        // onGeneratePost(post)
        
    })
}
clickPublish()