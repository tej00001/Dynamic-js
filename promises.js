const posts = [
    { title : 'Post One', body : 'This is Post One', createdAt: new Date().getTime()},
    { title : 'Post Two', body : 'This is Post Two', createdAt: new Date().getTime()}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}


function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            
            if (!error) {
                resolve();
            }

            else {
                reject('Error: Something went wrong')
            }
        }, 2000);

    });
}

function deletePost () {
    return new Promise ((resolve,reject) => {
        setTimeout( () => {
            if (posts.length>0) {
                const lastElement=posts.pop()
                resolve(lastElement);
            }

            else {
                reject ('Array is Empty')
            }
        }, 1000);
    });
}

createPost({title : 'Post Three', body : 'This is Post Three'})
createPost({title : 'Post Four', body : 'This is Post Four'})
.then( () => {
    getPosts()
    setTimeout( () => {
    deletePost().then( () => {
        getPosts()
    }, 1000);
        deletePost().then( () => {
            getPosts()
            deletePost().then( () => {
                getPosts()
                deletePost().then( () => {
                    getPosts()
                    deletePost().then( () => {})
                    .catch( (err) => {
                        console.log('Inside catch block', err)

                    })
                })
            })
        })
    })
})

//Promise All
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>
    setTimeout(resolve,2000,'Goodbye')
)
Promise.all([promise1,promise2,promise3]).then((values) => {
        console.log(values)});
