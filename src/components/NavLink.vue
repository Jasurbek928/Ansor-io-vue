<template>
   <div class=" max-w-5xl mx-auto nav flex h-[125px] py-5 justify-between ">
     <div class="flex  mt-1 w-[200px]">
            <router-link class="flex w-[200px]" to="/">
              <img class="w-[30px] h-[30px]" src="../assets/Group.svg" alt="">
             <p class="ml-1.5 text-[22px] text-white font-medium">ANSOR.IO</p>
            </router-link>
      </div>
      <div class="nav-link flex">
        <ul class="flex ml-5">
          <!-- services-link -->
          <li class=" px-4 py-2.5 ">
            <div class="flex  w-[130px]">
              <router-link class="text-white text-[16px]" to="/">Our services</router-link>
            <div  @click="openDropdownService()" class="w-[20px]  h-[20px]"><img class="w-4 mt-1 ml-2" src="../assets/arrow-down.svg" alt=""></div>
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
            <li class=" px-4 py-2.5 ">
            <div class="flex w-[110px]">
              <div class=""><router-link class="text-white text-[16px]" to="/industry">Industry</router-link></div>
            <div  @click="openDropdownIndustry()" class="w-[20px]  h-[20px]"><img class="w-4 mt-1 ml-2" src="../assets/arrow-down.svg" alt=""></div>
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
            <li class=" px-4 py-2.5 w-[110px] ">
            <router-link  class="text-white text-[16px]" to="/portfolio">Portfolio</router-link>
            </li>
            <!-- about-link -->
            <li class="px-4 py-2.5 w-[110px] ">
            <router-link  class="text-white text-[16px]" to="/about">About Us</router-link>
            </li>
        </ul>
      </div>
      <div class="flex ml-10">
          <div>
            <button @focusout="outMenu()" @click="openDropdown()" class="text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button"><img class="mr-1.5" src="../assets/language/united.svg" alt=""> En</button>
              <div v-show="isOpenLang" class="rounded">
                <ul class=" text-sm  dark:text-gray-200 rounded lang-box">
                  <li class="flex py-1">
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
        <button  type="button" class=" p-3 ml-5 px-7  text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 text-white">Contact Us</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        isOpen: false,
        isOpenLang: false,
        isopenInd: false,
        isOpenService: false,
        }
    },
    methods: {
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
        this.isopenInd = false;
        this.isOpenService = false;
        this.isOpenLang = false;
        },
    },
}
</script>

<style>

</style>