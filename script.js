
const loadPosts = async (searchText='comedy') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    console.log(data)

    displayPosts(posts);
}

// display Posts

const displayPosts = posts => {
    
    const postContainer=document.getElementById('post-container');
    postContainer.textContent='';
    posts.forEach(post => {

        const isActive = post.isActive; 
      

        const dotColor = isActive===true ? 'bg-green-500' : 'bg-red-500';
        console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `flex flex-row gap-2 p-8 bg-gray-200 rounded-2xl`;
        postCard.innerHTML = `
    <div>
                    <div class="avatar">
                        <div class="w-24 rounded-xl relative">
                            <img src="${post.image}" />
                            <div class="absolute top-0 right-0 w-5 h-5 rounded-full border-2 border-white ${dotColor}">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- post content on the right -->
                <div class="flex flex-col">
                    <!-- top -->
                    <div class="flex flex-row gap-3">
                        <div>
                            <p class="p text-h-color">#${post.category}</p>
                        </div>
                        <div>
                            <p class="capitalize p text-h-color">author:${post.author.name}</p>
                        </div>
                    </div>

                    <h1 class="h4 text-h-color">${post.title}</h1> <br>
                    <p class="p text-p-color">${post.description}
                    </p>
                    <br>
                    <hr>
                    <br>

                    <!-- bottom -->
                    <div class="flex justify-between">
                        <div>
                            <span><i class="fa-regular fa-message"></i> ${post.comment_count}</span>
                            
                            <span><i class="fa-solid fa-eye"></i> ${post.view_count}</span>
                            <span><i class="fa-solid fa-clock"></i> ${post.posted_time}</span>
                        </div>

                        <button onclick="showCount();showTitles('${post.title}');showViewers('${post.view_count}')"  class="btn rounded-full"><i class="fa-solid fa-envelope text-green-500"></i></button>
                    </div>
                </div>
    `
    postContainer.appendChild(postCard);    
    });

    toggleLoadingSpinner(false);
}


// count
let countInitial=0;
const showCount=()=>{
 const countDisplay=document.getElementById('count-display');
 countInitial +=1;
 countDisplay.innerText=countInitial
}


const showTitles=async(id)=>{
    console.log('clicked',id);
   

    
    const titleContainer=document.getElementById('title-container');
    const titleDiv=document.createElement('div');
    titleDiv.classList=`flex justify-between bg-base-100 p-2 rounded-2xl`
    titleDiv.innerHTML=`
    
    <p id="title-display" class="h4">${id}</p>
    

    `
    titleContainer.appendChild(titleDiv);

    // displayTitles();
}
const showViewers=(view)=>{
    console.log(view);
    const viewC=document.getElementById('title-container');
    const viewNumber=document.createElement('span')
    viewNumber.innerHTML=`<i  class="fa-solid fa-eye"></i>${view}`
    viewC.appendChild(viewNumber);
}




// search handle

function searchHandle() {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    loadPosts(searchText);
}




const toggleLoadingSpinner=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');

        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
        }, 2000);
    }
    
    else{
        loadingSpinner.classList.add('hidden');
    }
}


loadPosts();


