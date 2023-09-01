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


    data.data.forEach((post)=>{
        console.log(post);
        const cardContainer=document.getElementById('card-container');
        const div= document.createElement('div');
        div.innerHTML=`
        <div class="card w-auto bg-base-100 shadow-xl">
        <figure><img src="${post.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${post.title}
          </h2>
          <div class="card-footer flex justify-between mt-6 gap-3">
            <div class="w-10 rounded-full">
              <img src="${post.authors[0]?.profile_picture}" alt="">
            </div>
            <p class="my-2">${post?.authors[0].profile_name}</p>
          </div>
          <p class="mx-12"> verified: ${post.authors[0].verified}  </p>
         
          <div class="card-actions justify-start mx-10">
            <p></p>
            
          </div>
          <p class="mx-10">${post.others.views} views</p>
         
        </div>
      </div>
        `;
        cardContainer.appendChild(div);

    })

    }


handleCategory();