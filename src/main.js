


var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON",
				arrNav: [{
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
  }]
			}

			


		};


		var template = `
		

            `;

/*
var app = Vue.createApp({ data, template });

	app.mount('#vue-h1');

	*/

	var sets = { data };

	Vue.createApp(sets).mount('.top-header');

	// console.log(Vue);