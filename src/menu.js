
var menuitems = [

    'নিউজপেপার',
    'টিভি থিম',
    'প্রতিষ্ঠান',
    'ই-পেপার',
    'ই-কমার্স',
    'বিজনেস',
    'ব্লগ',
    'প্লাগিন',
    'পিএইচপি সাইট',
    'পার্সোনাল',
    'অন্যান্য থিম',
    'ভিডিও টিউটোরিয়াল',

]


var data = function data() {

      return {

        name: "SALAMOON ALAIKOOM",
        name2: "SALAMOON SALAMOON",
        some: "thing",
        homepage: 'https://themesbazar.com',
        menu: menuitems

      }


    };



    var template = ``;

/*
var app = Vue.createApp({ data, template });

  app.mount('#vue-h1');

  */

  var sets = { data };

  Vue.createApp(sets).mount('.mmin');

  // console.log(Vue);