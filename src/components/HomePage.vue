<template>
  <div>
    <headerComp/>
    <!-- Services -->
      <div class="services h-[600px] bg-[#FAF9F9] ">
        <div class="services-wrap max-w-5xl mx-auto">
          <div class="services-title text-3xl pt-6 mb-2 ml-3 font-bold">Our superfast <span class="text-blue-600 font-bold ">services</span></div>
          <div class="services-desc text-xl mb-4 ml-3">We give you exact quote before starting your project.</div>
          
          <div class="block">
            <div class="flex mx-auto justify-center pt-4">
           <div class="card mx-2">
            <div class="p-6 w-60 h-44 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-1 mb-2" src="../assets/service-1.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">IT consulting</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">We harness the power of our consultancy & design talent, alongsi...</p>
            </div>
          </div>
           <div class="card mx-2">
            <div class="p-6 w-60 h-44  bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-1 mb-2" src="../assets/service-2.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Mobile application devs</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Mobile applications on iOS and Android system</p>
            </div>
          </div>
           <div class="card mx-2">
            <div class="p-6 w-60 h-44 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                 <img class="p-1 mb-2" src="../assets/service-3.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Dedicated team</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Teams of technologists, strategists and designers deliver powerful digital </p>
            </div>
          </div>
          <div class="card mx-2">
            <div class="p-6 w-60 h-44 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                 <img class="p-1 mb-2" src="../assets/service-4.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">UX/UI design</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Our talented designers bring your ideas to life. They know how to huma... </p>
            </div>
          </div>
          </div>
          <div class="flex mx-auto justify-center pt-4">
           <div class="card mx-2">
            <div class="p-6 w-60 h-44 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-1 mb-2" src="../assets/service-5.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">IT consulting</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">We harness the power of our consultancy & design talent, alongsi...</p>
            </div>
          </div>
           <div class="card mx-2">
            <div class="p-6 w-60 h-44 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-1 mb-2" src="../assets/service-6.svg" alt="">
                <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Mobile application devs</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Mobile applications on iOS and Android system</p>
            </div>
          </div>
           <div class="card mx-2 h-60  h-[180px] w-[500px]">
            <div class="p-6 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="text-2xl font-semibold ">What other services would you like us <p class="text-blue-700">to add</p></div>
             <div class="flex">
                <input type="text" placeholder="I will be glad if you add ..." class="mt-4 block w-72 h-[50px] bg-white border border-slate-300 rounded-md text-sm  shadow-sm placeholder-slate-400 "/>
                <button type="button" class="text-white h-[50px] mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm ml-3  text-center w-32 ">Send Us</button>
             </div>
              </div>
          </div>
         
          </div>
          </div>
        </div>
      </div>
      
     <NumberCount/>
     <!-- portfolio -->
     <div class="bg-[#FAF9F9]">
      <div class="portfolio  h-[700px] max-w-5xl mx-auto">
      <div>
        <p class="text-3xl pt-6 mb-2 ml-3 font-bold">Our <span class="text-blue-600 font-bold ">light portfolio</span></p>
        <div class="text-xl mb-4 ml-3">Enjoy save and order new project to us</div>
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
      <div class="mx-auto w-100">
        <div class="" v-if="tab === 1">
          <div class="flex">
          <img class="w-[230px] h-[400px] object-cover rounded-lg " src="../assets/portfolio/Frame 39947.svg" alt="">
          <img class="w-[230px] h-[400px] object-cover rounded-lg m-4" src="../assets/portfolio/Mask group1.svg" alt="">
          <img class="w-[230px] h-[400px] object-cover rounded-lg m-4" src="../assets/portfolio/Mask group2.svg" alt="">
          <img class="w-[230px] h-[400px] object-cover rounded-lg m-4" src="../assets/portfolio/Mask group3.svg" alt="">
          
         </div>
        </div>
        <div class="w-92 h-[300px]" v-if="tab === 2">
        Dizayn
        </div>
        
        <div class="w-80 h-[300px]" v-if="tab === 3">
         Mobile
        </div>
      </div>
    </div>
      </div>
     </div>
     </div>
     <!-- accardion -->
    <div class="bg-[#FAF9F9] ">
      <div class="FAQ  max-w-5xl mx-auto flex h-[450px]">
        <div class="faq-left w-2/5">
          <p class="text-[#5b65bf] font-bold text-5xl  mb-3 ml-3">FAQ</p>
         <div class="ml-3 text-justify">Couldn’t find what you were looking for? <br> Write to us <a class="text-blue-600" href="#">help@ansorio.com</a></div>
        </div>
         <div class="accardion  w-4/5   ">
        <div id="accordion-collapse">
         <!-- 1 -->
         <div class=" border-b-2 border-y-[#ccc]" v-for="(item,index) in items" :key="index">
              <button  type="button" class="flex items-center justify-between w-full p-5 text-left">
                <span @click="openPanel(item.id)" class="text-[#19172C] text-[20px] font-semibold">{{item.title}}</span>
                  <div class="flex">
                    <div v-if="!isOpened(item.id)" @click="openPanel(item.id)" class="border-2 text-gray-500 font-bold border-gray-400 w-6 mr-2 text-center rounded-full ">+</div>            
                    <div v-else class="border-2 border-gray-400 w-6 text-center rounded-full font-bold" @click="closePanel(item.id)">-</div>   
                  </div>         
              </button>
            <div  v-show="isOpened(item.id)" class=" ml-5 border-[#19172C]">
              <p class="text-[14px] text-[#19172C] text-justify">{{item.desc}}</p>
            </div>
         </div>
        </div>
      </div>
    </div>
    </div>
    <!-- footer-top -->
   <div class="bg-[#FAF9F9] h-[500px]">
       <div class="footer-top max-w-5xl mx-auto ">
        <div class="flex h-[220px]">
          <div class="w-48"><img class="w-44" src="../assets/morflax-studio (1) 1.svg" alt=""></div>
          <p class="text-[48px] font-bold">Let’s discuss your <br><span class="text-blue-600">dream project</span></p>
        </div>
         <div class="flex mx-auto justify-center">
            <div class="card w-[33.3%]">
              <div class="p-6 h-48 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="relative mb-2 ">
                  <img  src="../assets/Ellipse 10.svg" alt="">
                  <img class="absolute left-3 top-3" src="../assets/schedule.svg" alt="">
                </div>
                  <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Scheduling software</h5>
                  <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Trello Official site, Info for staff scheduling system, Employee scheduling system</p>
              </div>
            </div>
            <div class="card mx-3 w-[33.3%]">
              <div class="p-6  h-48  bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="relative mb-2 ">
                    <img  src="../assets/Ellipse 10.svg" alt="">
                    <img class="absolute left-3 top-3" src="../assets/microphone.svg" alt="">
                </div>
                  <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Meeting management software</h5>
                  <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Jira official site, Ship early and often, Agily teams, Meeting management tools, Meeting management to...</p>
              </div>
            </div>
            <div class="card w-[33.3%]">
              <div class="p-6  h-48 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="relative mb-2 ">
                    <img  src="../assets/Ellipse 10.svg" alt="">
                    <img class="absolute left-3 top-3" src="../assets/video.svg" alt="">
                </div>
                  <h5 class="mb-2 font-xl font-bold tracking-tight text-[#19172C] dark:text-white">Video conferencing</h5>
                  <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Video conference chat, Voip call system, Business phone service</p>
              </div>
            </div>
          
          </div>
    </div>
   </div>
