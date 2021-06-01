<template>
	<div class="upload-con">
		<label for="image-load" class="label">
			<div class="tx">上传文件</div>
			<input type="file" accept="image/*" id="image-load" ref="file" />
		</label>
	</div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

export default defineComponent({
	emits: ['addFile'],
	setup(prop, context) {
		const file = ref(null);
		const changeHandle = () => {
			if (file) {
				const a = file.value;
				if (a) {
					const b = a as HTMLInputElement;
					const c = b.files;
					if (c?.length) {
						const file = c[0];
						context.emit('addFile', file);
					}
				}
			}
		};

		onMounted(() => {
			const _el = file.value;
			if (_el) {
				const _ele = _el as HTMLInputElement;
				_ele.addEventListener('change', changeHandle);
			}
		});
		onBeforeUnmount(() => {
			const _el = file.value;
			if (_el) {
				const _ele = _el as HTMLInputElement;
				_ele.removeEventListener('change', changeHandle);
			}
		});
		return {
			file
		};
	}
});
</script>

<style lang="less" scoped>
.upload-con {
	max-width: 800px;
	height: 500px;
	margin: 20px auto;
	border-radius: 5px;
	border: 2px solid #6cf;
	display: flex;
	justify-content: center;
	align-items: center;
}
.label {
	cursor: pointer;
}
#image-load {
	width: 0;
	height: 0;
	opacity: 0;
}
</style>
