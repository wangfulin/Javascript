window.onmouseup=function(){
	selection=document.getSelection();
	if(selection.rangeCount>0){
		var range=selection.getRangeAt(0).toString();
		if(range&&range.trim()!==''){
			console.log(range);
		}
}};