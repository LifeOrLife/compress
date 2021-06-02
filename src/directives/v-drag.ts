import { DirectiveBinding } from '@vue/runtime-core';

export default {
	name: 'drag',
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		el.setAttribute('draggable', 'true');
		// el.addEventListener();
	}
};
