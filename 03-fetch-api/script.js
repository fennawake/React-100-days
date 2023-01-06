
/////////// GET

// fetch('https://reqres.in/api/users/1')
// .then(res => {
//     console.log(res)
//     if(res.ok){
//         res.json()
//         console.log('Success')
//     }else{
//         console.log('Error')
//     }
// })
// .then(r => console.log(r))
// .catch((err) => console.log(err))




/////////// POST

fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Fernando',
    }),
})
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))