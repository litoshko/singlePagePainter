var N=16;
function makePage(n){
	var size = Math.floor(400/n);
	var str = '';
	for(var i=0; i<n; i++)
		for(var j=0; j<n; j++)
		{
			str+='<div class="block" style="height:'+size+'px; width:'+size+'px"></div>'
		}
	console.log(str);
	$('#matrix').append(str);
};
$(document).ready(function(){
	$('.block').mouseenter(function(){
		var opacity = $(this).css('opacity');
		var opacity = 0.1*(1 + 9*parseFloat(opacity)%10);
		console.log(opacity);
		$(this).fadeTo('fast',0.1+opacity);
	});
});