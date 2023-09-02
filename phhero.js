const handleCategory= async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data= await res.json();
    console.log(data.data)
    const tabContainer= document.getElementById('tab-container');
    data.data. slice(0,4).forEach((category) =>{
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="displayPost('${category.category_id}')" class="btn btn-secondary">${category.category}</button>
        `;
        tabContainer.appendChild(div);
    });  

};
const displayPost= async (categoryId) =>{
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data= await res.json();
    // console.log(data.data);

  

    const cardContainer=document.getElementById('card-container');

 
    cardContainer.innerHTML="";


    const containerNotFound=document.getElementById('container_not_found');
    if(data.data.length === 0){
        cardContainer.innerHTML=`
        <div class="flex justify-center items-center"> 
        <div>
           <div class="mb-6 w-44 mx-auto">
           <img class="w-96" src="Icon.png" alt="">
           </div>
             <div>
             <h3 class="text-3xl" >Oops!! Sorry, There is no content here</h3>
             </div>
             </div>
      
      </div>
     `;
     
    
    };
  

    data.data.forEach((post)=>{
        // console.log(post);
      
        
        const div= document.createElement('div');
     
        div.innerHTML=`
        <div class="card bg-base-100 shadow-xl mt-10">
        <figure><img class="w-80 h-52" src="${post.thumbnail}"/></figure>
        <div class="card-body ">
       <div class="flex justify-start gap-4"> 
       <img class="rounded-full  w-14 h-14" src="${post.authors[0].profile_picture}"/>
        <h2 class="card-title">${post.title}</h2>
        </div>
        <div class="mx-20  ">
        <h2>${post.authors[0].profile_name}</h2>
        
        <h2 src=${post?.authors[0]?.verified?`<i class="fa-solid fa-square-check fa-xl" style="color: #0b59e0;"></i>`:""}</h2>
        
        
        <h2>${post.others.views }<span> views</span></h2>
        </div>
        </div>
      </div>
        `;
        cardContainer.appendChild(div);

    })

    };
handleCategory();
displayPost("1001");

    // // short by view handle
    // const sortByView=document.getElementById('sort-By-View');
    // const sortedData =() =>{
    //     const sortedData=data.data.sort((a,b)=>{
    //         a=a?.others?.views;
    //         a= parseFloat(a.replace("k",""));

    //         b=b?.others?.views;
    //         b=parseFloat(b.replace("k",""));
    //         return b - a;
    //     })
    //     renderCard(sortedData);
    // }
    // sortByView.addEventListener('click',sortedData)



// blog section
 const blogButton=document.getElementById('blog-btn');
 blogButton.addEventListener('click',function(){
    window.location.href="blog.html";
 });