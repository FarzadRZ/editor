<template>
    <div class="preview" ref="preview">
        <iframe id="preview"></iframe>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default ({
    name: 'Preview',
    
    computed: {
        ...mapState({
            content: (state) => state.content,
            minimization: (state) => state.minimization
        })
    },

    methods: {
        setContent() {
            let html = `<html><head><style>${this.content.css}</style></head><body>${this.content.html}<${'script'}>${this.content.js}</${'script'}></body></html>`;
            let frame = document.getElementById('preview').contentWindow.document;
            frame.location.reload()
            frame.open();
            frame.write(html);
            frame.close();
        }
    },

    watch: {
        content() {
            this.setContent();
        },

        minimization() {
            if(this.minimization) {
                this.$refs.preview.style.height = 'calc(100vh - 103px)'
            } else {
                this.$refs.preview.style.height = 'calc(100vh - 404px)'
            }
        }
    }
})
</script>