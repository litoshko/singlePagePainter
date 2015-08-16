var N=16;
function makePage(){
	var n = $('input').val();
	var size = Math.floor(400/n);
	var str = '';
	for(var i=0; i<n; i++)
		for(var j=0; j<n; j++)
		{
			str+='<div class="block" style="height:'+size+'px; width:'+size+'px"></div>'
		}
	var matrixSize = size*n;
	$('#matrix').width(matrixSize+'px');
	$('#matrix').height(matrixSize+'px');
	$('#matrix').empty();
	$('#matrix').append(str);
};
$(document).ready(function(){
	$('div#matrix').on('mouseenter','div.block',function(){
		var opacity = $(this).css('opacity');
		var opacity = 0.1*(1 + 9*parseFloat(opacity)%10);
		$(this).fadeTo('fast',0.1+opacity);
	});
});