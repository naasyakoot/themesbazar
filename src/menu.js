
var menuitems = [{
    'title': 'Home',
    'id': 'home'
  },
  {
    'title': 'About',
    'id': 'about'
  },
  {
    'title': 'Contact',
    'id': 'contact'
  }];
/*
var menulinks = [


'https://themesbazar.com/category/newspaperthemes/'


]*/


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