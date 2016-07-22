$(document).ready(function(){

	$.ajax({
		url: './port/message.json',
		type: 'get',
		async: false,
		dataType: 'json',
		success: function(data){
			for(var i in data.project){
				var width='100%';
				if(data.project[i].type=='h5'){
					width='400px';
				}else{
					width='100%';
				}
				var name=data.project[i].name.replace(/\（[\u2E80-\u9FFF,\W,\w]*\）/,'');
				$('#main').append('<a style="background: '+ data.project[i].bg_color +'" href="#page'+ i +'" class="main-list">'+ name +'</a>');
				$('body').append(
					'<div id="war-'+ i +'" class="war war-'+ i +' section" style="background: '+ data.project[i].bg_color +'">'+
						'<div class="page_main">'+
							'<div class="info info_word">'+
								'<div class="info_time">开发时间：'+ data.project[i].time +'</div>'+
								'<div class="info_wra">'+
									'<div class="info_name">'+ data.project[i].name +'</div>'+
									'<div class="info_work">'+ data.project[i].work +'</div>'+
									'<div class="info_info">'+ data.project[i].info +'</div>'+
									'<a class="info_link" href="'+ data.project[i].link +'" target="_blank">访问 》</a>'+
								'</div>'+
							'</div>'+
							'<div class="info info_img" style="background: '+ data.project[i].bg_image +'; background-size: 100%; width: '+ width +'"></div>'+
						'</div>'+
					'</div>');
			}
		}
	});
	var page=['page'];
	var len=document.getElementsByClassName('war').length-1;
	for(var i=0; i<len; i++){
		page.push('page'+i);
	}
	// alert(page);
	
	//fullpage插件设置页面切换
	$.fn.fullpage({
		scrollingSpeed: 500,
		css3: true,
		scrollOverflow: false,
		anchors: page,
		menu: 'header,#back',
		verticalCentered: false,
		afterLoad: function(anchorLink, index){
			if(anchorLink == 'page'){
				//alert('ss');
				$('#back').animate({
					'right': '-40px'
				});	
				$('#logo').css({'background': '#ff9daa', 'color': '#fff'});
			}else{
				$('#back').animate({
					'right': '0px'
				});
				$('#logo').css({'background': '#fff', 'color': '#999'});
			}
		}
	});
});