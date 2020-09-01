<template>
  <div>
    <div class="newfinno-con"></div>
    <div class="tips">
      <h2 class="b-text">矮油~~您访问的页面不在地球上...</h2>
      <p class="m-box">
        <span class="m-text">休息一下~~</span>
        <router-link tag="a" :to="{name:'home'}">返回首页</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
    name:'error',
    // data(){
    //     return{
    //         seconds:5,
    //         timer:null
    //     }
    // },
    // created () {
    //     this.leftTime();
    // },
    // computed: {
    //     ...mapState({
    //         userType: function (state) {
    //             return state.userInfo.type;
    //         }
    //     })
    // },
    // methods: {
    //     leftTime(){
    //         this.timer = setInterval(()=>{
    //             if(this.seconds<=1){
    //                 clearInterval(this.timer)
    //                 if(this.userType==6){
    //                    this.$router.push({
    //                         name:'enlist'
    //                     }) 
    //                 }else{
    //                     this.$router.push({
    //                         name:'home'
    //                     })
    //                 }
    //             }else{
    //                 this.seconds--;
    //             }
    //         },1000)
    //     }
    // },
    // destroyed () {
    //     clearInterval(this.timer);
    // }
}
</script>
