var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON"
			}


		};


		var template = `
		 <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3">
                        <div class="logo">
                            <a href="https://themesbazar.com/"><img src="https://themesbazar.com/wp-content/themes/ThemesbazarTheme/assets/img/ThemesBazar.jpg" alt="Themes Bazar" title="Themes Bazar"></a>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-3">
                        <div class="support">
                            <i class="fa fa-cubes"></i>
                           <h4><a href="https://themesbazar.com/affiliate/"> এফিলিয়েট করুন</a></h4>
                           <h5><a href="https://themesbazar.com/affiliate/">এফিলিয়েট করে আয় করুন</a></h5>
                        </div>
                    </div>    
                       
                    <div class="col-md-3 col-sm-3">
                        <div class="support">
                           <i class="fa fa-lock"></i>
                           <h4><a href="https://popular-it.com/register.php" target="_blank">লগ ইন / সাইন আপ </a></h4>
                           <h5><a href="https://popular-it.com/register.php" target="_blank">আমাদের সাথে থাকুন</a></h5>
                        </div>
                    </div> 
                    
                                   
                    <div class="col-md-2 col-sm-3">
                        <div class="english-verson">
                            <a href="https://themesbazar.com/en" target="_blank"> English Version</a>
                        </div>
                                            
                    </div>
                    
                </div>
            </div>

            `;

/*
var app = Vue.createApp({ data, template });

	app.mount('#vue-h1');

	*/

	var sets = { data, template };

	Vue.createApp(sets).mount('.logo-reg-section');

	// console.log(Vue);