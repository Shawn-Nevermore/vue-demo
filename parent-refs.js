Vue.component('parent', {
    data() {
        return {
            message: 'this is the parent component!'
        }
    },
    methods: {
        updateContent(msg) {
            this.message = msg
        }
    },
    template: `
        <div>
            <p>我是来自父组件中的数据：{{ message }}</p>
            <button @click="updateContent">更新消息</button>
        </div>
    `
})

Vue.component('child', {
    data() {
        return {
            childMessage: this.$parent.message
        }
    },
    methods: {
        updateContent() {
            this.$parent.message = this.childMessage
        }
    },
    template: `
        <input type="text" v-model="childMessage" @input="updateContent" placeholder="请输入您想变更的内容">
    `
})

const app = new Vue({
    el: '#app',
    template: `
        <div>   
            <parent />
        </div>
    `
})
