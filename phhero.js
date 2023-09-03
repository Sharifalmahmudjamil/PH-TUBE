
const handleCategory= async () =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data= await res.json();
    // console.log(data.data)
    const tabContainer= document.getElementById('tab-container');
    data.data. slice(0,4).forEach((category) =>{
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick="displayPost('${category.category_id}')" class="btn border-gray-300 focus:bg-red-400">${category.category}</button>
        `;
        tabContainer.appendChild(div);
    });  

};
const displayPost= async (categoryId) =>{
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data= await res.json();
    console.log(data.data);

  

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

        // TIME ZONE
        let time ="";
      const uploadedDate = post.others.posted_date/60;
    //   console.log(uploadedDate);
    const newDate = uploadedDate/60;
      const hoursConvert= Math.floor(newDate)
      const convertMint = Math.floor((newDate - hoursConvert)*60);
      console.log(hoursConvert,convertMint);

         
        const div= document.createElement('div');
     
        div.innerHTML=`
        <div class="card bg-base-100 shadow-xl mt-10 hover:bg-red-400">
        <div>
                    <figure> <img class="w-80  relative h-52" src="${post.thumbnail} "/><span class=" rounded-sm mt-40 ml-52 p-1 text-xs bg-black text-white absolute">
                    ${(hoursConvert > 0 && convertMint > 0 )? hoursConvert + 'hr' + convertMint + 'mint' :''}
                    </span></figure>
                    </div>
        
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

     // short by view
     const sortByView=document.getElementById('sort-By-View');
     const sortedData = async() => {
        const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
        const data = await res.json();
        const getData= data.data;
        const sortData=getData.sort((a,b) => parseInt(b.others?.views)-parseInt(a.others?.views));
        const cardContainer=document.getElementById('card-container');
        cardContainer.innerHTML='';
        sortData.forEach((post)=>{
            console.log(post)
            const div= document.createElement('div');
     
            div.innerHTML=`
            <div class="card bg-base-100 shadow-xl mt-10 hover:bg-red-400">
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
        

     }

handleCategory();
displayPost("1001");



// blog section
 const blogButton=document.getElementById('blog-btn');
 blogButton.addEventListener('click',function(){
    window.location.href="blog.html";
 });