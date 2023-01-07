// console.log('person 1:shows ticket')
// console.log('person2 : shows ticket')
// const preMovie = async ()=>{
//     const promisewifebringsticket=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('ticket')
//         },2000)
//     });

//     const getpopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
//     const getcoldrink = new Promise((resolve,reject)=>resolve(`coldrink`));
//     let ticket = await promisewifebringsticket;

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: ok go inside');
//     console.log('wife: no iam hungry');

//     let popcorn = await getpopcorn;
//     console.log(`i need some ${popcorn}`);

//     let colddrink = await getcoldrink;

//     console.log(`wife : i need some ${colddrink}`)


//     return ticket;
// }
// preMovie().then((m)=>console.log(`person3: shows ${m}`));
// console.log('person4:show ticket');
// console.log('person5:shows ticket');






// // getpopcorn =promisewifebringsticket.then((t)=>{
// //     console.log('wife: i have the tickets')
// //     console.log('husband: ok go inside')
// //     console.log('wife: no iam hungry i need some popcorn')
// //     return new Promise((resolve,reject) => resolve(`${t} popcorn`));

// // })
// // const getcoldrink=getpopcorn.then((t)=>{
// //     console.log('husband: ok now go in')
// //     console.log('wife : i need some coldrink')
// //     return new Promise((resolve,reject)=>resolve(`${t} coldrink`));
// // })
// // console.log('person 4:shows ticket')
// // console.log('person5: shows ticket'):

function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("buy a car");
        })

    })
}

function plantoManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("lets plan to manali");
        },1000);
    })
}

function letscontibute(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("lets contribute");
        },2000);

    })
}
function GetfamousdestinationtoManal(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("some accident happens")
        },2000);
    })
}
async function fun1(){
    try{
        const msg1= await buycar();
        console.log(msg1)

        const msg2 = await plantoManali();
        console.log(msg2);

        const msg3 =await letscontibute();
        console.log(msg3);

        const msg4 =await GetfamousdestinationtoManal();
        console.log(msg4);
    }catch(err){
        console.log(err);
    }

}
fun1();




// buycar().then((msg)=>{
//     console.log(msg)
//     plantoManali().then((msg1)=>{
//         console.log(msg1);
//         letscontibute().then((msg2)=>{
//             console.log(msg2);
//             GetfamousdestinationtoManal().then((msg3)=>{
//                 console.log(msg3);
//             })
//         })
//     })
// })