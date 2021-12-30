<template>
    <div class="num-btn-box">
        <div class="minus btn" @click="change('minus')"><minus-icon /></div>
        <input v-model="val" class="value"/>
        <div class="add btn" @click="change('add')"><plus-icon /></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MinusIcon from './MinusIcon.vue'
import PlusIcon from './PlusIcon.vue'
const props = defineProps({
    step: {
        type: Number,
        default: 0.1
    },
    max: {
        type: Number,
        default: 1
    },
    min: {
        type: Number,
        default: 0
    },
    modelValue: {
        type: Number
    }
})
const emit = defineEmits(['change'])

const val = ref(props.modelValue)

const change = (type: string) => {
    let v = val.value as number
    const step = props.step || 1
    if (type === 'minus') {
        if (props.min !== undefined && v <= props.min) {
            return
        }
        v -= step
    }else {
        if (props.max && v >= props.max) {
            return
        }
        v += step
    }
    v = +v.toFixed(2)
    val.value = v
    emit('change', v)
}

</script>
<style lang="less" scoped>
.num-btn-box{
    display: inline-flex;
    height: 35px;
    border-radius: 5px;
    position: relative;
    border: 1px solid #000;
    cursor: pointer;
}
.num-btn-box:hover {
    box-shadow: 0 0 5px 5px rgba(102, 204, 255, .3);
}
.value{
    border: none;
    outline: none;
    text-align: center;
    height: 100%;
    width: 60px;
    padding: 0 10px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}
.btn{
    height: 35px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
