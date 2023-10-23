

async function GetFilms(url){
     promice = await fetch(url);
     data = await promice.json();
     for (i of data.Search){
         val = i.imdbID;
         console.log(typeof(val));
         console.log(i);
        films.innerHTML+=`<li><div class="card" style="width: 18rem;">
        <img id ="standartImg" src="${i.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.Title}</h5>
          <p class="card-text">${i.Type}</p>
          <a onclick="ShowMore('${val}')" id="seeMoreBtn" class="btn btn-primary">See more</a>
        </div>
      </div></li>`
    }

}
page = 1 
function MakeAPI(){
    let type = $(`#typeSelect option:selected`).index();
    let title = $(`#titleInput`).val();
    let api = `http://www.omdbapi.com/?i=tt3896198&apikey=aae8472c`
    if (type == -1 && title==''){
        return api;
    }

    else if( type == 1 && title != ''){
        return api = `http://www.omdbapi.com/?apikey=aae8472c&s=${title}&type=movie&page=${page}`;
    }
    else if( type == 2 && title != ''){
        return api = `http://www.omdbapi.com/?apikey=aae8472c&s=${title}&type=series&page=${page}`;
    }
    else if( type == 3 && title != ''){
        return api = `http://www.omdbapi.com/?apikey=aae8472c&s=${title}&type=episode&page=${page}`;
    }
    
}

searchBtn.onclick = () => {
    GetFilms(MakeAPI());
}
loadMoreBtn.onclick = () => {
    page++;
    GetFilms(MakeAPI());
}
async function ShowMore (data) {
    console.log(data);
    url = `http://www.omdbapi.com/?apikey=aae8472c&i=${data}`
    promice = await fetch(url);
     data = await promice.json();
     obj = data;
    console.log(obj);
    SeeMoreDiv.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img id="infoImg" src="${obj.Poster}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">Title:       ${obj.Title}    </h5>
        <p>Type:        ${obj.Type}     </p>
        <p>Year:        ${obj.Year}     </p>
        <p>imdbID:      ${obj.imdbID}     </p>
        </div>
      </div>
    </div>
  </div>`;
  
 
}