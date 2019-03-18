<template>
  <div id="mde">
    <mavon-editor
      ref="md"
      language="en"
      v-model="propValue"
      :toolbars="toolbars"
      placeholder="Write the answer"
      :subfield="false"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    ></mavon-editor>
    <div
      class="mt-5"
      v-if="!msg"
    >
      <span v-if="uploading">Uploading your files...</span>
      <span v-else>Attach file by dragging & dropping, selecting them, or pasting from clipboard</span>
    </div>
    <div
      class="mt-5"
      v-else
      v-html="msg"
    ></div>
  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://young-thicket-70972.herokuapp.com/'
    : 'http://localhost:8081/'

export default {
  name: 'markdown-editor',
  props:{
    propValue:String
  },
  components: {
    mavonEditor
  },
  data () {
    return {
      uploading: false,
      images: {},
      msg: '',
      allowedImages: /(\.png|\.jpg|\.jpeg|\.gif)$/i,
      allowedFiles: /(\.docx|\.gz|\.log|\.pdf|\.pptx|\.txt|\.xlsx|\.zip)$/i,
      value: '',
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        code: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        table: true,
        subfield: true,
        preview: true,
        fullscreen: true,
        help: true
      }
    }
  },
  methods: {
    // file upload handler
    handleUpload (file) {
      let formdata = new FormData()
      formdata.append('uploadfile', file)
      this.uploading = true
      axios({
        url: `${baseURL}api/uploadfile`,
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        const url = res.data.file.secure_url
        this.$refs.md.toolbar_left_addlink('link', file.name, url)
        this.uploading = false
      }).catch((err) => {
        this.uploading = false
        console.log(err)
      })
    },
    // image upload handler
    $imgAdd (pos, $file) {
      let formdata = new FormData()
      formdata.append('uploadfile', $file)
      this.uploading = true
      axios({
        url: `${baseURL}api/uploadfile`,
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        const result = res.data.file
        const url = res.data.file.secure_url
        this.$refs.md.$img2Url(pos, url)
        this.images[url] = result
        this.uploading = false
      }).catch((err) => {
        this.$refs.md.$refs.toolbar_left.$imgDel(pos)
        this.uploading = false
        console.log(err)
      })
    },
    // image delete handler
    $imgDel (file, pos) {
      const myFile = this.images[pos]
      if (myFile) {
        delete this.images[pos]
      }
    },
    handleDrop (e) {
      let dt = e.dataTransfer
      let file = dt.files[0]
      if (!this.isValidFile(file)) {
        this.msg = `<span style='color: #cb2431'>We don’t support that file type.</span><span> Try again with a GIF, JPEG, JPG, PNG, DOCX, GZ, LOG, PDF, PPTX, TXT, XLSX or ZIP.</span>`
        return 1
      }
      this.msg = ''
      if (this.allowedImages.exec(file.name)) {
        this.$refs.md.$refs.toolbar_left.$imgFilesAdd(file)
      } else if (this.allowedFiles.exec(file.name)) {
        this.handleUpload(file)
      }
    },
    isValidFile (file) {
      let valid = true
      if (!this.allowedImages.exec(file.name) && !this.allowedFiles.exec(file.name)) {
        valid = false
      }
      return valid
    }
  },
  mounted () {
    this.$refs.md.$refs.toolbar_left.img_file = []

    let dropArea = document.getElementById('mde');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false)
    })

    function highlight (e) {
      dropArea.classList.add('highlight')
    }

    function unhighlight (e) {
      dropArea.classList.remove('highlight')
    }

    dropArea.addEventListener('drop', this.handleDrop, false)
  }
}
</script>
<style lang="scss">
  @import "MarkDownEditor";
</style>
<style>
.mt-5 {
  color: #586069;
  font-size: 14px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: none;
}
</style>
