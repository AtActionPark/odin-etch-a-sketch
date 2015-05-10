var NormalMode = true;
var RandomMode = false;
var OpacityMode = false;
var TrailMode = false
var gridSize = 16
var size = 480/gridSize;

$(document).ready(function(){

	DrawGrid(gridSize);
	ChoseMode();
	
});

function ChoseMode()
{
	if(NormalMode)
		Color();
	else if (RandomMode)
		RandomColor();
	else if (OpacityMode)
		ChangeOpacity();
	else if (TrailMode)
		Trail();
}


function DrawGrid(dim){
	for(var i = 0;i<dim;i++){
		for(var j = 0;j<dim;j++){
			var square = document.createElement('div');
			square.className = 'square';
			$(square).css("width",size);
			$(square).css("height",size);
			$("#container").append(square);
		}
	}	
}

function Color()
{
	$(".square").mouseenter(function(){
		$(this).css("background-color", "#FFFFFF" )
	});
}


function ChangeOpacity()
{
	$(".square").mouseenter(function(){
		var op = $(this).css('opacity')-0.1;
		$(this).css("opacity", op);
	});
}

function Trail()
{
	$(".square").mouseenter(function(){
		$(this).css("opacity", 0);
	});
	$(".square").mouseenter(function(){
		$(this).fadeTo("slow", 1);
	});
}


function RandomColor()
{
	if(!RandomMode)
		return;
	$(".square").mouseenter(function(){
		$(this).css("background-color", GetRandomColor() )
	});
}


function GetColor(r,g,b,a){
	var color = "rgba(" +r+","+g+","+b+","+a+")";
	return color;
}

function GetRandomColor(){
	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);
	var a = 0.1;

	return GetColor(r,g,b,1);
}

function SetModeNormal(){
	NormalMode = true;
	RandomMode = false;
	OpacityMode = false;
	TrailMode = false;
	Reset();}

function SetModeRandom(){
	NormalMode = false;
	RandomMode = true;
	OpacityMode = false;
	TrailMode = false;
	Reset();}

function SetModeOpacity(){
	NormalMode = false;
	RandomMode = false;
	OpacityMode = true;
	TrailMode = false;
	Reset();}

function SetModeTrail(){
	NormalMode = false;
	RandomMode = false;
	OpacityMode = false;
	TrailMode = true;
	Reset();}

function Reset(){
$("#container").empty();
	DrawGrid(gridSize);
	ChoseMode();
}

function ChangeGrid(){
	gridSize = prompt('Choose New Size');
	if (gridSize==null)
		gridSize=16;
	size = 480/gridSize;
	Reset();
}