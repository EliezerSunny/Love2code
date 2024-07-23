
document.getElementById('year').innerHTML = new Date().getFullYear(); // Year only



	let logo = "<img src='img/love2code.png' alt='Love2Code'>";
	let logoLink = "<a href='https://www.love2code.site'>" + logo + "</a>";
	document.getElementById('logo').innerHTML = logoLink;

	let logo2 = "<img src='img/love2code.png' alt='Love2Code'>";
	let logoLink2 = "<a href='https://www.love2code.site'>" + logo2 + "</a>";
	document.getElementById('logo2').innerHTML = logoLink2;

	
	let ads = "<img src='img/' alt='unavailable for now!'>";
	let result = "<a href='#' target='_blank'>" + ads + "</a>";
	document.getElementById('ads').innerHTML = result;


	// POST LINKS
	let post = "What is coding?";
	let postLink = "<a href='what-is-coding'>" + post + "</a>";
	document.getElementById('post').innerHTML = postLink;

	let post2 = "How to make your first website";
	let postLink2 = "<a href='how-to-make-your-first-website'>" + post2 + "</a>";
	document.getElementById('post2').innerHTML = postLink2;

	let post3 = "Introduction to Web Design";
	let postLink3 = "<a href='introduction-to-web-design'>" + post3 + "</a>";
	document.getElementById('post3').innerHTML = postLink3;

	let post4 = "Introduction to Web Development";
	let postLink4 = "<a href='introduction-to-web-development'>" + post4 + "</a>";
	document.getElementById('post4').innerHTML = postLink4;

	let post5 = "How to start a coding project";
	let postLink5 = "<a href='how-to-start-a-coding-project'>" + post5 + "</a>";
	document.getElementById('post5').innerHTML = postLink5;

	let post6 = "How to become a coder";
	let postLink6 = "<a href='how-to-become-a-coder'>" + post6 + "</a>";
	document.getElementById('post6').innerHTML = postLink6;

	let post7 = "PHP Tutorial – How to Setup PHP and XAMPP for Your Project";
	let postLink7 = "<a href='how-to-get-started-with-php'>" + post7 + "</a>";
	document.getElementById('post7').innerHTML = postLink7;
	// POST LINKS ENDS


	// footer links
	let facebook = "<i class='fa fa-facebook'></i>";
	let facebookLink = "<a href='https://www.facebook.com/Love2Code-110866861547484/' target='_blank'>" + facebook + "</a>";
	document.getElementById('facebook').innerHTML = facebookLink;

	let google = "<i class='fa fa-google'></i>";
	let googleLink = "<a href='https://www.love2code.site' target='_blank'>" + google + "</a>";
	document.getElementById('google').innerHTML = googleLink;

	let whatsapp = "<i class='fa fa-whatsapp'></i>";
	let whatsappLink = "<a href='https://wa.me/message/MKPTCBT2VUW6J1' target='_blank'>" + whatsapp + "</a>";
	document.getElementById('whatsapp').innerHTML = whatsappLink;

	let email = "<i class='fa fa-envelope'></i>";
	let emailLink = "<a href='mailto:love2code.webdev@gmail.com' target='_blank'>" + email + "</a>";
	document.getElementById('email').innerHTML = emailLink;

	// let youtube = "<i class='fa fa-youtube-square'></i>";
	// let youtubeLink = "<a href='https://youtube.com/channel/UCdL9r7o6IMd8y36Ww1fg-cg' target='_blank'>" + youtube + "</a>";
	// document.getElementById('youtube').innerHTML = youtubeLink;

	let twitter = "<i class='fa fa-twitter'></i>";
	let twitterLink = "<a href='https://mobile.twitter.com/Eliazer_sunny' target='_blank'>" + twitter + "</a>";
	document.getElementById('twitter').innerHTML = twitterLink;

	//footer links ends


	var editor = ace.edit('editor');
	editor.setTheme('ace/theme/monokai');
	editor.session.setMode('ace/mode/php');





(function () {
	$('.hamburger').on('click', function() {
		$('.fas fa-bars').toggleClass('animate');
		$('.site-nav-menu').toggleClass('active');
		return false;
	})

	// $('.has-children').on('click', function() {
	// 	$(this).children('ul').slideToggle('slow', 'swing');
	// 	$('.icon-arrow').toggleClass('open');
	// });

})


function openNav() {
		// body...
		document.getElementById("mySidenav").style.width = "200px";
	}

	function closeNav() {
		// body...
		document.getElementById("mySidenav").style.width = "0";
	}