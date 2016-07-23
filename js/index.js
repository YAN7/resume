$(document).ready(function(){

	//显示信息
	$_Query.ajax('GET','./port/message.json',{},function(data){
		$('#loveword').text(data.motto);
		$('#info-email').text(data.email);
		$('#info-work').text(data.work);
		$('#info-phone').text('Tel:'+data.phone);
		$('#education-college').text(data.college);
		$('#education-major').text(data.major);
		$('#education-degree').text(data.degree);
		$('#education-lab').text(data.lab);

		var hobby=data.hobby;
		for(var hob in hobby){
			$('#hobby_war').append('<div class="hobbyInfo_list"><'+hobby[hob]+'/></div>');
		}

		var evaluation=data.evaluation;
		for(var eva in evaluation){
			$('#info_war').append('<div class="hobbyInfo_list"><'+evaluation[eva]+'/></div>');
		}

		var aPractice=data.practice[0];
		$('#practice-content').append(
			'<div class="company-logo" style="background: '+ aPractice.logo +'"></div>'+
			'<div class="company-dept">'+ aPractice.dept +'</div>'+
			'<div class="company-work">'+ aPractice.work +'</div>'+
			'<div class="company-time">'+ aPractice.time +'</div>'+
			'<div class="company-info">'+ aPractice.info +'</div>');

		var aSkill=data.skill[0];
		var hidden='';
		for(var index in aSkill){
			var adata=aSkill[index].split('-');
			$('#war-content-skill').append('<li class="skill_list">'+
							'<div class="course">'+index+':</div>'+
							'<div style="overflow: hidden;"><div id="'+index+'" class="courses" style="background-color: '+adata[1]+';width: 0;">'+adata[0]+'</div></div>'+
						'</li>');
			hidden+=index+':'+adata[0]+',';
		}
		$('#hidden').addClass(hidden);

		var aProject=data.project;
		for(var proj in aProject){
			if(proj<3){
				var aTime=aProject[proj].time.split('-');
				$('#war-project-right').append('<div class="project-list">'+
								'<div class="project-list-left"><div>'+aTime[0]+'</div><div>|</div><div>'+aTime[1]+'</div></div>'+
								'<div class="project-list-right">'+
									'<div class="project-list-name">'+
										'<a href="'+aProject[proj].link+'" target="_blank">'+aProject[proj].name+'</a>'+
									'</div>'+
									'<div class="project-list-work">'+
										'<span class="list-title">项目简介：</span>'+aProject[proj].work+
									'</div>'+
									'<div class="project-list-info">'+
										'<span class="list-title">职能分工：</span>'+aProject[proj].info+
									'</div>'+
								'</div>'+
							'</div>');
			}
		}
	});

	//浏览器窗口改变，设置页面尺寸
	setSize();

	$(window).resize(function(){
		setSize();
	});

	//fullpage插件设置页面切换
	$.fn.fullpage({
		scrollingSpeed: 500,
		css3: true,
		scrollOverflow: false,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		menu: 'header,aside',
		verticalCentered: false,
		onLeave: function(index , nextIndex, direction){
			if(index == 2){
				$('#war-2-sun').fadeOut(500);
				$('#info-photo').fadeOut(200,function(){
					$('#info-name').fadeOut(200,function(){
						$('#info-love').animate({width: '0'},200,function(){
							$('#loveword').fadeOut(200,function(){
								$('#info-email').fadeOut(200,function(){
									$('#info-phone').fadeOut(200,function(){
										$('#info-work').fadeOut(200);
									});
								});
							});
						});
					});
				});
			}
			if(index == 3){
				$('#war-1-moon').animate({
					right: '-200px'
				},300);
				$('.courses').animate({width: 0},300);
				$('#war-skill-bg').fadeOut(200);
			}
			if(index == 4){
				$('#practice-cloud').animate({
					left: '150%'
				},300);
				$('.company-logo').animate({
					opacity: 0
				});
				$('#practice-title').animate({
					height: 0,
					width: 0,
					left: '90px'
				},300);
			}
			if(index == 5){
				$('#war-project-right').fadeOut(400);
				$('#war-project-bg').animate({
					left: '-100px'
				},200);
				$('.topLeft_bg,.topRight_bg').fadeOut(300);
			}
			if(index == 6){
				$('.education-list-con').slideUp(300);
				$('#education-title-sty').animate({
					left: '900px'
				});
			}
			if(index == 7){
				$('#hobby_main').animate({
					'margin-top': '50%',
					'margin-left': '50%',
					height: '0',
					width: '0'
				});
			}
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-home').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
			}
			if(index == 2){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-info').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				$('#war-2-sun').stop();
				$('#war-2-sun').fadeIn(2000);
				$('#info-photo').fadeIn(500,function(){
					$('#info-name').fadeIn(500,function(){
						$('#info-love').animate({width: '100%'},500,function(){
							$('#loveword').fadeIn(500,function(){
								$('#info-email').fadeIn(500,function(){
									$('#info-phone').fadeIn(500,function(){
										$('#info-work').fadeIn(500);
									});
								});
							});
						});
					});
				});
			}
			if(index == 3){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-skill').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});

				$('#war-1-moon').animate({
					right: '200px'
				},800);
				var hiddenData=$('#hidden').attr('class').split(',');
				for(var i=0; i<hiddenData.length-1; i++){
					var skillName=hiddenData[i].split(':')[0];
					var skillNumber=hiddenData[i].split(':')[1];
					$('#'+skillName).animate({width: skillNumber},800,'easeOutQuart');
					//alert(skillName+','+skillNumber);
					$('#war-skill-bg').fadeIn(600);
				}
			}
			if(index == 4){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-practice').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});

				$('#practice-title').animate({
					height: '390px',
					width: '180px',
					left: 0
				},1000);
				$('#practice-cloud').animate({
					left: 0
				},1000);
				$('.company-logo').animate({
					opacity: 1
				});
			}
			if(index == 5){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-project').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				$('#war-project-right').fadeIn(800);
				$('#war-project-bg').animate({
					left: 0
				},500);
				$('.topLeft_bg,.topRight_bg').fadeIn(1200);
			}
			if(index == 6){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-education').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				$('#education-college').slideDown(800,'easeOutElastic');
				var set_1=setTimeout(function(){$('#education-major').slideDown(800,'easeOutElastic');},200);
				var set_2=setTimeout(function(){$('#education-degree').slideDown(800,'easeOutElastic');},400);
				var set_3=setTimeout(function(){$('#education-lab').slideDown(800,'easeOutElastic');},600);
				$('#education-title-sty').animate({
					left: '450px'
				},800,'easeInOutExpo');
			}
			if(index == 7){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-hobby').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeIn();
				$('#hobby_main').animate({
					'margin-top': 0,
					'margin-left': 0,
					height: '500px',
					width: '1000px'
				},1000,'easeOutElastic');
			}
			if(index == 8){
				$('.page').css({"background": "url('./images/ico_bg.png') 0 -50px no-repeat"});
				$('#page-more').css({"background": "url('./images/ico_bg.png') -14px -50px no-repeat"});
				//$('header').fadeOut();
			}
		}
	});

	//footer部分动画循环
	setInterval(footerAnimate,1000);

});

//设置footer部分动画
var footerAnimate=function(){
	$('.message-callMe-click').animate({
		top: '5px'
	},500,function(){
		$('.message-callMe-click').animate({
			top: '0px'
		},500);
	});
};

//设置元素尺寸
var setSize=function(){
	var nWinHeight=$(window).height();

	$('.war').css({'height': nWinHeight});
	$('aside').css({'top': (nWinHeight-$('aside').height())/2});

	var nContentTop=$('#content').css('top');

	var marginTop=(nWinHeight-520)/2>100?(nWinHeight-520)/2:100;
	$('#war-content-skill,#info-content').css({'margin-top':marginTop});
	$('#practice-content').css({'padding-top':marginTop});
	$('#project-content').css({'padding-top':marginTop});
	$('#education-content').css({'padding-top':marginTop});
	$('#hobby-content').css({'padding-top':marginTop});
};
