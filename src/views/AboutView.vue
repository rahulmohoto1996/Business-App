<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <div v-for="n in data">
    {{ n }}
  </div>
  <div>
    <button @click="authorize">Authorize</button>
  </div>
  <!-- <div>
    <button @click="extractFromSheetJS_test">Test JS</button>
  </div> -->
  <div>
    <input type="text" v-model="inputText">Input id
    <button @click="sendDatatoBackend">sendDatatoBackend</button>
  </div>
  <div>
    <button @click="receiveDatafromBackend">receiveDatafromBackend</button>
    <textarea v-model="beautifyData"></textarea>
  </div>

</template>

<style>

</style>


<script>
import axios from "axios"
import router from "@/router";

export default {

  data() {
    return {
      data: null,
      inputText: null,
      receivedFromBackend: null,
      renderedPath: null
    }
  },

  computed: {
    beautifyData() {
      var data = this.receivedFromBackend;
      var beautifulData = JSON.stringify(data, null, 2);
      return beautifulData;
    }

  }, 

  methods: {
    async sendDatatoBackend() {
      debugger;
      var id = this.inputText;
      if(!id) return;
      var res = await axios.get("https://express-app-r2vg.onrender.com/events/"+id); //http://localhost:5000/events/
      if(res.status == "200")
        this.receivedFromBackend = res.data;
      else
        alert(`Error at getting data. status: ${res.status}`);
    },

    async receiveDatafromBackend() {
      debugger;
      let res = await axios.get("https://express-app-r2vg.onrender.com/events/"); //http://localhost:5000/events
      debugger;
      if(res.data)
        this.receivedFromBackend = res.data;
      else 
        alert(`Error at getting data. status: ${res.status}`);
      // return res.data;
    },

    async authorize() {
      debugger;
      var res = await axios.get("http://localhost:5000/authorize"); //await axios.get("https://express-app-r2vg.onrender.com/authorize");
      var url = res.data;
      window.location.href = url;
      // window.open( //'noopener, noreferrer'x
      //   url,
      //   '_target', // <- This is what makes it open in a new window.
      //   'noopener, noreferrer'
      // );
      // router.push(url);
      debugger;
    }
  },

  created() {
    debugger;
    // $el = this;
    var data = ['Hello', 'World'];
    this.data = data;
  }

}

</script>
