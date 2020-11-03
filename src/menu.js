
var menuitems = [
  
  {
    'name': 'নিউজপেপার',
    'link': 'https://themesbazar.com/category/newspaperthemes/'
  },
  
  {
    'name': 'টিভি থিম',
    'link': 'https://themesbazar.com/category/tvthemes/'
  },

  {
    'name': 'প্রতিষ্ঠান',
    'link': '#'
  }

  ];



var data = function data() {

      return {

        name: "SALAMOON ALAIKOOM",
        name2: "SALAMOON SALAMOON",
        some: "thing",
        homepage: 'https://themesbazar.com',
        

        menulists : menuitems

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