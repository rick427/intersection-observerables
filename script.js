//If we want to target a single element with the anim class
/********************************************************************* */
// const images = document.querySelector('.anim');

// observer = new IntersectionObserver(entries => {
//     console.log(entries);
//         if(entries[0].intersectionRatio > 0){
//             entries[0].target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
//         }
//         else{
//             entries[0].target.style.animation = 'none';
//         }
// })
// observer.observe(images);
/********************************************************************** */


//All Elements with the anim class

const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else{
            entry.target.style.animation = 'none';
        }
    })
})
images.forEach(image => {
    observer.observe(image);
})