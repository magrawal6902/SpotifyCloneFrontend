 function two(){
   var arr=[
      {name:"Arijit singh",image:"https://2.bp.blogspot.com/-vTTvcAJNppc/V_iAze96DUI/AAAAAAAAEf8/I1fvPW7IlhYlKbX8CmOOrRLTyWmMkFJOQCLcB/s1600/Arijit-Singh-Latest-Wallpaper.jpg"},
 
      {name:"Kishore Kumar",image:"https://wallpapercave.com/wp/wp6752034.jpg"},
      {name:"Lata Mangeshkar",image:"https://www.masala.com/cloud/2021/08/01/Xx2JEh9f-Lata-Mangeshkar.jpg.jpg"}
     //  {name:"raftar",image:"https:images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
     //  {name:"Darshan raval",image:"https:images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
 
  ]
  var clutter="";
  arr.forEach(function(val){
  clutter=clutter+`
  
  <div class="abcd">
 <div id="image">
  <img src="${val.image}" alt="">
 </div>
  <h2>${val.name}</h2>
  <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>
  
     </div>`
 
  })
 
  document.querySelector("#left2").innerHTML=clutter
 
 
 
 var arr=[
    {name:"Darshan raval",image:"https://tse1.mm.bing.net/th?id=OIP.O4M25tAmWDdph_weafhQPQHaJQ&pid=Api&P=0"},

    {name:"gajendra verma",image:"https://www.tellychakkar.com/sites/www.tellychakkar.com/files/images/movie_image/2019/12/17/Gajendra-Verma.jpg"},
    {name:"Shreya ghoshal",image:"https://tse1.mm.bing.net/th?id=OIP.eAcOxL-Iv9k6TMVzqC1F_wHaGl&pid=Api&P=0"}
   //  {name:"raftar",image:"https:images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
   //  {name:"Darshan raval",image:"https:images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},

]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div class="abcd">
<div id="image">
<img src="${val.image}" alt="">
</div>
<h2>${val.name}</h2>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

   </div>`

})

document.querySelector("#left3").innerHTML=clutter
 }
 two();
 function three()
 {
var arr=[
   {name:"Ghoomar",image:"http://webneel.com/daily/sites/default/files/images/daily/08-2018/1-india-movie-poster-design-bollywood-padmaavat.jpg"},

   // {name:"Tanhaji",image:"https://1.bp.blogspot.com/-OV1jpl3joDY/XlYdY6JyQyI/AAAAAAAADwY/HvhNO9hsgloXiy690VpPybQfci0vwyMugCLcBGAsYHQ/s1600/890084-tanhaji-chhapaak-boxoffice-day5-2.jpg"},
   {name:"Bajirao Mastani",image:"https://tse1.mm.bing.net/th?id=OIP.sfCUIFJcYzyivOf0f7vx5wHaFo&pid=Api&P=0"},
   {name:"Bhaubali",image:"https://jfwonline.com/wp-content/uploads/2017/02/bahu-copy.jpg"},
   {name:"Manikarnika",image:"https://tse1.mm.bing.net/th?id=OIP.8YJ7JbPq_2douZgJVe9TqAHaFj&pid=Api&P=0"},
   {name:"Jodha Akbar",image:"https://tse1.mm.bing.net/th?id=OIP.A6vIInTXTuGKHLaCIE8IYgHaKs&pid=Api&P=0"}
]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div id="card">
<div id="imgg">
<img src="${val.image}" alt="">
// <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

</div>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

<h3>${val.name}</h3>
<p>Lorem, ipsum dolor.</p> 

   </div>`
})

document.querySelector(".center").innerHTML=clutter
 }
 three();

