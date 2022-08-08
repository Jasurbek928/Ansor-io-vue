<template>
  <header class="bg-url">
    <div class=" max-w-5xl mx-auto nav flex h-[120px] py-5 justify-between">
     <div class="flex  mt-1 w-[200px]">
            <router-link class="flex w-[200px]" to="/">
              <img class="w-[30px] h-[30px]" src="../assets/Group.svg" alt="">
             <p class="ml-1.5 text-[22px] text-white font-medium">ANSOR.IO</p>
            </router-link>
      </div>
      <div class="nav-link flex">
        <ul class="flex ml-5">
          <li>
            <router-link   to="/">
            <button @focusout="outMenu()"  @click="openDropdownService()" data-dropdown-toggle="dropdownDivider" class="text-white font-medium rounded-lg text-white w-[150px]  px-4 py-2.5 text-center text-[16px] inline-flex items-center " type="button">Our Services<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
            <router-link  to="/">
            <button @focusout="outMenu()" @click="openDropdownIndustry()"  class="text-white w-[120px]  font-medium text-[16px] px-4 py-2.5 text-center inline-flex items-center" type="button"><router-link to="/industry">Industry</router-link><svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
            <router-link  class="text-white text-[16px] " to="/portfolio">Portfolio</router-link>
          </li>
            <li class="px-4 py-2.5 ">
            <router-link  class="text-white text-[16px]" to="/about">About Us</router-link>
            </li>
        </ul>
      </div>
      <div class="flex ml-10">
          <div>
            <router-link to="/">
            <button @focusout="outMenu()" @click="openDropdown()" class="text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united-kingdom 1.svg" alt=""> En</button>
              <div v-show="isOpenLang" class=" bg-white rounded">
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
        <button  type="button" class=" py-2 ml-5 px-5 mt-1 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 text-white">Contact Us</button>
        </div>
      </div>
    </div>
    <div class="main text-center text-white">
      <p class="font-bold leading-tight mb-3 text-4xl">We decided to work only for <br><span class="text-blue-600 ">MUSLIMS</span> & with them</p>
      <div class="text-xl mb-8">Experienced web and mobile application development team, <br> 
          because there is no site in the world where only Muslims work.</div>
          <div class="relative pointer-events-none justify-center w-[92px] h-[92px] m-auto ">
            <img src="../assets/Ellipse 7.svg" alt="">
            <div class="absolute w-full h-full top-0 animate-[spin_5s_linear_infinite]">
              <div class="relative h-full w-full">
                <img class="absolute top-[9px] right-1/2 translate-x-1/2" src="../assets/Untitled-1 3.svg" alt="">
                <img class="absolute bottom-[9px] right-1/2 translate-x-1/2" src="../assets/Untitled-1 4.svg" alt="">
              </div>
            </div>
          </div>

          <div class="brand flex justify-center p-2 mt-5">
            <img class="ml-5" src="../assets/microsoft.svg" alt="">
            <img class="ml-5" src="../assets/airbnb.svg" alt="">
            <img class="ml-5" src="../assets/hubsoft.svg" alt="">
            <img class="ml-5" src="../assets/walmart.svg" alt="">
          </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
     
      isOpen: false,
      isopenInd:false,
      isOpenService:false,
      isOpenLang:false,
    }
  },
  methods: {
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