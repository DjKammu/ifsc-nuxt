<template>
  <div>
<Navigation />
<div class="super_container">
  <router-view />
   <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col ">
                    <div class="copyright text-center">
                        <p>© <script>document.write(new Date().getFullYear());</script> Get Bank IFSC. All rights reserved | <router-link to="/">getbankifsc.co.in</router-link></p>  
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</div>
</template>

<script type="text/javascript">
  import Navigation  from '../components/Navigation.vue'
  //import axios from 'axios'
  import axios from '~/plugins/axios'

  export default{
    components:{
      Navigation // register component
    },
    data() {
      return {
          title:'',
          description:'',
          keywords:'',
      }
    },
    watch: { 
         '$route.query': '$fetch'
    },
     async fetch() {
       let path = this.$route.fullPath

      await axios.get(`api/metas?path=`+path
      ).then(response => {
             var vm = response.data
             this.description = vm.description;
             this.keywords = vm.keywords;
             this.title = vm.title;
          })

    },
    head() {
      return {
        title: this.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: this.description || '' },
          { hid: 'keywords', name: 'keywords', content: this.keywords || '' }
        ]
      }
    },
  }

</script>