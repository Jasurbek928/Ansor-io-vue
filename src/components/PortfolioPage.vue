<template>
  <div>
    <div class="bg-[#FAF9F9]">
        <div class="portfolio max-w-5xl mx-auto">
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
            <div  @click="openDropdownService()" class="w-[20px]  h-[20px]"><img class="w-[10px] h-[7px] mt-2 ml-2" src="../assets/about/Vector.svg" alt=""></div>
            </div>
            <div v-show="isOpenService" @focusout="outMenu()" class="lang-box bg-white rounded mt-2">
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
            <li class="py-2.5 ">
            <div class="flex  w-[110px]">
              <div class=""><router-link class="text-[#19172C] text-[16px]" to="/industry">Industry</router-link></div>
            <div @click="openDropdownIndustry()" class="w-[20px]  h-[20px]"><img class="w-[10px] h-[7px] mt-2 ml-2 " src="../assets/about/Vector.svg" alt=""></div>
            </div>
            <div v-show="isopenInd" @focusout="outMenu()" class="lang-box bg-white rounded mt-2">
                <ul class=" text-[12px]">
                  <li>
                    <a href="#" class="block py-1 px-4 hover:text-[#5D5FEF] text-white">Healthcare</a>
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
            <li class="px-4 py-2.5 w-[110px] ">
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
            <button @focusout="outMenu()" @click="openDropdown()" class=" font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united.svg" alt=""> En</button>
              <div v-show="isOpenLang" class="rounded">
                <ul class="rounded lang-box">
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

        <div>
          <button  type="button" class=" py-2 ml-5 px-5 mt-1 text-sm font-medium focus:outline-none  rounded-lg border border-[#40AAF8] text-[#40AAF8]">Contact Us</button>
        </div>
      </div>
    </div>
     <div class="route mb-4 flex">
      <router-link class="opacity-60 text-[16px]" to="/">Home</router-link>
      <img src="../assets/angle-right.svg" alt="">
      <p class="text-[16px] opacity-80">Portfolio</p>
      </div>
       <div class="max-w-5xl mx-auto h-[1050px] ">
      <div>
        <p class="text-[40px] pt-6 mb-2 font-bold">Our <span class="gradient font-bold ">light portfolio</span></p>
        <div class="text-xl mb-4">Enjoy save and order new project to us</div>
      </div>
      <div class="tab">
    <div class="mx-auto">
    <div class="flex justify-between">
       <div>
       <ul class="flex pt-3 ">
        <li>
          <button @click="currentTab(1)" class="py-2.5 px-5 mr-2 mb-2 text-[20px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"><img class="w-[20px] inline-flex mx-2 " src="../assets/service-1.svg" alt="">Web platforms</button>
        </li>
        <li> 
          <button @click="currentTab(2)" class="py-2.5 px-5 mr-2 mb-2 text-[20px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"><img class="w-[20px] inline-flex mx-2" src="../assets/service-4.svg" alt="">Design</button>
        </li>
        <li>
          <button @click="currentTab(3)" class="py-2.5 px-5 mr-2 mb-2 text-[20px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"><img class="w-[20px] h-[20px] inline-flex mx-2" src="../assets/service-2.svg" alt="">Mobile applications</button>
        </li>
      </ul>
     </div>
      <div class="flex justify-center mx-2 px-2 mt-5 mr-5">
        <img class="w-[40px] h-[40px] mx-3 border-solid border border-[#ccc] rounded-full text-[#ff0] " src="../assets/portfolio/arrow-down.svg" alt="">
        <img class="w-[40px] h-[40px] border-solid border border-[#ccc] rounded-full inline-flex  origin-center rotate-180  bottom-1" src="../assets/portfolio/arrow-down.svg" alt="">
      </div>
    </div>
        <div v-if="tab === 1">
            <div class="block">
                <div class="flex-wrap flex  ">
                    <img  v-for="(img, index) in images" :key="index" class=" mx-2 my-2 rounded-lg w-[240px] h-[340px] object-cover" :src='img.src' alt="">
                </div>
            </div>
        </div>
        <div class="w-92 h-[300px]" v-if="tab === 2">
        Dizaynn
        </div>
        <div class="w-80 h-[300px]" v-if="tab === 3">
         Mobile
        </div>
      
    </div>
      </div>
     </div>
  </div>
  
    </div>

  </div>
</template>

<script>
export default {
    components: {
    },
  data() {
    return {
        tab: 1,
        isOpen: false,
        isopenInd:false,
        isOpenService:false,
        isOpenLang:false,
         images: [
        {
            src: new URL('../assets/portfolio/Mask group1.svg',import.meta.url),
            alt: 'Mask group1'
        },
        {
            src: new URL('../assets/portfolio/Mask group2.svg',import.meta.url),
            alt: 'Mask group2'
        },
        {
            src: new URL('../assets/portfolio/Mask group.svg',import.meta.url),
            alt: 'Mask group'
        },
        {
           src: new URL('../assets/portfolio/Mask group3.svg',import.meta.url),
            alt: 'Mask group3'
        },
        {
            src: new URL('../assets/portfolio/5.svg',import.meta.url),
            alt: '5'
        },
        {
           src: new URL('../assets/portfolio/6.svg',import.meta.url),
            alt: '6'
        },
        {
            src: new URL('../assets/portfolio/8.svg',import.meta.url),
            alt: '7'
        },
        {
            src: new URL('../assets/portfolio/Mask group2.svg',import.meta.url),
            alt: 'Mask group2'
        }
    ]
    }
  },
  methods: {
     currentTab:function(tabNumber){ 
      this.tab = tabNumber;
  },
    openDropdown() {
      this.isOpenLang = !this.isOpenLang;
    },
    openDropdownIndustry(){
      this.isopenInd = !this.isopenInd;
    },
    openDropdownService(){
      this.isOpenService = !this.isOpenService;
    },
    outMenu(){
      this.isopenInd = false;
      this.isOpenService = false;
      this.isOpenLang = false;
    }
  },
}
</script>

<style scoped>

</style>