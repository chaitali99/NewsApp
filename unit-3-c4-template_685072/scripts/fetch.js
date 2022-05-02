

let searchNews=async(value)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);

        let data= await res.json();
        return data.articles;
    }catch(err){
        console.log(err);
    }
};


let getData=async(value)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);

        let data= await res.json();
        return data.articles;
    }catch(err){
        console.log(err);
    }
}

let appendData=(data,results)=>{
    data.forEach(({urlToImage,title,description})=>{
        let box=document.createElement("div");
        box.className="news";

        let img=document.createElement("img");
        let heading=document.createElement("h3");
        let des=document.createElement("p");

        img.src=urlToImage;
        heading.innerText=title;
        des.innerText=description;

        box.onclick=()=>{
            window.location.href="./news.html";

            localStorage.setItem("news",data);
        }

        box.append(img,heading,des);
        results.append(box);

    });

    
}


export {searchNews,appendData,getData};