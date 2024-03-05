const loadPosts2 = async () => {
    const res2 = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data2 = await res2.json();
    const posts2 = data2;

    displayPosts2(posts2);
}

const displayPosts2 = posts2 => {
    const latestPostContainer=document.getElementById('latest-post-container');
    
    posts2.forEach(post2 => {
        console.log(post2);


        const designation=post2.author.designation;
        const displayDesignation= designation?designation:'unknown';

        const date=post2.author.posted_date;
        const displayDate=date?date:'no publish date';

        const postCard2 = document.createElement('div');
        postCard2.classList = `card  bg-base-100 shadow-xl`;
        postCard2.innerHTML = `
        <figure><img src="${post2.cover_image}"alt="Shoes" /></figure>
         
        <div class="card-body">

            <div class="flex flex-row gap-3">
                <i class="fa-solid fa-calendar"></i>
                <p>${displayDate}</p>
            </div>
            
            <h2 class="card-title">
            ${post2.title}! 
        
            </h2>
          <p class="p text-p-color"> ${post2.description}</p>
          <div class="card-actions justify-start">
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img src="${post2.profile_image}" />
                    </div>
                </div>
            </div> 
            <div>
                <h1 class="text-h-color">${post2.author.name}</h1>
                <p class="p text-p-color">${displayDesignation}</p>
            </div>
          </div>
        </div>
    `
    latestPostContainer.appendChild(postCard2);    
    });
}
loadPosts2();