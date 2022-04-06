var bts = document.querySelectorAll("button");
var player = document.getElementById("choose");
var choose__robot = document.getElementById("choose__robot");
var hand = document.getElementById("hand");
var dam = document.getElementById("dam");
var keo = document.getElementById("keo");
var resuft = document.getElementById("resuft");


var robot = [
	"robot đã chọn lá" ,
	"robot đã chọn kéo" ,
	"robot đã chọn đâm" 
]
bts[0].addEventListener("click", function () {
	player.innerHTML = "bạn đã chọn đấm"
	choose__robot.innerHTML = robot[Math.floor(Math.random() * 3)]; 
	if (choose__robot.innerHTML == "robot đã chọn lá") {
		resuft.innerHTML = "bạn thua";
		hand.style.display = "block";
		keo.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn kéo") {
		resuft.innerHTML = "bạn thắng";
		keo.style.display = "block";
		hand.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn đâm") {
		resuft.innerHTML = "bạn hòa "
		dam.style.display = "block"
		keo.style.display = "none";
		hand.style.display = "none";
	}
});
bts[1].addEventListener("click", function () {
	player.innerHTML = "bạn đã chọn lá"
	choose__robot.innerHTML = robot[Math.floor(Math.random() * 3)]; 
	if (choose__robot.innerHTML == "robot đã chọn lá") {
		resuft.innerHTML = "bạn hòa";
		hand.style.display = "block";
		keo.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn kéo") {
		resuft.innerHTML = "bạn thua";
		keo.style.display = "block";
		hand.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn đâm") {
		resuft.innerHTML = "bạn thắng ";
		dam.style.display = "block";
		keo.style.display = "none";
		hand.style.display = "none";
	}
});
bts[2].addEventListener("click", function () {
	player.innerHTML = "bạn đã chọn kéo"
	choose__robot.innerHTML = robot[Math.floor(Math.random() * 3)];
	if (choose__robot.innerHTML == "robot đã chọn lá") {
		resuft.innerHTML = "bạn thắng";
		hand.style.display = "block";
		keo.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn kéo") {
		resuft.innerHTML = "bạn hòa";
		keo.style.display = "block";
		hand.style.display = "none";
		dam.style.display = "none";
	}
	else if (choose__robot.innerHTML == "robot đã chọn đâm") {
		resuft.innerHTML = "bạn thua ";
		dam.style.display = "block";
		keo.style.display = "none";
		hand.style.display = "none";
	}
})





