// $(document).ready(function() {
	function clickfunc(obj){
		var txt = $(obj).text();
		$(".categories-display").text(txt);
		console.log(txt);
	}	
	function filter(obj){
		var content = $(obj).html();
		$(".sortby-btn").html('Sort by ' +content+'<i class="fas fa-caret-down caret-down-last"></i>');
	}
// });