</div>
</template>
<script>
import headerComp from '../components/headerComp.vue'
import NumberCount from '../components/NumberCount.vue'
export default {
  name: "Home",
  components:{
    headerComp,
    NumberCount
  },
  data() {
    return {
      tab: 1,
      openedIds: [],
      isOpen: false,
      items:[
        {
          id: "1",
          title: 'Is there any free trial available',  
          desc: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing.'
        },
         {
          id: "2",
          title: 'On the Internet non-traditional FAQs',  
          desc: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing.'
        },
         {
          id: "3",
          title: 'In web design',  
          desc: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing.'
        },
         {
          id: "4",
          title: 'Reducing the workload',  
          desc: 'A frequently asked questions (FAQ) list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing.'
        },
      ]
    };
  },
  methods: {
    currentTab:function(tabNumber){ 
      this.tab = tabNumber;
  },
  openPanel(id){
      if(this.openedIds.indexOf(id) === -1){
        this.openedIds.push(id);
      }
  },
  closePanel(id){
    this.openedIds.splice(this.openedIds.indexOf(id), 1);
  },
  isOpened(id){
    return this.openedIds.indexOf(id) !== -1;

  }
  },
};
</script>

<style>
.bg-url {
  background-image: url("../assets/banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
  
</style>
