<template>
    <div>
        <div class="flex flex-row justify-between mb-5">
            <h3 class="font-bold text-lg">{{title}}</h3>
            <button>New</button>
        </div>
        <BodyItemList :item="item" :iterate="iterateFunction(index)" v-for="(item, index) in listUsers" :key="item.info"/>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    },
    data() {
        return {
            listUsers:[{title:'lau', info:'hola'}, {title:'fran', info:'chau'}, {title:'tizi', info:'si'}, {title:'otros', info:'no'}]      
        }
    },
    methods: {
        iterateFunction(index){
        if(index%2 !== 0){
            return true;
        }
        return false;
    }
    }
}
</script>