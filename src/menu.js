

var data = function data() {

      return {

        name: "SALAMOON ALAIKOOM",
        name2: "SALAMOON SALAMOON",
        some: "thing",
        somes: ['ananas','melon','date']

      }


    };


    var template = `{{some}}`;

/*
var app = Vue.createApp({ data, template });

  app.mount('#vue-h1');

  */

  var sets = { data };

  Vue.createApp(sets).mount('.mmin');

  // console.log(Vue);