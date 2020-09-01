<template>
 <div >
  <div class="intro">
    <div class="container">
      <div class="row intro_row">       
        <div class="col-lg-3">  </div>        
        <div class="col-lg-6 intro_col">
          <div>
            <h2 class="mb-5 text-center">Find IFSC Code of Bank</h2> 
              <div class="search_box_container">
                <div class="search_form_container">
                  <form action="#" id="search_form" class="search_form">
                     <h3>Find IFSC Code of Bank</h3>
                  <select @change="selectBank($event)" v-model="selectedBank">
                    <option value="">Please Select Bank Name</option>
                    <option v-for="option in bankOptions" v-bind:value="option.slug">
                    {{ option.name }}
                  </option>
                  </select>
                  <select @change="selectState($event)" v-model="selectedState">
                    <option value="">Please State Name</option>
                    <option v-for="option in stateOptions" v-bind:value="option.slug">
                      {{ option.name }}
                    </option>
                  </select>
                  <select >
                    <option value="">District</option>
                  </select>
                  <select >
                    <option value="">City</option>
                  </select>
                  <select >
                    <option value="">Branch</option>
                  </select>
                  </form>
                </div>
              </div>
          </div>          
        </div>
        <div class="col-lg-3">  </div>
      </div>
      <div>
        <div class="row mt-5">
          <div class="col-lg-2">  </div>        
          <div class="col-lg-8 bank-lists">
            <h2 class="mb-5 text-center">States for {{ this.selectedBank }}</h2> 
            <ul class="banks-ul">
              <li class="text-md-left text-center mt-2 mb-2" v-for="option in stateOptions">
                    <router-link 
                  :to="{ name: 'state', params: { bank : selectedBank , state: option.slug }}"> {{ option.name }}
                </router-link>
              </li>

            </ul>

          </div>
          <div class="col-lg-2">  </div>    
          

        </div>
        

      </div>
    </div>
  </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

    export default {
        layout: 'default',
        data: function() {
          return {
            errors: '',
            selectedBank: this.$route.params.bank,
            selectedState: '',
            stateOptions : [],
            bankOptions : []
          }
        },
        asyncData(context) {
          return axios.get( `api/banks`)
            .then((res) => {
              return { bankOptions: res.data }
            })
        },
        watch: { 
             '$route' (to, from){
                this.fetchStates()
            }
        },
        mounted () {
           this.fetchStates() 
        },
        methods: {
        fetchStates(){
            axios.get(`api/states/?bank=`+this.selectedBank)
            .then(response => {
              this.stateOptions = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
        },
        selectBank(event){
          let bank = event.target.value
          this.$router.push({name: 'bank', params: { bank: bank }})
        },
        selectState(event){
          let state = event.target.value
          this.$router.push({name: 'state', params: { bank : this.selectedBank , state: state }})
        }
      }
    }
</script>