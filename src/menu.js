

var data = function data() {

      return {

        name: "SALAMOON ALAIKOOM",
        name2: "SALAMOON SALAMOON",
        some: "thing"

      }


    };


    var template = `

    <a class="py-2 d-none d-md-inline-block" href="#">নিউজপেপার</a>
    <a class="py-2 d-none d-md-inline-block" href="#">টিভি থিম</a>
    <a class="py-2 d-none d-md-inline-block" href="#">প্রতিষ্ঠান</a>
    <a class="py-2 d-none d-md-inline-block" href="#">ই-পেপার</a>
    <a class="py-2 d-none d-md-inline-block" href="#">ই-কমার্স</a>
    <a class="py-2 d-none d-md-inline-block" href="#">বিজনেস</a>
    <a class="py-2 d-none d-md-inline-block" href="#">ব্লগ</a>
    <a class="py-2 d-none d-md-inline-block" href="#">প্লাগিন</a>
    <a class="py-2 d-none d-md-inline-block" href="#">পিএইচপি সাইট</a>
    <a class="py-2 d-none d-md-inline-block" href="#">পার্সোনাল</a>
    <a class="py-2 d-none d-md-inline-block" href="#">অন্যান্য থিম</a>
    <a class="py-2 d-none d-md-inline-block" href="#">ভিডিও টিউটোরিয়াল</a>


  

            `;

/*
var app = Vue.createApp({ data, template });

  app.mount('#vue-h1');

  */

  var sets = { data, template };

  Vue.createApp(sets).mount('.mmin');

  // console.log(Vue);