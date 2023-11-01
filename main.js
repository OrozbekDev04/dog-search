let row = document.querySelector('.row'),
    btn = document.querySelector('.search-btn'),
    input = document.querySelector('.input'),
    error = document.querySelector('.error');
    emptyBosh = document.querySelector('.empty-bosh')

btn.addEventListener('click',()=>{
    fetch(`https://dog.ceo/api/breed/${input.value}/images`)
        .then(res => res.json())
        .then(data =>{
             console.log(data.message)
             row.innerHTML =''
            if (data.message === "Breed not found (master breed does not exist)"){
                error.style.display = 'block'
            } else {
                error.style.display = 'none'
                data.message.map(el => {
                    row.innerHTML += `
                <div class="d-flex col-4 my-5">
                    <img src="${el}" alt="img" class="img">
                </div>    
                `
                })
            }
        })

})


if (input.length !== 0){
   emptyBosh.style.display = 'block'
}else   {
emptyBosh.style.display = 'none'
}