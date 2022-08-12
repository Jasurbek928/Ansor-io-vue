<template>
   <div class="product h-[370px] ">
        <div class="product-wrap max-w-5xl mx-auto">
          <div class="text-4xl pt-6 mb-2 ml-3 font-bold">We create <span class="text-[#1D33F8]">digital</span> products</div>
          <div class=" text-[#19172C] text-[20px] mb-4 ml-3 w-100">We give you exact quote before starting your project, and we stick to it! We give you exact quote before starting your project.</div>
       <div class="content pt-[30px] flex mx-auto justify-between">
                <div class="block w-[30%]">
                    <div class="flex">
                        <div class="value text-[50px] number-bg font-bold" akhi="15">0</div>
                        <span class="text-[40px] number-bg mt-1.5 ml-2 font-bold">+</span>
                    </div>
                    <div class="text-[20px] text-[#19172C]">Years of custom software development</div>
                </div>
                 <div class="block w-[30%]">
                     <div class="flex">
                        <div class="value text-[50px] number-bg font-bold" akhi="156">0</div>
                        <span class="text-[40px] number-bg mt-1.5 ml-2 font-bold">+</span>
                    </div>
                    <div class="text-[20px] text-[#19172C]">All kind of successfully completed projects </div>
                </div>
                 <div class="block w-[30%]">
                     <div class="flex">
                        <div class="value text-[50px] number-bg font-bold" akhi="97">0</div>
                        <span class="text-[40px] number-bg mt-1.5 ml-1 font-bold">%</span>
                    </div>
                    <div class="text-[20px] text-[#19172C]">Of our team is hard core developers</div>
                </div>
                 <div class="w-[20%] mx-auto block text-right ">
                    <div class="flex">
                        <div class="value text-[50px] number-bg font-bold" akhi="211">0</div>
                        <span class="text-[45px] number-bg mt-1.5 ml-1 font-bold">K</span>
                    </div>
                    <div class="text-[20px] text-[#19172C] text-justify">Active users/ month for liberty Global</div>
                </div>
                
            </div>
        </div>
      </div>
</template>

<script>
export default{
    data() {
        return {
            
        }
    },
  
    mounted() {
        const counters = document.querySelectorAll('.value');
        const speed = 2000;

        counters.forEach( counter => {
        const animate = () => {
            const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;
            
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
                }else{
                counter.innerText = value;
                }
            
        }
        
        animate();
});



    },
}
</script>

<style>
.number-bg{
    background: linear-gradient(263.88deg, #40AAF8 49.29%, #1D33F8 102.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
</style>