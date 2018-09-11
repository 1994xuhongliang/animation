window.onload = function() {
	let icon_0 = document.getElementById('icon_0'),
	icon_1 = document.getElementById('icon_1'),
	icon_2 = document.getElementById('icon_2'),
	icon_3 = document.getElementById('icon_3'),
	icon_4 = document.getElementById('icon_4');
	



	setTimeout(()=>{
		icon_0.style.display = 'block';
	}, 500)
	setTimeout(()=>{
		icon_1.style.display = 'block';
	}, 1500)
	setTimeout(()=>{
		icon_2.style.display = 'block';
	}, 2500)

	setTimeout(()=> {
		icon_3.style.display = 'block';
	}, 3500)

	setTimeout(()=> {
		icon_4.style.opacity = 1;
		let init_width = 442;
		let count = 0;
		let num = 150;
		var interval = setInterval(()=>{
			if(count<150) {
				icon_4.style.width = init_width + (count++)*2 + 'px';
				count ++;
			}else {
				if(num !== 0) {
					icon_4.style.width = init_width + (num--)*2 + 'px';
				}else {
					count = 0; // 重新进入外层判断
					num = 150; // 很重要，不然在第二轮会有跳变
				}
			}

		}, 10)
	}, 4500);
}