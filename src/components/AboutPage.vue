<template>
  <div class="">
   <div class="bg-[#FAF9F9]">
     <div class=" max-w-5xl mx-auto h-[350px]">
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
      <div class="flex ">
          <div>
            <router-link class="" to="/about">
            <button @focusout="outMenu()" @click="openDropdown()"  id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united.svg" alt=""> En</button>
              <div v-show="isOpenLang" class=" bg-[#19172C] rounded">
                  <ul class=" text-sm text-gray-700 dark:text-gray-200 rounded">
                  <li class="flex hover:bg-slate-500 py-1">
                    <img class="ml-3" src="../assets/language/uzb.svg" alt="">
                    <a href="#" class=" block py-1 px-2 hover:text-white">O’z</a>
                  </li>
                  
                  <li class="flex hover:bg-slate-500">
                    <img class="ml-3" src="../assets/language/rus.svg" alt="">
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
     <div class="route flex mb-[40px]">
      <router-link class="opacity-60 text-[16px]" to="/">Home</router-link>
      <img src="../assets/angle-right.svg" alt="">
      <p class="text-[16px] opacity-80">About Us</p>
      </div>
      <div class="text-[40px] font-bold mt-3">About <span class="text-[#40AAF8]">our company</span></div>
      <div class="text-[#19172C] text-[20px]">To deliver on the promise of technology and human ingenuity</div>
     </div>
   </div>
  <div class="main max-w-5xl flex mx-auto mt-8 h-[280px] justify-between">
        <div class="w-[500px] leading-6 text-[16px] text-[#19172C]">Our values shape the culture of our organization and define the character of our company. We live the core values through individual behaviors. They serve as the foundation for how we act and make decisions. <br>
            The post-digital age shows no signs of slowing down.  And the need for rapid business transformation has never been greater. <br>
            We meet clients wherever they are on their paths to change - in every industry across the 
            globe - and partner with them to create lasting value in every direction. 
        </div>
        <div>
            <img class="w-[200px] mr-8"  src="../assets/mStudio.svg" alt="">
        </div>
  </div>
  <div class="bg-[#FAF9F9] h-[500px]">
    <div class="team max-w-5xl mx-auto pt-7">
      <div class="text-[40px] font-bold mt-3">Our <span class="text-[#40AAF8]">professional</span> team</div>
      <div class="text-[#19172C] text-[20px]">Team leads really lead company</div>
      <div class="flex gap-x-5 mt-6">
        <div class="card relative w-[178px] h-[234px] overflow-hidden" v-for="(img,index) in images" :key="index">
            <img class=" rounded w-full h-full absolute top-0 left-0 object-cover"  :src='img.src' alt="">
            <div class="info absolute w-full  p-5 bottom-0 ">
                <p class="text-[14px] font-semibold text-white ">{{img.name}}</p>
                <span class="hidden">{{img.job}}</span>
            </div>
        </div>
      </div>
  </div>
  </div>
    <NumberCount/>
    <div class="bg-[#FAF9F9] ">
      <div class="max-w-5xl mx-auto pt-5">
        <div class="font-bold text-[40px]">Popular <span class="text-[#40AAF8]">achievments</span></div>
        <div class="text-[20px] text-[#19172C]">Investing and competetion achievments will appear here.</div>
       <div class="flex justify-between h-[600px]">
         <div class="block">
          <img class="w-[150px] h-[200px] mt-[60px]" src="../assets/about/star1.svg" alt="">
          <div class="font-bold text-[24px] mb-5 mt-5">Republic IT conference <span class="text-[#40AAF8]">1st place</span></div>
         <div class="w-[491px] text-[16px] leading-6 mb-4 ">The main goal of the ansor.io platform, founded in July 2021, is to train young professionals through quality and popular online education. So far, more than 15,000 students are studying in more than 30 free and paid courses on mohirdev.uz.</div>
          <div class="date text-[16px] text-[#5D5FEF]">15.02.2022</div>
         </div>
          <div class="block">
             <img class="w-[150px] h-[200px] mt-[60px]" src="../assets/about/star2.svg" alt="">
          <div class="text-[#40AAF8] font-bold text-[24px] mb-5 mt-5">Central Asia <span class="text-[#19172C]">IT conference</span></div>
         <div class="w-[495px] text-[16px] leading-6 mb-[30px] ">The Mohirdev project, which has been in talks with investors for the past few months, reached an agreement with the Pulse Group on December 29 to raise $ 500,000 for the development of the platform.</div>
          <div class="date text-[16px] text-[#5D5FEF]">15.02.2022</div>
          </div>
       </div>
        <div class="h-[350px]">
          <div class="font-bold text-[40px] mb-5">Reliable  <span class="text-[#40AAF8]">partners</span></div>
        <div class="text-[20px] text-[#19172C] mb-[20px]">We are a trusted technology partner for recognized brands</div>
        <div class="flex justify-between  mt-[40px]">
          <img class="w-[150px] h-[70px] " src="../assets/microsoft.svg" alt="">
          <img class="w-[150px] h-[70px] " src="../assets/airbnb.svg" alt="">
          <img class="w-[150px] h-[70px] " src="../assets/hubsoft.svg" alt="">
          <img class="w-[150px] h-[70px] " src="../assets/walmart.svg" alt="">
          <img class="w-[150px] h-[70px] " src="../assets/microsoft.svg" alt="">
          <img class="w-[150px] h-[70px] " src="../assets/airbnb.svg" alt="">
        </div>
        </div>
      </div>

    </div>
    <FooterPage/>
  </div>
</template>

<script>
import NumberCount from '../components/NumberCount.vue';
import FooterPage from '../components/FooterPage.vue';
export default {
    name: 'About',
    components:{
        NumberCount,
        FooterPage
    },
    data() {
        return {
            isOpen: false,
            isopenInd: false,
            isOpenService: false,
            isOpenLang: false,
            images: [
                {
                    src: new URL("../assets/about/1.svg", import.meta.url),
                    name: "Muhammad Halil",
                    job: "CEO"
                },
                {
                    src: new URL("../assets/about/2.svg", import.meta.url),
                    name: "Jon Uik",
                    job: "Designer"
                },
                {
                    src: new URL("../assets/about/3.svg", import.meta.url),
                    name: "Denis Istomen",
                    job: "Developer"
                },
                {
                    src: new URL("../assets/about/4.svg", import.meta.url),
                    name: "James Bond",
                    job: "Marketing"
                },
                {
                    src: new URL("../assets/about/5.svg", import.meta.url),
                    name: "Someone ",
                    job: "Sales"
                },
                {
                    src: new URL("../assets/about/6.svg", import.meta.url),
                    name: "Jon Uik",
                    job: "Designer"
                },
            ]
        };
    },
    methods: {
        openDropdown() {
            this.isOpenLang = !this.isOpenLang;
        },
        openDropdownIndustry() {
            this.isopenInd = !this.isopenInd;
        },
        openDropdownService() {
            this.isOpenService = !this.isOpenService;
        },
        outMenu() {
            this.isopenInd = false;
            this.isOpenService = false;
            this.isOpenLang = false;
        }
    },
    components: { NumberCount }
}
</script>

<style lang="css">
.card{
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}
.card:hover span{
    display: block;
    color: #5D5FEF;
}
.card:hover span{
    display: block;
}
.card:hover .info{
    background-color: #fff;
    padding: 5px 20px;
   border-bottom-left-radius: 4px;
   border-bottom-right-radius: 4px;
}
.card:hover .info p{
    color: #000;
}

</style>