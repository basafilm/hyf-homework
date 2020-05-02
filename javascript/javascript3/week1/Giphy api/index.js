
let myKey="n3YDsd2r2uEPaLSQTTUbEYv3kr4uvA9I"
window.addEventListener('DOMContentLoaded', find) 
function find(){
document.getElementById('btnSearch').addEventListener('click', event =>{
    event.preventDefault();
    let searchUrl = `https://api.giphy.com/v1/stickers/search?api_key=${myKey}&q=`
    let searchInput =document.getElementById('search').value.trim();
    searchUrl=searchUrl.concat(searchInput);
    //console.log(searchUrl)
    fetch(searchUrl)
    .then(response=> response.json())
    .then(result =>{
      let fig =document.createElement('figure');  
      let image =document.createElement('img');
      let caption= document.createElement('figcaption');
      image.src = resulte.data[1].images.downsized.url;
      image.alt = resulte.data.title;
      image.style.width= '480px';
      caption.textContent =result.data[1].title;
      fig.appendChild(image);
      fig.appendChild(caption);
      let outPut = document.querySelector('.out');
      outPut.insertAdjacentElement('afterbegin', fig);

    //console.log(result)
    })
    .catch(err=>{
console.error(err);
});
});
};
