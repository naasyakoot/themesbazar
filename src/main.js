var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON"
			}


		};


		var template = `
		<div class="container">
                    <div class="row">
                        <div class="col-md-10 col-sm-10">
<div class="header-address">
                            <i class="fa fa-phone"><i class="fa fa-phone"></i> +88 01756-259085 (Direct Phone Call, Sms Me if Some Reason Phone is offline , Facebook Message Email or, skype -> ), live:seumworldinbangladesh <i class="fa fa-envelope-o"></i> seumworldinbangladesh@gmail.com
                        </div>                        </div>
                        <div class="col-md-2 col-sm-2">
<div class="social_icons" >
							<ul>
								<li><a href="https://www.facebook.com/seum11/" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#" target="_blank" title="youtube"><i class="fa fa-youtube"></i></a></li>
								
								
							</ul>
						</div>                        </div>
                    </div>
                </div>

            `;

/*
var app = Vue.createApp({ data, template });

	app.mount('#vue-h1');

	*/

	var sets = { data, template };

	Vue.createApp(sets).mount('.top-header');

	// console.log(Vue);
