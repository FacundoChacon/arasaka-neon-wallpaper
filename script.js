(function () {
	"use strict";

	const canvas = document.getElementById("codeRain");
	const ctx = canvas.getContext("2d");

	const BASE_SIZE = 15;
	const CHARS =
		"01ABCDEFabcdef$#{}[]();:<>=+-*/._\\|&%!?^~" +
		"0010110101010100" +
		"ｱﾗｻｶ";

	let W = 0;
	let H = 0;
	let dpr = 1;
	let columns = [];
	let charCount = 0;

	function randChar() {
		return CHARS[Math.floor(Math.random() * CHARS.length)];
	}

	function resize() {
		dpr = Math.min(window.devicePixelRatio || 1, 1.5);
		W = Math.floor(window.innerWidth * dpr);
		H = Math.floor(window.innerHeight * dpr);
		canvas.width = W;
		canvas.height = H;

		const spacing = BASE_SIZE * dpr;
		const size = BASE_SIZE * dpr;
		ctx.font = size + 'px "Consolas", "Courier New", monospace';
		ctx.textAlign = "left";
		ctx.textBaseline = "top";

		const count = Math.max(1, Math.floor(W / spacing));
		charCount = Math.ceil(H / size) + 4;
		columns = [];

		for (let i = 0; i < count; i++) {
			const chars = [];
			for (let c = 0; c < charCount; c++) chars.push(randChar());
			columns.push({
				x: i * spacing,
				y: Math.random() * H,
				speed: (0.35 + Math.random() * 1.05) * dpr,
				alpha: 0.04 + Math.random() * 0.12,
				bright: Math.random() < 0.1,
				phase: Math.random() * Math.PI * 2,
				twSpeed: 0.02 + Math.random() * 0.06,
				chars: chars
			});
		}
	}

	function tick() {
		ctx.fillStyle = "rgba(5,0,0,0.13)";
		ctx.fillRect(0, 0, W, H);

		for (const col of columns) {
			col.y -= col.speed;
			if (col.y < -BASE_SIZE * dpr) {
				col.y = H + Math.random() * BASE_SIZE * dpr * 4;
				col.speed = (0.35 + Math.random() * 1.05) * dpr;
				col.alpha = 0.04 + Math.random() * 0.12;
				col.bright = Math.random() < 0.1;
				col.phase = Math.random() * Math.PI * 2;
				col.twSpeed = 0.02 + Math.random() * 0.06;
			}
			col.phase += col.twSpeed;
			const tw = (0.5 + 0.5 * Math.sin(col.phase)) * (Math.random() < 0.03 ? 0.45 : 1);

			let i = 0;
			let y = col.y;
			while (y > -BASE_SIZE * dpr && i < charCount) {
				if (Math.random() < 0.003) col.chars[i] = randChar();
				const ch = col.chars[i];
				const glow = i === 0 || (i !== 0 && Math.random() < 0.004);

				if (glow) {
					ctx.shadowColor = "rgba(230,0,0,0.85)";
					ctx.shadowBlur = 7 * dpr;
				} else {
					ctx.shadowBlur = 0;
				}

				if (i === 0 && col.bright) {
					ctx.fillStyle = "rgba(255,70,70," + (0.35 + 0.4 * tw) + ")";
				} else if (i === 0) {
					ctx.fillStyle = "rgba(255,45,45," + Math.min(col.alpha * 2.4 * (0.5 + 0.5 * tw), 0.5) + ")";
				} else {
					ctx.fillStyle = "rgba(230,0,0," + col.alpha * (0.4 + 0.6 * tw) + ")";
				}

				ctx.fillText(ch, col.x, y);
				y -= BASE_SIZE * dpr;
				i++;
			}

			ctx.shadowBlur = 0;
		}

		requestAnimationFrame(tick);
	}

	window.addEventListener("resize", resize);
	resize();
	requestAnimationFrame(tick);
})();
