  const promise = new Promise((resolve, reject) => {
    if (Math.random() < 0.5){
        setTimeout(() => resolve('Success!'), 3000);
    }  else{
        reject(new Error('Failed!'));
    }
});
  
  promise
    .then(value => {
      console.log(value); // "Success!"
      return value + ' Chain1';
    })
    .then(value => {
      console.log(value); // "Success! Chain1"
    })
    .catch(e => console.log(e.message)); // "Failed"

    function makePromise(){
        return new Promise((resolve, reject)=> {
            if(Math.random() < 0.5){
                setTimeout(() => resolve('Success!'), 3000);
            } else{
                reject(new Error('Failed'));
            }
        });
    }

    for (let i = 0; i < 5; i++){
        makePromise()
        .then((value) => {
            console.log(value);
        })
        .catch((e) => console.log(e.message));
    }