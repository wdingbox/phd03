
$(function(){
	$('form :input').blur(function(){
	var $parent = $(this).parent();
	var $btn = $('form .btn');
	//验证邮箱
		if($(this).is('#email')){
		if( this.value==""||(this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
			var errorMg='The email address is not legitimate.';
			$parent.append('<span class="formtips onError">'+errorMsg+'</span>');			
			}else{
				var okMsg = '输入正确.';
				$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
				}			
		}	
		})
	
	})

    // Search
	 $(document).ready(function ($) {
    (function() {
        var $btn = $('#inp_submit');
        var $search = $('#t_search');
        var $close = $search.find('.back');

        $btn.on('click', function() {
            $search.show();
        });

        $close.on('click', function() {
            $search.hide();
        });
    })();
	})
	
	//20180827 navT2

	


