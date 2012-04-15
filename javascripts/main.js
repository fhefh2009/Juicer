$(document).ready(function() {
	var tpl=$('.J_tpl').html().replace(/&lt;/g,'<').replace(/&gt;/g,'>');
	var data={
		list:[
			{name:'guokai',show:true},
			{name:'benben',show:false},
			{name:'dierbaby',show:true},
		],
		blah:[
			{num:1},
			{num:2},
			{num:3,inner:[
				{'time':'15:00'},
				{'time':'16:00'},
				{'time':'17:00'},
				{'time':'18:00'}
			]},
			{num:4}
		]
	};

	$('.J_render').click(function() {
		var result=juicer && juicer.to_html(tpl,data);
		result=result.replace(/</g,'&lt;').replace(/>/g,'&gt;');
		$('.J_result').html(result).fadeOut().fadeIn();
	});
});
