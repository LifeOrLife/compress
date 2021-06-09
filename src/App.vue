<template>
	<Upload @addFile="getFile" />
	<div class="con">
		<div class="img-show" style="--left: 50%" ref="showBox">
			<div class="before">
				<img :src="beforeSrc" alt="" ref="beforeImg" />
				<div class="before-text" v-show="beforeSrc">
					压缩前{{ beforeSize }}
				</div>
			</div>
			<div class="line" ref="moveLine"></div>
			<div class="after">
				<div class="after-text" v-show="afterSrc">
					压缩后{{ afterSize }}
				</div>
				<img :src="afterSrc" alt="" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import Upload from './components/Upload.vue';
import compress, { getSize } from './utils/compress';

export default defineComponent({
	components: {
		Upload
	},
	setup() {
		// 处理上传的图片
		const beforeSrc = ref('');
		const beforeImg = ref(null);
		const beforeSize = ref('');
		// 处理压缩后的图片
		const afterSrc = ref('');
		const afterSize = ref('');
		// 获取/处理上传的图片
		const getFile = (file: File) => {
			const reader = new FileReader();
			reader.onload = function () {
				if (beforeImg && beforeImg.value) {
					const el = beforeImg.value as unknown as HTMLImageElement;
					// el.src = reader.result as string;
					beforeSrc.value = reader.result as string;
					el.onload = function () {
						const box = showBox.value as unknown as HTMLDivElement;
						const style = box.getBoundingClientRect();
						w = style.width;
						left = style.left;
						const info = compress(el);
						beforeSize.value = getSize(info.before.size);
						afterSrc.value = info.after.str;
						afterSize.value = getSize(info.after.size);
					};
				}
			};
			reader.readAsDataURL(file);
		};

		// 分界线处理
		const moveLine = ref(null);
		const showBox = ref(null);
		let canMove = false;
		let left: number, w: number;
		const startMove = () => {
			canMove = true;
		};

		const endMove = () => {
			canMove = false;
		};
		const isMove = (e: MouseEvent) => {
			if (canMove) {
				const _x = e.clientX - left;
				const v = (_x / w) * 100 + '%';
				const _el = showBox.value as unknown as HTMLDivElement;
				_el.style.setProperty('--left', v);
			}
		};

		const handleLine = (e: Event) => {};
		onMounted(() => {
			const el = moveLine.value as unknown as HTMLDivElement;
			const box = showBox.value as unknown as HTMLDivElement;
			if (el) {
				el.addEventListener('mousedown', startMove);
				// box.addEventListener('mousedown', upperStart);
				box.addEventListener('mousemove', isMove);
				document.addEventListener('mouseup', endMove);
			}
		});

		onBeforeUnmount(() => {
			const el = moveLine.value as unknown as HTMLDivElement;
			const box = showBox.value as unknown as HTMLDivElement;
			if (el) {
				el.removeEventListener('mousedown', startMove);
				// box.removeEventListener('mousedown', upperStart);
				box.removeEventListener('mousemove', isMove);
				document.removeEventListener('mouseup', endMove);
			}
		});

		return {
			getFile,
			beforeImg,
			beforeSrc,
			beforeSize,
			afterSrc,
			afterSize,
			moveLine,
			handleLine,
			showBox
		};
	}
});
</script>
<style lang="less" scoped>
.con {
	text-align: center;
}
.img-show {
	position: relative;
	display: inline-block;
}

.img-show img {
	max-width: 800px;
}

.after {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	clip-path: polygon(var(--left) 0, 100% 0, 100% 100%, var(--left) 100%);
}

.after img {
	width: 100%;
	height: 100%;
}

.line {
	position: absolute;
	left: var(--left);
	top: 0;
	bottom: 0;
	width: 2px;
	background-color: #fff;
	cursor: ew-resize;
	z-index: 5;
}
[class$='-text'] {
	position: absolute;
	top: 10px;
	color: #fff;
}
.before-text {
	left: 10px;
}

.after-text {
	right: 10px;
}
</style>
