Webcam.set({
	width: 350,
	height: 300,
	image_format: "png",
	png_quality: 90
});
cam = document.getElementById("camera");
Webcam.attach(cam);

function take_snapshot(data_uri) {
	Webcam.snap(function (data_uri) {
		document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="whatever">';
	});
}
