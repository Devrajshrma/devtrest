var canvas =[
    {img:"https://i.pinimg.com/236x/b4/52/bb/b452bb7e32d354b75fedad0a495657ba.jpg"},
    {img:"https://i.pinimg.com/474x/98/65/3e/98653eff0d4d62c4bd4d7ad97f1761c8.jpg"},
    {img:"https://i.pinimg.com/originals/f4/fe/a5/f4fea5b957a81ceb2a65f8cd1f0e3198.png"},
    {img:"https://i.pinimg.com/474x/aa/82/6f/aa826f17b25dc500ca7f6ad09a79c50f.jpg"},
    {img:"https://i.pinimg.com/236x/53/60/3d/53603d3c50189b9f50d5d4c5e4ee9234.jpg"},
    {img:"https://i.pinimg.com/474x/1a/b5/04/1ab5045e07ad73884c6ac87eb86649ed.jpg"},
    {img:"https://i.pinimg.com/236x/b5/81/54/b58154136829fa5582cc4c590f7fd562.jpg"},
    {img:"https://i.pinimg.com/236x/00/ae/18/00ae18237550fe008483e6161fbb2c01.jpg"},
    {img:"https://i.pinimg.com/474x/c0/d1/72/c0d172f42217037c5da4fa3e81bd51f4.jpg"},
    {img:"https://i.pinimg.com/236x/e9/7d/30/e97d3058e9b4c274945e24ea383646fd.jpg"},
    {img:"https://i.pinimg.com/474x/b8/a8/ba/b8a8ba70cc5bfb9a902b70f4a849f8be.jpg"},
    {img:"https://i.pinimg.com/236x/f8/3b/71/f83b71cd08d7d8669d1501f777afbc3f.jpg"},
    {img:"https://i.pinimg.com/236x/73/f9/26/73f92619104c4dc9d59d7b3f9d467c25.jpg"},
    {img:"https://i.pinimg.com/474x/3a/ee/71/3aee710fee92de4a0cbfcca1e6dd61e6.jpg"},
    {img:"https://i.pinimg.com/474x/89/ba/e2/89bae2b7aff475562ef7a773a3e9864a.jpg"},
    {img:"https://i.pinimg.com/236x/60/d1/ad/60d1ad25697ea008c5a058e13c6d1298.jpg"},
    {img:"https://i.pinimg.com/474x/8c/44/a3/8c44a3eb18e89454f95b430e93812f25.jpg"},
    {img:"https://i.pinimg.com/474x/6a/96/b8/6a96b837c84ae86d7bb772fe4d59e917.jpg"},
    {img:"https://i.pinimg.com/236x/8b/ef/7b/8bef7b56ee204993a6340dffa690c43e.jpg"},
    {img:"https://i.pinimg.com/236x/07/20/63/072063b20b72f3ef58afab77e8edc6a0.jpg"},
    {img:"https://i.pinimg.com/474x/06/e3/c4/06e3c433d070d812b1e491266ec79f81.jpg"},
    {img:"https://i.pinimg.com/474x/06/e3/c4/06e3c433d070d812b1e491266ec79f81.jpg"},
    {img:"https://i.pinimg.com/474x/d6/45/98/d64598368dee826caddfdd8a4adbf57e.jpg"},
    {img:"https://i.pinimg.com/474x/2a/d8/61/2ad861f285d392162575cdf3ae81e64c.jpg"},
    {img:"https://i.pinimg.com/474x/2c/04/50/2c045030c8dcd727943a2f636f811775.jpg"},
    {img:"https://i.pinimg.com/236x/00/3e/b8/003eb857d4561ebfc71b50eb088550cd.jpg"},
    {img:"https://i.pinimg.com/236x/ba/be/0f/babe0fd4bce629d4321e2859038e7a3f.jpg"},
    {img:"https://i.pinimg.com/236x/f9/cc/b4/f9ccb4cf0e2ddb90fa70304ed0e4cdeb.jpg"},
  ]


  var ideaForyou = [
    {Image : "https://i.pinimg.com/236x/3d/f4/0c/3df40cfd8ba03d8c388ed4ce6486de3d.jpg", name : "Motion graphics design"},
    {Image : "https://i.pinimg.com/236x/cb/86/93/cb8693f7a1659e68fef5e5dca71e218f.jpg", name : "Media design"},
    {Image : "https://i.pinimg.com/236x/ee/f8/61/eef861e055eb1851c354656c537b1c2b.jpg", name : "Yoga day post"}
  ]

  var popularONpinterest = [
    {Image : "https://i.pinimg.com/236x/24/84/f6/2484f660ba02117b6521f9d8b9617832.jpg", name : "Dp for whatsapp"},
    {Image : "https://i.pinimg.com/236x/49/46/16/49461699264a7475f5b2ef0bfb3620d8.jpg", name : "Selfie's Posses"},
    {Image : "https://i.pinimg.com/236x/28/8a/6b/288a6b85623c9e719a3c500c26adecee.jpg", name : "New/Old Posses"}, 
    {Image : "https://i.pinimg.com/236x/ef/1e/8a/ef1e8a4a967bafbb89d7f82d57e6713c.jpg", name : "Shahu Maharaj"}, 
    {Image : "https://i.pinimg.com/236x/9b/76/68/9b76684f09e47b8ac38139935e510fdd.jpg", name : "Feel The Nature"} 
  ]

