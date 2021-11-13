<template>
    <div class="edit" ref="editor">
        <div class="edit__heading">
            <span class="edit__heading-btn" @click="toggleMinimize">{{ minimize ? 'Maximize' : 'Minimize'}}</span>
            <span class="edit__heading-btn" @click="runEditor" >Run</span>
        </div>
        <div class="edit__body">
            <textarea id="jsEditor"></textarea>
            <textarea id="htmlEditor"></textarea>
            <textarea id="cssEditor"></textarea>
        </div>
    </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import { mapState } from 'vuex'

var jsEditor, htmlEditor, cssEditor;

export default ({
    name: 'Edit',

    data: () => ({
        minimize: false
    }),

    computed: {
        ...mapState({
            templates: (state) => state.templates,
            selectedTemplate: (state) => state.selectedTemplate
        })
    },

    methods: {
        runEditor() {
            var content = {
                css: cssEditor.getValue(),
                js: jsEditor.getValue(),
                html: htmlEditor.getValue()
            }
            this.$store.dispatch('runEditor', content)
        },

        toggleMinimize() {
            this.minimize = !this.minimize
            this.$store.dispatch('minimize', this.minimize)
            if(this.minimize) {
                this.$refs.editor.style.height = '40px'
            } else {
                this.$refs.editor.style.height = '341px'
            }
        },

        editorUpdating() {
            console.log('updating bashi yecha')
        }
    },

    watch: {
        selectedTemplate() {
            cssEditor.setValue(this.templates[this.selectedTemplate].css),
            jsEditor.setValue(this.templates[this.selectedTemplate].js),
            htmlEditor.setValue(this.templates[this.selectedTemplate].html)
        }
    },

    mounted() {
        jsEditor = CodeMirror.fromTextArea(document.getElementById('jsEditor'), {
            lineNumbers: true,
            theme: 'dracula',
            mode: 'javascript'
        });
        htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
            lineNumbers: true,
            theme: 'dracula',
            mode: 'htmlmixed'
        });

        cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
            lineNumbers: true,
            theme: 'dracula',
            mode: 'css'
        });
    },

    created() {
        var isCtrl = false;
        document.onkeyup=(e) => {
            if(e.keyCode == 17) isCtrl=false;
        }

        document.onkeydown=(e) => {
            if(e.keyCode == 17) isCtrl=true;
            if(e.keyCode == 83 && isCtrl == true) {
                this.runEditor()
                return false;
            }
        }
    }
})
</script>