<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div v-for="n in data">
    {{ n }}
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
export default {
  data() {
    return {
      data: null,
      inputText: null,
      receivedFromBackend: null
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
      var res = await axios.get("http://localhost:5000/events/"+id);
      if(res.statusText == "OK")
        this.receivedFromBackend = res.data;
    },

    async receiveDatafromBackend() {
      debugger;
      let res = await axios.get("http://localhost:5000/events");
      debugger;
      if(res.data)
        this.receivedFromBackend = res.data;
      // return res.data;
    },

    extractFromSheetJS(fileName, folderId, sheetName) {
        debugger;
        var filename = fileName //"###"; // Please set the filename of XLSX
        var folderId = folderId //"###"; // Please set the folder ID.
        var sheetName = sheetName //"Sheet1"; // Please set the sheet name you want to retrieve the values.

        // Retrieve XLSX file using the filename.
        const files = DriveApp.getFolderById(folderId).searchFiles(`title='${filename}' and mimeType='${MimeType.MICROSOFT_EXCEL}' and trashed=false`);
        const file = files.hasNext() && files.next();
        if (!file) throw new Error("No file.");
        const fileId = file.getId();

        // Retrieve values from XLSX data.
        const data = new Uint8Array(DriveApp.getFileById(fileId).getBlob().getBytes());
        const book = XLSX.read(data, { type: "array" });
        const csv = XLSX.utils.sheet_to_csv(book.Sheets[sheetName]);
        const values = Utilities.parseCsv(csv);

        console.log(values);
        debugger;
    },

    extractFromSheetJS_test() {
        var fileName = 'test.xls';
        var folderId = '1cqK-QVqgVCJ07xR1soNvFDT7tK2_4Obb';
        var sheetName = 'sheet1';

        debugger;
        this.extractFromSheetJS(fileName, folderId, sheetName);
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
