import videojs from  'react-video-h265';

(() => {
	let num = 9;
	let html = '';
	let height=200;
	let width=360;

	for (let i = 0; i < num; i++) {
		html += createDom(i);
	}
	document.getElementById('container').innerHTML = html;

	videojs.options.liveui=true;
	for (let i = 0; i < num; i++) {
		let player = videojs('player' + i, {
			techOrder: [
				'html5',
				'flvh265'
			],
			liveui:true,
			controlBar:{
				volumePanel:{inline:false},
				pictureInPictureToggle:false
			},
			sources: [
				{
				  src: 'http://streetcatpull.hellobike.com/live/3974065447438918651_0.flv',
				  type: 'video/x-flv-h265',
				}
			  ]
		});
		player.on("error",function(){
			console.log(this.error());
		});
		player.on("loadstart",function(){
			console.log("loadstart");
			console.time()
		});
		player.on("loadedmetadata",function(){
			console.log("loadedmetadata");
			console.timeEnd()
		});
	}

	function createDom(i) {
		return `
		<video id="player${i}" height="${height}" width="${width}" class="video-js vjs-big-play-centered"`
		 +`controls `
		 +`autoplay `
		 +`loop `
		 +`islive `
		 +`ish265 `
		 +`hasvideo `
		 +`hasaudio `
		+`>`
		+`</video>`;
	}
})();