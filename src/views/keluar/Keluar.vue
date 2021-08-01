<template>
  <div class="keluar">
   
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createkeluar">Tambah Barang Masuk</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Jumlah</th>
      <th scope="col">Penerima</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="(group, index) in groups" :key="index">
           <td>{{ group.id}}</td>
          <td>{{ group.namabarangk}}</td>
          <td>{{ group.jumlah}}</td>
          <td>{{ group.penerima}}</td>
          <td><router-link class="btn btn-success" to="/editkeluar">Edit</router-link>
         <button @click.prevent="angDelete(group.id)"  class="btn btn-danger">delete</button>
           </td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import axios from 'axios'
// @ is an alias to /src
import { onMounted, ref } from 'vue';
export default {
  name: "Keluar",
  components: {
   
  
  },
  setup(){
    let groups = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/groups')
      .then(response => {
        groups.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });
  function angDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/groups/${id}`)
    .then(()=>{
      let z = this.groups.map(groups => groups.id).indexOf(id);
      this.groups.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }
    return {
      groups,
      angDelete
    }
  }
};
</script>