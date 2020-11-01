var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON"
			}


		};


		var template = `
		  <div class="container">
                <div class="shifter">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 ">
                       <div class="search-content">
                            <h4>আপনি কি আপনার পছন্দের থিম গুলো খুঁজছেন?</h4>
                            আমাদের রয়েছে ১০০+ প্রিমিয়াম ওয়ার্ডপ্রেস থিম। আমাদের রয়েছে নিউজপেপার, অনলাইন টিভি, ই-পেপার, ই-কমার্স, কর্পোরেট, বিজনেস, পার্সোনাল ও শিক্ষাপ্রতিষ্ঠানের থিম।
                       </div>
                       
                    </div>
                </div>
                 <div class="row shiftertwo">
                    <div class="col-md-6 col-md-offset-3 ">
                        <form class="example" method="get" action="https://themesbazar.com/">
                      <input type="text" placeholder="আপনার থিমের নাম লিখুন" name="s" value="">
                      <button type="submit"><i class="fa fa-search"></i> খুঁজুন</button>
                    </form>
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

	Vue.createApp(sets).mount('.search-section');

	// console.log(Vue);