$('input[type=text]').keypress(function(e){
	if(e.which === 13){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() +" "+ " </li>");
		$(this).val("");
	}
});

$("ul").on("click","li",function(){
	$(this).toggleClass("strikeoff");
});	


$('ul').on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$('.fa-edit').click(function(){
	$("input[type=text]").fadeToggle();
});


