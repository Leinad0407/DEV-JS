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
let randyImgArray=[
    'https://media-exp1.licdn.com/dms/image/C5603AQGE40SQL8P3_A/profile-displayphoto-shrink_800_800/0/1652484751084?e=1658361600&v=beta&t=cnENPaQqzG-tTt9lEgoH0LyMjNaqXTFuXj7vIdnUjj0',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png',
    'https://media-exp1.licdn.com/dms/image/C5603AQFWVaZZaE-kNw/profile-displayphoto-shrink_100_100/0/1606092791597?e=1658361600&v=beta&t=URm3F0zmKIYENlpxIlNuSQ0QmYwAl1I0Tn3F1aX-_Mc',
    'https://media-exp1.licdn.com/dms/image/C4E03AQHlxVyf4C0ctQ/profile-displayphoto-shrink_800_800/0/1581192531024?e=1658361600&v=beta&t=HuPHzd6qrRoZBXL_Czk0aNkwxKdp2ZhM0x0JPS15F0M',
]
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let valueNumberImg = generateRandomIntegerInRange(0, 3);


const sendPost=(postContent)=>{
    let post = {}
    let titlePost = document.querySelector('#titlePost').value
    
    let body = document.querySelector('#bodyPost').value
    let d = new Date();
    let year = d.getFullYear();
    let month =d.getMonth()+1;
    let day = d.getDate();

    let fecha = `${year} / 0${month}/${day}`
    let textName = "";
    function makeName() {
        
        let possible = "abcdefghijklmnopqrstuvwxyz";
      
        for (let i = 0; i < 5; i++)
          textName += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return textName;
      }
      
      console.log(makeName());

      let textLastName = "";
      function makeLastname() {
        
        let possible = "abcdefghijklmnopqrstuvwxyz";
      
        for (let i = 0; i < 5; i++)
          textLastName += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return textLastName;
      }
      
      console.log(makeLastname());
    post.userImg = randyImgArray[valueNumberImg]//imagen random//
    post.name = textName
    post.lastname = textLastName
    post.title = titlePost
    post.postText=body
    post.hashtags = hashtagArreglo
    post.date=fecha
    post.read= '6 minutes'

    

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

hashtagArreglo =[]
function getHashtag(){
   
    console.log(hashtagArreglo)
    let clickhash = document.querySelectorAll('.dropdown-item')
    clickhash.forEach((hashbtns)=>{
        hashbtns.addEventListener('click',(event)=>{
            if(event.target.name==='hash1'){
                console.log('jala')
                hashtag = 'Javascript'
                hashtagArreglo.push(hashtag)
                console.log(hashtagArreglo)
            }  
            if(event.target.name==='hash2'){
                hashtag = 'FrontEnd'
                hashtagArreglo.push(hashtag)
                console.log(hashtagArreglo)
            }  
            if(event.target.name==='hash3'){
                hashtag = 'BackEnd'
                hashtagArreglo.push(hashtag)
                console.log(hashtagArreglo)
            }  
            if(event.target.name==='hash4'){
                hashtag = 'CryptoBro'
                hashtagArreglo.push(hashtag)
                console.log(hashtagArreglo)
            }  
        })
       
    })
    
    
}
getHashtag()


  