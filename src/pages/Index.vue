<template>
    <a :href="folder" v-for="folder in folders">{{folder}}</a>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            folders: []
        }
    },
    methods: {
        async fetchFolders() {
            await axios.get('http://localhost:8000/api/images/get_folders')
            .then((res) => {
                
                    this.folders = res.data
                
            })
        }
    },
    beforeMount() {
        this.fetchFolders()
    }
}
</script>

<style scoped>
* {
    font-size: 25px;
}

a {
    display: block;
}
</style>