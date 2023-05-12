<template>

    <div style="width: 200px; margin: 0 auto;">
        <input type="text" placeholder="title" v-model="this.insertedTitle">
        <input type="" placeholder="url" v-model="this.insertedUrl">
        <button @click="uploadPicture" style="color: black;">Upload</button>
    </div>
    <img :src="url" v-for="url in folderContent" alt="" style="height: auto; width: 250px;">

</template>

<script>
import axios from 'axios'
import Index from "@/pages/Index.vue";

export default {
    data() {
        return {
            folderContent: [],
            insertedUrl: '',
            insertedTitle: ''
        }
    },
    components: {
        Index
    },
    methods: {
        async fetchFolderContent() {
            await axios.get(`http://localhost:8000/api/images/get_urls?folder=${this.$route.params.folder}`)
            .then((res) => {
                    this.folderContent = res.data
            })
        },
        async uploadPicture() {
            await axios.post(`http://localhost:8000/api/images/upload`, {
                'url': this.insertedUrl, 'title': this.insertedTitle
            })
            .then((res) => {
                   this.folderContent.push(res.data['url'])
                   console.log(this.folderContent)
            })
        }
    },
    beforeMount() {
        this.fetchFolderContent()
    }
}
</script>

<style scoped>
* {
    font-size: 40px;
}
</style>