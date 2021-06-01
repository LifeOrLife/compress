/**
 * 利用canvas对文件进行压缩
 */
export default function compress(
	img: HTMLImageElement,
	quality?: number,
	type?: string
) {
	quality = quality || 0.3;
	// 用于压缩图片的canvas
	var canvas = document.createElement('canvas');
	var ctx: CanvasRenderingContext2D = canvas.getContext(
		'2d'
	) as CanvasRenderingContext2D;
	// 瓦片canvas
	var tileCanvas = document.createElement('canvas');
	var tctx: CanvasRenderingContext2D = tileCanvas.getContext(
		'2d'
	) as CanvasRenderingContext2D;

	var initSize = img.src.length;
	var width = img.width;
	var height = img.height;

	//如果图片大于四百万像素，计算压缩比并将大小压至400万以下
	var ratio;
	if ((ratio = (width * height) / 4000000) > 1) {
		ratio = Math.sqrt(ratio);
		width /= ratio;
		height /= ratio;
	} else {
		ratio = 1;
	}

	canvas.width = width;
	canvas.height = height;

	//铺底色
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//如果图片像素大于100万则使用瓦片绘制
	var count;
	if ((count = (width * height) / 1000000) > 1) {
		count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片

		//计算每块瓦片的宽和高
		var nw = ~~(width / count);
		var nh = ~~(height / count);

		tileCanvas.width = nw;
		tileCanvas.height = nh;

		for (var i = 0; i < count; i++) {
			for (var j = 0; j < count; j++) {
				tctx.drawImage(
					img,
					i * nw * ratio,
					j * nh * ratio,
					nw * ratio,
					nh * ratio,
					0,
					0,
					nw,
					nh
				);
				ctx.drawImage(tileCanvas, i * nw, j * nh, nw, nh);
			}
		}
	} else {
		ctx.drawImage(img, 0, 0, width, height);
	}

	/**
	 * 进行图片压缩
	 * 语法
	 * canvas.toDataURL(type, encoderOptions)
	 * 参数
	 * @param type 图片格式，可选，默认为 image/png
	 * @param encoderOptions 可选，在指定图片格式为 image/jpeg 或 image/webp 的情况下，可以从0到1的区间内
	 * 选择图片的质量。如果超出取值范围，将会默认使用 0.92，其他参数会被忽略
	 *
	 * 经测试，相同encoderOptions的情况下，
	 * image/webp 比 image/jpeg 质量更高，压缩体积更小
	 * ie11不支持 image/webp, 压缩之后体积比原来大1.5倍以上
	 */
	if (type) {
		type = `image/${type}`;
	} else {
		type = 'image/webp';
	}
	var ndata = canvas.toDataURL(type, quality);
	var compressRatio = ~~((100 * (initSize - ndata.length)) / initSize);
	if (compressRatio <= 0) {
		type = 'image/jpeg';
		ndata = canvas.toDataURL(type, quality);
		compressRatio = ~~((100 * (initSize - ndata.length)) / initSize);
	}
	console.log('压缩前：' + initSize);
	console.log('压缩后：' + ndata.length);
	console.log('压缩率：' + compressRatio + '%');

	tileCanvas.width = tileCanvas.height = canvas.width = canvas.height = 0;
	return {
		before: {
			size: initSize
		},
		after: {
			size: ndata.length,
			str: ndata
		}
	};
}

export function getSize(num: number): string {
	if (num < 1024 * 1024) {
		return (num / 1024).toFixed(1) + 'kb';
	}
	return (num / 1024 / 1024).toFixed(1) + 'mb';
}