function four(){
var arr=[
   {name:"Hindi Lofi",image:"https://i.ytimg.com/vi/c6DKDu1MSeU/maxresdefault.jpg"},

   // {name:"Relax & Chill",image:"https://tse4.mm.bing.net/th?id=OIP.Yi3gdQnMsoL4eEq7MesAaQHaEK&pid=Api&P=0"},
   {name:"For You",image:"https://i.ytimg.com/vi/NRu7YMKfaP0/maxresdefault.jpg"},
   {name:"Bollywood Lofi ",image:"https://i.ytimg.com/vi/rJFYm_55wDU/maxresdefault.jpg"},
   {name:"Mann Mera",image:"https://i.ytimg.com/vi/hqrPjhlvCnI/maxresdefault.jpg"},
   {name:"Distance Apart",image:"https://i.ytimg.com/vi/kcdc-0kVVjs/maxresdefault.jpg"}
]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div id="card">
<div id="imgg">
<img src="${val.image}" alt="">
// <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

</div>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

<h3>${val.name}</h3>
<p>Lorem, ipsum dolor.</p> 

   </div>`
})

document.querySelector("#center1").innerHTML=clutter
}
four();
function five()
 {
var arr=[
   {name:"Saiyaan",image:"https://img.youtube.com/vi/TuUVVKVdZm4/maxresdefault.jpg"},

   {name:"Tum se hi",image:"https://tse4.mm.bing.net/th?id=OIP.snvGPBINOXwd-FCq6GeZzQHaHa&pid=Api&P=0"},
   {name:"Agar tum saath ho",image:"https://tse4.mm.bing.net/th?id=OIP.EaaE2PiysCroAsxPskMv1gHaKc&pid=Api&P=0"},
   {name:"Adhuri Kahani",image:"https://tse3.mm.bing.net/th?id=OIP.nAA-WxC9A-CQ90tZzG7GmAHaHa&pid=Api&P=0"},
   {name:"Kabira",image:"http://img.xcitefun.net/users/2013/03/320979,xcitefun-kabira-song.jpg"}
   // {name:"Hoor",image:"https://i.ytimg.com/vi/ioj6YBaSAyE/maxresdefault.jpg"}
]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div id="card">
<div id="imgg">
<img src="${val.image}" alt="">
// <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

</div>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

<h3>${val.name}</h3>
<p>Lorem, ipsum dolor.</p> 

   </div>`
})

document.querySelector("#center2").innerHTML=clutter
 }
 five();
 function seven()
 {
var arr=[
   {name:"Mahabharata",image:"https://wallpapercave.com/wp/wp6293337.jpg"},

   {name:"Ramayana",image:"https://tse4.mm.bing.net/th?id=OIP.G2-eL05TiDqt4CcWIVhLdQHaHa&pid=Api&P=0"},
   {name:"Chankaya niti",image:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202006/chanakya_12345_1593422075_749x421.jpeg?size=1200:675"},
   {name:"Krishn the supreme",image:"https://tse3.mm.bing.net/th?id=OIP.bV92tz69YRL5AeQfYRRCIwHaKA&pid=Api&P=0"},
   {name:"Physcology in hindi",image:"https://tse4.mm.bing.net/th?id=OIP.O5gVwTRE4Old_7DBS4LIzQAAAA&pid=Api&P=0"}
   // {name:"Hoor",image:"https://i.ytimg.com/vi/ioj6YBaSAyE/maxresdefault.jpg"}
]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div id="card">
<div id="imgg">
<img src="${val.image}" alt="">
// <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

</div>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

<h3>${val.name}</h3>
<p>Lorem, ipsum dolor.</p> 

   </div>`
})

document.querySelector("#center3").innerHTML=clutter
 }
 seven();
 function six()
 {
var arr=[
   {name:"Tu aake dekhle",image:"https://tse2.mm.bing.net/th?id=OIP.w_fhOPXNChUiUanyZC22VAHaHa&pid=Api&P=0"},

   {name:"Tum tak",image:"https://tse2.mm.bing.net/th?id=OIP.ZeDBuNFokYjfCJ1h3hTo3gHaHa&pid=Api&P=0"},
   {name:"Ram siya Ram",image:"https://tse1.mm.bing.net/th?id=OIP.Qe9l32KSLKhDbm30Z3ZsbgHaHa&pid=Api&P=0"},
   {name:"Saibo",image:"https://tse2.mm.bing.net/th?id=OIP.kafS4XfVcm4CLZFlmqxZSwHaFj&pid=Api&P=0"},
   {name:"Dil ko karar aaya ",image:"https://c.saavncdn.com/603/Dil-Ko-Karaar-Aaya-Lofi-Mix--Hindi-2022-20220217150128-500x500.jpg"}
   // {name:"Hoor",image:"https://i.ytimg.com/vi/ioj6YBaSAyE/maxresdefault.jpg"}
]
var clutter="";
arr.forEach(function(val){
clutter=clutter+`

<div id="card">
<div id="imgg">
<img src="${val.image}" alt="">
// <i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

</div>
<i id="r" class="fa-sharp fa-solid fa-circle-play" style="color:#1FDF64;"></i>

<h3>${val.name}</h3>
<p>Lorem, ipsum dolor.</p> 

   </div>`
})

document.querySelector("#center4").innerHTML=clutter
 }
 six();

 let audio=new Audio('audiio.mp3');
 let pay=document.getElementById('m');
 pay.addEventListener('click',()=>{
if(audio.paused)
{
   audio.play();
   pay.classList.remove('fa-circle-play')
   pay.classList.add('fa-circle-pause')

}
else{
   audio.pause();
   pay.classList.add('fa-circle-play')
   pay.classList.remove('fa-circle-pause')

}

 })