<template>
<div>
  <div class="bg-[#FAF9F9] h-[350px]">
    <div class=" max-w-5xl mx-auto nav flex h-[125px] py-5 justify-between ">
     <div class="flex  mt-1 w-[200px]">
            <router-link class="flex w-[200px]" to="/">
              <img class="w-[30px] h-[30px]" src="../assets/Group.svg" alt="">
             <p class="ml-1.5 text-[22px] text-[#19172C] font-medium">ANSOR.IO</p>
            </router-link>
      </div>
      <div class="nav-link flex">
        <ul class="flex ml-5">
          <!-- services-link -->
          <li class=" px-4 py-2.5">
            <div class="flex  w-[130px]">
              <router-link class="text-[#19172C] text-[16px]" to="/">Our services</router-link>
            <div  @click="openDropdownService()" @focusout="outMenu()" class="w-[20px]  h-[20px]"><img class="w-[10px] h-[6px] mt-2 ml-2" src="../assets/about/Vector.svg" alt=""></div>
            </div>
            <div v-show="isOpenService"  class="lang-box  rounded mt-2">
                <ul class=" text-[12px]">
                  <li>
                    <a href="#" class="block py-1 px-4 hover:text-[#5D5FEF] text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block  px-4 hover:text-[#5D5FEF] text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block py-1 px-4 hover:text-[#5D5FEF] text-white">Earnings</a>
                  </li>
                </ul>
  
              </div>
          </li>
          <!-- industry-link -->
            <li class="px-4 py-2.5">
            <div class="flex  w-[110px] ">
              <div class=""><router-link class="text-[#19172C] text-[16px]" to="/industry">Industry</router-link></div>
            <div  @focusout="outMenu()" @click="openDropdownIndustry()" class="w-[20px]  h-[20px]"><img class="w-[10px] h-[6px] mt-2 ml-2" src="../assets/about/Vector.svg" alt=""></div>
            </div>
            <div v-show="isopenInd"  class="lang-box  rounded mt-2">
                <ul class=" text-[12px]">
                  <li>
                    <a href="#" class="block py-1 px-4 hover:text-[#5D5FEF] text-white ">Healthcare</a>
                  </li>
                  <li>
                    <a href="#" class="block  px-4 hover:text-[#5D5FEF] text-white">Education</a>
                  </li>
                  <li>
                    <a href="#" class="block py-1 px-4 hover:text-[#5D5FEF] text-white">Finance</a>
                  </li>
                </ul>
  
              </div>
          </li>
            <!-- portfolio-link -->
            <li class="py-2.5 px-4 w-[110px]">
            <router-link  class="text-[#19172C] text-[16px] " to="/portfolio">Portfolio</router-link>
            </li>
            <!-- about-link -->
            <li class="px-4 py-2.5 w-[110px] ">
            <router-link  class="text-[#19172C] text-[16px]" to="/about">About Us</router-link>
            </li>
        </ul>
      </div>
      <div class="flex ml-10">
          <div>
            <div>
            <button @focusout="outMenu()" @click="openDropdown()" class=" font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united.svg" alt=""> En</button>
              <div v-show="isOpenLang" class="  rounded">
                <ul class=" rounded lang-box">
                  <li class="flex  py-1">
                    <img class="ml-3" src="../assets/language/uzb.svg" alt="">
                    <a href="#" class=" block py-1 px-2 text-white ">O’z</a>
                  </li>
                  <li class="flex ">
                    <img class="ml-3" src="../assets/language/rus.svg" alt="">
                    <a href="#" class=" block py-2 px-2 text-white">Ру</a>
                  </li>
                </ul>
              </div>
          </div>
          </div>

        <div>
        <button  type="button" class=" p-3 ml-5 px-7  text-sm font-medium focus:outline-none  rounded-lg contact">Contact Us</button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto">

    <div class="route mb-5 flex ">
        <router-link class="opacity-60 text-[16px]" to="/">Home</router-link>
        <img src="../assets/angle-right.svg" alt="">
        <p class="text-[16px] opacity-80">Industry education</p>
    </div>
      <p class="text-[40px] pt-6 mb-2 font-bold  text-blue-600 ">Education<span class="font-bold text-[#19172C] "> industries</span></p>
        <div class=" text-[17px] opacity-80">With technology becoming more affordable and accessible, e-learning has started to emerge as a viable and valuable educational tool.</div>
    </div>
  </div>
  <div>
    <div class="max-w-5xl mx-auto h-[300px]">
        <div class="flex justify-between">
          <div class="w-[620px] h-[208px] opacity-80 text-[16px] leading-6 my-10">
            For education apps to be particularly effective, they need to be user-friendly, multi-platform utility tools that minimize barriers and maximize learning outcomes. Ansor.io devs are perfectly equipped to achieve this goal. <br> <br>
            The key to a web-based educational application is its compatibility with different platforms and devices. If the program presents accessibility barriers like requiring an updated browser or OS, then the efficacy of the learning initiatives will be dramatically hindered. The Ansor.io web team specializes in frictionless web experiences.
          </div>
            <div>
              <img class="w-48 my-[60px]" src="../assets/footer-br.svg" alt="">
              <img class="ml-[90px] my-[70px]" src="../assets/rll.svg" alt="">
            </div>
        </div>
    </div>
  </div>
  <div class="bg-[#FAF9F9]">
    <div class="max-w-5xl mx-auto h-[500px]">
        <div class="flex justify-between ">
          <div class="block mt-[40px] ">
            <div class="text-[24px] font-semibold mb-5">We give more <span class="gradient">solutions</span> to problems in our projects</div>
           <div class="relative bg-slate-400 ">
             <img class="absolute ml-5 mt-5" src="../assets/Vector.svg" alt="">
             <img class="absolute left-0.5 top-1" src="../assets/E14.svg" alt="">
           </div>
          <div class="mt-[100px] main-ul">
             <ul class="w-[480px] ml-4">
              <li class="text-[16px] opacity-70 leading-6 pb-3">Real-life examples: A clogged toilet is an annoying problem. A rock in your shoe is often just a small problem. An international war is a big problem that causes many other problems for a large number of people</li>
              <li class="text-[16px] opacity-70 leading-6">Used in a sentence: I need to pass this final exam or I am going to have a big problem with the grade for this class!</li>
           </ul>
          </div>
          </div>
          <div class="block mt-[40px]">
            <div class="relative  mt-[90px] ml-[40px] ">
              <img class="absolute top-4 left-5" src="../assets/complete.svg" alt="">
              <img class=" absolute left-0.5" src="../assets/E15.svg" alt="">
            </div>
           <div class="main-ul">
             <ul class="pt-[80px] px-[50px]">
              <li>Used in a sentence: Instead of labeling someone a “problem child,” we should try to understand why the child acts the way they do. </li>
              <li>A problem is a question or puzzle that is intended to be solved or to be deeply thought about.</li>
              <li>Real-life examples: Your teacher may present a problem to the class so you can use what you’ve learned to solve it. Scientists present problems to other scientists so they can work together to think about them and discover new information.
              </li>
              <li>Used in a sentence: Ivan managed to solve the problem of how to separate the rocks and the sand. 
              </li>
            </ul>
           </div>
          </div>
        </div>
    </div>
  </div>
  <div class="max-w-5xl mx-auto h-[450px]">
      <div class="flex mt-5">
        <div class="block w-[460px]">
        <div class="flex pt-6 mb-2 ">
          <p class="text-[40px] font-bold  gradient ">Video</p>
          <span class="font-bold text-[#19172C] text-[40px] ml-2">explaining</span>
        </div>
        <div class="text-[20px] leading-8 opacity-50">The key to a web-based educational application is its 
          compatibility with different platforms and devices. If the program presents accessibility barriers like requiring an updated browser 
          or OS, then the efficacy of the learning initiatives will be 
          dramatically hindered.</div>
        <button type="button" class="mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Watch videos</button>
        </div>
        <div class=" flex pt-7 ml-5 ">
          <iframe class="rounded-lg" width="200" height="320" src="https://www.youtube.com/embed/CmzKQ3PSrow" title="History of Lorem Ipsum and What It Means" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="mx-5 rounded-lg" width="300" height="300" src="https://www.youtube.com/embed/Bz099W2CyCs" title="Generate Lorum Ipsum Easily Within Your Text Editor!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </div>
  <div class="bg-[#FAF9F9]">
      <div class="max-w-5xl mx-auto h-[1100px]">
       <div class="flex pt-6 mb-2">
         <p class="text-[40px]  font-bold  gradient ">Product</p>
        <span class="font-bold text-[#19172C] text-[40px] ml-2.5"> we developed</span>
       </div>
        <div class="text-[20px] opacity-70">Enjoy save and order new project to us.</div>
        <div class="flex mt-5 h-[450px]">
          <img class=" w-[250px] h-[350px] rounded-lg object-cover" src="../assets/portfolio/img47.svg" alt="">
          <img class=" w-[250px] h-[350px] rounded-lg object-cover ml-5" src="../assets/portfolio/222.svg" alt="">
        </div>
       <div class="flex pt-6 mb-2">
         <p class="text-[40px]  font-bold  gradient ">Review</p>
        <span class="font-bold text-[#19172C] text-[40px] ml-2.5 ">from our users</span>
       </div>
        <div class="text-[20px] opacity-70">Enjoy save and order new project to us.</div>
        <div class="flex justify-between">
        <div class="block py-[60px]">
          <div class="block py-4 p-3  w-[300px]">
            <div class="flex">
              <img src="../assets/avatar/avatar-1.svg" alt="">
              <div class="block ml-4">
                <p class="text-[20px] leading-6 font-semibold">James Bond</p>
                <span class="text-[14px] opacity-70 leading-5">Mohirdev user</span>
              </div>
            </div>
          </div>
          <div class="block py-4 bg-white w-[300px] rounded-lg p-3">
            <div class="flex">
              <img src="../assets/avatar/avatar-2.svg" alt="">
              <div class="block ml-4">
                <p class="text-[20px] leading-6 font-semibold">Dan Raykhman</p>
                <span class="text-[14px] opacity-70 leading-5">Mohirdev user</span>
              </div>
            </div>
          </div>
          <div class="block py-4 p-3  w-[300px]">
            <div class="flex">
              <img src="../assets/avatar/avatar-3.svg" alt="">
              <div class="block ml-4">
                <p class="text-[20px] leading-6 font-semibold">Stive Jobs</p>
                <span class="text-[14px] opacity-70 leading-5">RLL user</span>
              </div>
            </div>
          </div>
        </div>
          <div class="block pt-[80px] w-[400px] mr-[60px]">
            <img class="mb-[30px]" src="../assets/footer-br.svg" alt="">
            <div class="text-[16px] text-[#19172C] leading-7">I'm a user at mohirdev. I'm fiery about marketing, writing and traveling, so you can often find me scribbling away in some unknown corner of the world. If you want to know more ways to increase traffic and attract buyers to your online store get in touch with sixads on one of the channels bellow.</div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    components:{
    },
    data() {
      return {
        isOpen: false,
        isOpenLang: false,
        isopenInd: false,
        isOpenService: false,
      }
    },
    methods: {
      openMenu() {
        this.isOpen = !this.isOpen
      },
      openDropdown() {
        this.isOpenLang = !this.isOpenLang
      },
      openDropdownIndustry() {
        this.isopenInd = !this.isopenInd
      },
      openDropdownService() {
        this.isOpenService = !this.isOpenService
      },
      outMenu() {
        this.isOpenLang = false
        this.isopenInd = false
        this.isOpenService = false
      },


    }
   
}
</script>

<style>
.main-ul ul li{
  list-style-type: disc !important;
}
.button{
  background: linear-gradient(267.95deg, #40AAF8 -14.86%, #1D33F8 86.76%);
  box-shadow: 0px 4px 32px rgba(32, 80, 253, 0.25);
  border-radius: 10px;
}
.gradiet{
   background: linear-gradient(263.88deg, #40AAF8 49.29%, #1D33F8 102.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.contact{
  border: 1px solid rgba(64, 170, 248, 1);
  color: rgba(64, 170, 248, 1);
  }
.lang-box{
  background: rgba(25, 23, 44, 0.5);
  backdrop-filter: blur(26px);
  border-radius: 8px;
  border: 1px solid rgba(64, 170, 248, 1);
}
</style>