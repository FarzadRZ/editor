<template>
    <div class="setting">
        <select class="setting__dropdown" v-model="dropdown" @change="loadTemplate">
            <option value="" disabled selected>History</option>
            <option v-for="(template, index) in templates" :key="index">{{template.name}}</option>
        </select>
        <div class="setting__btn" @click="showModal = true">Save</div>

        <div v-if="showModal" class="setting__modal">
            <h6>Choose a template name</h6>
            <input v-model="templateName" placeholder="Template Name">
            <input type="submit" @click="saveSnippet" value="SUBMIT">
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";


export default ({
    name: 'Setting',

    data: () => ({
        templateName: '',
        showModal: false,
        dropdown: ''
    }),

    computed: {
        ...mapState({
            content: (state) => state.content,
            templates: (state) => state.templates
        })
    },

    methods: {
        saveSnippet() {
            this.showModal = false
            let templates = {}
            let content = this.content
            templates[this.templateName] = content
            templates[this.templateName]['name'] = this.templateName
            let localStorageTemplates = JSON.parse(localStorage.getItem('templates'))
            let mergedTemplates = {
                ...localStorageTemplates,
                ...templates
            }
            localStorage.setItem('templates', JSON.stringify(mergedTemplates))
            this.$store.dispatch('getTemplates')
        },

        loadTemplate() {
            this.$store.dispatch('selectedTemplate', this.dropdown)
        }
    }
})
</script>