function showCanvas(){
var dev = ""
canvas.forEach(function(obj){
    dev += `<div class="relative group cursor-pointer mb-5">
      <div class="group-hover:bg-black/55 w-full h-full absolute rounded-2xl"></div>
        <img src="${obj.img}"  alt="" class="w-full h-full rounded-2xl object-cover">
      <!-- save button -->
      <div class="flex justify-between px-1 items-center absolute top-0 right-1 opacity-0 group-hover:opacity-100">
        <button class="bg-red-600 px-5 py-2 rounded-full text-base font-semibold my-5 text-white">save</button>
</div>
      <!-- content and button -->
        <div class="flex justify-between px-1 items-center absolute w-full bottom-0 opacity-0 group-hover:opacity-100">
          <button class="bg-[#E2E2E2] px-5 py-2 rounded-full text-base font-semibold my-5">View More</button>
            <button class="bg-[#E2E2E2] px-3 py-2 rounded-full text-base font-semibold my-5"><i class="ri-download-2-line"></i></button>
          <button class="bg-[#E2E2E2] px-3 py-2 rounded-full text-base font-black my-5 hidden md:block">...</button>
        </div>
    </div>`
  document.querySelector("section").innerHTML= dev

});
}

showCanvas()



function showIfy(){
  var dev = ""
  ideaForyou.forEach(function(obj){
      dev += `<div
          class="h-20 w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-between gap-2 rounded-2xl cursor-pointer mb-2">
          <img src="${obj.Image}" alt=""
            class="h-full w-full object-cover rounded-l-2xl">
          <div class="font-semibold w-full text-start">${obj.name}</div>
        </div>`
    document.querySelector("#ify").innerHTML= dev
  
  });
  }
  
  showIfy()


function showPop(){
  var dev = ""
  popularONpinterest.forEach(function(obj){
      dev += `<div
            class="h-20 w-[100%] bg-gray-100 hover:bg-gray-200 flex items-center justify-between rounded-2xl cursor-pointer mb-5">
            <div class="w-[60%] h-full bg-black rounded-l-2xl">
              <img src="${obj.Image}" alt=""
                class="h-full w-full object-cover rounded-l-2xl">
            </div>
            <div class="font-semibold w-auto h-full text-center py-2">${obj.name}</div>
          </div>`
    document.querySelector("#pop").innerHTML= dev
  
  });
  }
  
  showPop()


document.querySelector(".srch").addEventListener("focusin",function(){
  document.querySelector(".srchc").style.display="block"
  document.querySelector(".srchc").style.position="fixed"
  document.querySelector("body").style.position="absolute"
  document.querySelector(".black").style.display="block"
  document.querySelector(".srch").style.border="2px solid skyblue"
})

document.querySelector(".srch").addEventListener("focusout",function(){
  document.querySelector(".srchc").style.display=""
  document.querySelector("body").style.position=""
  document.querySelector(".black").style.display=""
  document.querySelector(".srch").style.border=""
})