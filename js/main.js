let newPost= {
    name: 'Pedro',
    lastname : 'Sola',
    date: '13 de Mayo',
    postText: 'Saludos coordiales con mayonesa',
    hashtags:[ {
        tag1: 'ventaneando',
        tag2:'chisme'
    }],
    reactions: '1000 reactions',
    comments: '500 comments',
    read: '6 mins ago',


};
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
onGeneratePost(newPost)

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
            
            }
        }
    });

    const URL_FIREBASE = 'https://devto-72d84-default-rtdb.firebaseio.com/posts.json';

    xhr.open('GET', URL_FIREBASE );
    xhr.send();
    
};
onGetRequest();



