<template>
<div>
  <div class="bg-[#FAF9F9] h-[350px]">
    <div class="max-w-5xl mx-auto">
    <div class="nav flex h-[120px] py-5 justify-between">
        <div class="flex  mt-1 w-[200px]">
            <router-link class="flex w-[200px]" to="/">
              <img class="w-[30px] h-[30px]" src="../assets/Group.svg" alt="">
             <p class="ml-1.5 text-[22px] text-[#19172C] font-medium">ANSOR.IO</p>
            </router-link>
      </div>
        <div class="nav-link flex ">
          <ul class="flex">
            <li>
              <router-link  to="/">
              <button @focusout="outMenu()"  @click="openDropdownService()" class="text-[#19172C] font-medium rounded-lg text-[#19172C] w-[150px]  px-4 py-2.5 text-center text-[16px] inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><router-link to="/">Our Services</router-link><svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div v-show="isOpenService" class=" bg-white rounded  mx-2 text-center">
                  <ul class=" text-[12px] text-gray-700 dark:text-gray-200 text-justify">
                    <li class="">
                      <a href="#" class="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block  px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
    
                </div>
              </router-link>
            </li>
            <li>
              <router-link  to="/portfolio">
              <button @focusout="outMenu()" @click="openDropdownIndustry()"  class="text-[#19172C] w-[120px]  font-medium text-[16px] px-4 py-2.5 text-center inline-flex items-center" type="button"><router-link to="/industry">Industry</router-link><svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div v-show="isopenInd" class="bg-white rounded  mx-2 text-center">
                  <ul class=" text-[12px] text-justify">
                    <li>
                      <a href="#" class="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Healthcare</a>
                    </li>
                    <li>
                      <a href="#" class="block  px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Education</a>
                    </li>
                    <li>
                      <a href="#" class="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                    </li>
                  </ul>
    
                </div>
              </router-link>
            </li>
              <li class=" px-4 py-2.5 ">
              <router-link  class="text-[#19172C] text-[16px] " to="/portfolio">Portfolio</router-link>
            </li>
              <li class="px-4 py-2.5 ">
              <router-link  class="text-[#19172C] text-[16px]" to="/about">About Us</router-link>
              </li>

          
          </ul>
        </div>
        <div class="flex">
            <div>
              <router-link class="" to="/portfolio">
              <button @focusout="outMenu()" @click="openDropdown()"  id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united-kingdom 1.svg" alt=""> En</button>
                <div v-show="isOpenLang" class=" bg-[#19172C] rounded">
                  <ul class=" text-sm text-gray-700 dark:text-gray-200 rounded">
                    <li class="flex hover:bg-slate-500 py-1">
                      <img class="ml-3" src="../assets/language/uzbekistan 1.svg" alt="">
                      <a href="#" class=" block py-1 px-2 hover:text-white">O’z</a>
                    </li>
                    
                    <li class="flex hover:bg-slate-500">
                      <img class="ml-3" src="../assets/language/russia 1.svg" alt="">
                      <a href="#" class=" block py-2 px-2 hover:text-white">Ру</a>
                    </li>
                  </ul>
    
                </div>
            </router-link>
            </div>

          <div>
          <button  type="button" class=" py-2 ml-5 px-5 mt-1 text-sm font-medium focus:outline-none  rounded-lg border border-[#40AAF8] text-[#40AAF8]">Contact Us</button>
          </div>
        </div>
      </div>
        <div class="route mb-5 flex ">
        <router-link class="opacity-60 text-[16px]" to="/">Home</router-link>
        <img src="../assets/angle-right.svg" alt="">
        <p class="text-[16px] opacity-80">Industry education</p>
        </div>
        <p class="text-[40px] pt-6 mb-2 font-bold  text-blue-600 ">Education<span class="font-bold text-[#19172C] "> industries</span></p>
        <div class=" text-[17px] opacity-80">With technology becoming more affordable and accessible, e-learning has started to emerge as a viable and valuable educational tool.</div>
        <div class="flex">

        </div>
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
              <img class="ml-[90px] my-[70px]" src="../assets/RLL-04 1 1.svg" alt="">
            </div>
        </div>
    </div>
  </div>
  <div class="bg-[#FAF9F9]">
    <div class="max-w-5xl mx-auto h-[500px]">
        <div class="flex justify-between ">
          <div class="block mt-[40px] ">
            <div class="text-[24px] font-semibold mb-5">We give more <span class="text-[#40AAF8]">solutions</span> to problems in our projects</div>
           <div class="relative bg-slate-400 ">
             <img class="absolute ml-5 mt-5" src="../assets/Vector.svg" alt="">
             <img class="absolute left-0.5 top-1" src="../assets/Ellipse 14.svg" alt="">
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
              <img class=" absolute left-0.5" src="../assets/Ellipse 15.svg" alt="">
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
        <p class="text-[40px] pt-6 mb-2 font-bold  text-blue-600 ">Video<span class="font-bold text-[#19172C] "> Explaining</span></p>
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
        <p class="text-[40px] pt-6 mb-2 font-bold  text-blue-600 ">Product<span class="font-bold text-[#19172C] "> we developed</span></p>
        <div class="text-[20px] opacity-70">Enjoy save and order new project to us.</div>
        <div class="flex mt-5 h-[450px]">
          <img class=" w-[250px] h-[350px] rounded-lg object-cover" src="../assets/portfolio/image 47.svg" alt="">
          <img class=" w-[250px] h-[350px] rounded-lg object-cover ml-5" src="../assets/portfolio/222.svg" alt="">
        </div>
        <p class="text-[40px] pt-6 mb-2 font-bold  text-blue-600 ">Review <span class="font-bold text-[#19172C] ">from our users</span></p>
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
    }
   
}
</script>

<style>
.main-ul ul li{
  list-style-type: disc !important;
}
</style>