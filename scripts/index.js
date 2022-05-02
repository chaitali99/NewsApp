// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import sidebar from "../components/sidebar.js";
let s=document.getElementById("sidebar");
s.innerHTML=sidebar();

import { searchNews,appendData,getData } from "./fetch.js";

let search=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("search_input").value;
        searchNews(value).then((data)=>{
                console.log(data);

                let results=document.getElementById("results");
                // results.innerHTML=null;

                appendData(data,results);

        });
    }
};

document.getElementById("search_input").addEventListener("keydown",search);

let categories=document.getElementById("categories").children;

function catSearch(){
    //console.log(this.id);
    getData(this.id).then((data)=>{
        console.log(data);

        let results=document.getElementById("results");
        // results.innerHTML=null;

        appendData(data,results);
    });
}

for(let ele of categories){
    ele.addEventListener("click",catSearch);
}

// catSearch();