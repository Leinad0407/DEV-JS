
const onGetRequest = (person) => {

    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               
                const response = JSON.parse(xhr.response);
                console.log(response)
                let postInfo = response
                console.log(postInfo)
                

                
               renderPostInfo(postInfo) 
                
                
            
            }
        }
    });

    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts/-N2J_rKo9jwauaJ9zpPZ.json/';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
    
};
onGetRequest();

const renderPostInfo = (postInfo) =>{
    let divMaestroShowPost = document.querySelector('#divMaestroShowPost')
    let mostrar = document.querySelector('#divDetallesPost')

    let showUserName = document.querySelector('#divUserName')
    let showUserImg = document.querySelector('#divUserImg')
    let showPostTitle = document.querySelector('#divPostTitle')
    let showPostTags = document.querySelector('#divPostTags')
    let showPostBody=document.querySelector('#divPostBody')

    let usernameText = document.createElement('a')
    let dateText= document.createElement('p')
    let userImg = document.createElement('img')
    userImg.setAttribute('src', postInfo.userImg)
    userImg.setAttribute('id', "postImg")
    let titleText = document.createElement('h2')
    let tagsTexts =document.createElement('p')
    
    tagsTexts.textContent = postInfo.hashtags ||[]

    // tagsTexts.forEach((tag)=>{
    //     let tagText = document.createElement('a')
    //     tagText.textContent = tag
    //     showPostTags.appendChild(tagText)

    // })

    let postContent = document.createElement('p')
    postContent.textContent= postInfo.postText





    usernameText.textContent= `${postInfo.name} ${postInfo.lastname}`
    dateText.textContent=postInfo.date

    titleText.textContent=postInfo.title
    

    showUserName.appendChild(usernameText)
    showUserName.appendChild(dateText)
    showUserImg.appendChild(userImg)
    showPostTitle.appendChild(titleText)
    showPostTags.appendChild(tagsTexts)
    showPostBody.appendChild(postContent)



    // divMaestroShowPost.appendChild(showUserName)
    // mostrar.appendChild(showUserName)

}