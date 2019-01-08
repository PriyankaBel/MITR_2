var objElem = {};
var jsonObj = {
	dragElements: [
		{
			left: 100,
			top: 50,
			text: "1",
			color: "#b16565",
			width: 100,
			height: 100
		},
		{
			left: 100,
			top: 200,
			text: "2",
			color: "#4f9c4f",
			width: 100,
			height: 100
		},
		{
			left: 100,
			top: 350,
			text: "3",
			color: "#1eb4c7",
			width: 100,
			height: 100
		},
		{
			left: 100,
			top: 500,
			text: "4",
			color: "#ffa500",
			width: 100,
			height: 100
		}
	],
	dropElements: [
		{
			left: 400,
			top: 50,
			text: "2",
			width: 100,
			height: 100,
			borderStyle: "solid", 
			borderColor: "#4f9c4f",
    		borderWidth: 10
			
		},
		{
			left: 400,
			top: 200,
			text: "4",
			width: 100,
			height: 100,
			borderStyle: "solid", 
			borderColor: "#ffa500",
    		borderWidth: 10
    	},
		{
			left: 400,
			top: 350,
			text: "1",
			width: 100,
			height: 100,
			borderStyle: "solid", 
			borderColor: "#b16565",
    		borderWidth: 10
		},
		{
			left: 400,
			top: 500,
			text: "3",
			width: 100,
			height: 100,
			borderStyle: "solid", 
			borderColor: "#1eb4c7",
    		borderWidth: 10
		}
	],
	displayImg :
	{
		width: 50,
		height: 50,
		left: 550,
		position: "absolute"
	},
	array:[]
};
function init(){
	for(var i=0; i<jsonObj.dragElements.length; i++){
		displayDrag(i);
		displayDrop(i);
	}
}
function displayDrag(id){
	var pointer = jsonObj.dragElements[id];
	objElem['drag_'+id] = document.createElement('div');
	document.body.appendChild(objElem['drag_'+id]); 
	objElem['drag_'+id].class = "dragClass";
	objElem['drag_'+id].id = pointer.text;
	objElem['drag_'+id].style.left = pointer.left + 'px';
	objElem['drag_'+id].style.top = pointer.top + 'px';
	objElem['drag_'+id].style.width = pointer.width + 'px';
	objElem['drag_'+id].style.height = pointer.height + 'px';
	objElem['drag_'+id].style.backgroundColor = pointer.color;
	objElem['drag_'+id].style.borderRadius= 56+'px';
	objElem['drag_'+id].style.position = "absolute";
	objElem['drag_'+id].draggable = 'true';
	objElem['drag_'+id].ondragstart=function (ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}
	objElem['drag_'+id].ondragover=function(ev) {
	   ev.preventDefault();
	}
}
function displayDrop(id){
	var pointer = jsonObj.dropElements[id];
	objElem['drop_'+id] = document.createElement('div'); 
	document.body.appendChild(objElem['drop_'+id]);
	objElem['drop_'+id].class = "dropClass";
	objElem['drop_'+id].style.left = pointer.left + 'px';
	objElem['drop_'+id].style.top = pointer.top + 'px';
	objElem['drop_'+id].style.width = pointer.width + 'px';
	objElem['drop_'+id].style.height = pointer.height + 'px';
	objElem['drop_'+id].style.borderColor = pointer.borderColor;
	objElem['drop_'+id].style.borderStyle = pointer.borderStyle;
	objElem['drop_'+id].style.borderWidth = pointer.borderWidth+'px';
	objElem['drop_'+id].style.position = "absolute";
	
	objElem['drop_'+id].ondrop=function(ev){
		
		jsonObj.array[id] = ev.dataTransfer.getData("text");
		document.getElementById(jsonObj.array[id]).style.left=parseInt(ev.target.style.left)+10+'px'; //drag
		document.getElementById(jsonObj.array[id]).style.top=parseInt(ev.target.style.top)+10+'px';	
	}
	
	objElem['drop_'+id].ondragover=function(ev) {
		
		ev.preventDefault();
	}
}
function checkMatch()
{	
	var pointer = jsonObj.displayImg;
	for(var i=0;i<=3;i++)
	{
		objElem.displayImg=document.createElement('img');
		objElem.displayImg.style.left = pointer.left + 'px';
		objElem.displayImg.style.top = jsonObj.dropElements[i].top + 40+ 'px';
		objElem.displayImg.style.width = pointer.width + 'px';
		objElem.displayImg.style.height = pointer.height + 'px';
		objElem.displayImg.style.position = "absolute";
		if (jsonObj.array[i]  ==  jsonObj.dropElements[i].text) 
		{
			objElem.displayImg.src="truetick.jpg";
			document.body.appendChild(objElem.displayImg);
			objElem.displayImg.style.visibility="visible";
		}
		else
		{
			objElem.displayImg.src="falsetick.jpg";
			document.body.appendChild(objElem.displayImg);
			document.getElementById(jsonObj.array[i]).style.left='100px';
			document.getElementById(jsonObj.array[i]).style.top=jsonObj.dragElements[i].top+'px';
		}
	}
}