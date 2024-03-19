const { createApp } = Vue;

createApp({
    data(){
        return{
            numberOfItem : 0,
            toDoList : [
                {
                    text: 'Complete Vue Boolzapp',
                    done: false
                },
                {
                    text: 'Go for a run',
                    done: false
                },
                {
                    text: 'Make a cake',
                    done: false
                },
                {
                    text: 'Add new items',
                    done: false
                }
            ]
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.toDoList);

    }
}).mount('#app')

console.log('stil works?');