<template>
	<div
		class="upload-con"
		draggable="true"
		@drop="dropFile"
		@dragenter="dragEnter"
		@dragleave="dragLeave"
	>
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
		const events = ['drop', 'drgaleave', 'dragenter', 'dragover'];
		const handle = (e: MouseEvent) => {
			e.preventDefault();
		};
		onMounted(() => {
			const _el = file.value;
			if (_el) {
				const _ele = _el as HTMLInputElement;
				_ele.addEventListener('change', changeHandle);
			}
			events.forEach((name) => {
				const _e = name as keyof DocumentEventMap;
				const _h = handle as EventListener;
				document.addEventListener(_e, _h);
			});
		});
		onBeforeUnmount(() => {
			const _el = file.value;
			if (_el) {
				const _ele = _el as HTMLInputElement;
				_ele.removeEventListener('change', changeHandle);
			}
			events.forEach((name) => {
				const _e = name as keyof DocumentEventMap;
				const _h = handle as EventListener;
				document.removeEventListener(_e, _h);
			});
		});
		// 拖拽文件
		const dropFile = (e: DragEvent) => {
			const files = e.dataTransfer?.files;
			if (files?.length) {
				const _file = files[0];
				context.emit('addFile', _file);
			} else {
				console.log('获取文件失败');
			}
			dragLeave(e);
		};
		const dragEnter = (e: DragEvent) => {
			const _el = e.target as HTMLElement;
			_el.classList.add('drag');
		};
		const dragLeave = (e: DragEvent) => {
			const _el = e.target as HTMLElement;
			_el.classList.remove('drag');
		};
		return {
			file,
			dropFile,
			dragEnter,
			dragLeave
		};
	}
});
</script>

<style lang="less" scoped>
.upload-con {
	max-width: 800px;
	height: 200px;
	margin: 20px auto;
	border-radius: 5px;
	border: 2px solid #6cf;
	display: flex;
	justify-content: center;
	align-items: center;
	&.drag {
		border-style: dashed;
		opacity: 0.6;
	}
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
