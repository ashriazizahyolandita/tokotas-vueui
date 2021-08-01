<template>
  <div class="masuk">
   
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <hr class = "my-3">
    <router-link class="btn btn-primary" to="/createmasuk">Tambah Barang Masuk</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama Barang</th>
      <th scope="col">Stock</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="(friend, index) in friends" :key="index">
           <td>{{ friend.id}}</td>
          <td>{{ friend.namabarang}}</td>
          <td>{{ friend.stock}}</td>
          <td>{{ friend.keterangan}}</td>
          <td>{{ friend.tanggal}}</td>
          <td><router-link class="btn btn-success" to="/editmasuk">Edit</router-link>
         <button @click.prevent="angDelete(friend.id)"  class="btn btn-danger">delete</button>
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
  name: "Masuk",
  components: {
   
  
  },
  setup(){
    let friends = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/friends')
      .then(response => {
        friends.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });
  function angDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/friends/${id}`)
    .then(()=>{
      let z = this.friends.map(friends => friends.id).indexOf(id);
      this.friends.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }
    return {
      friends,
      angDelete
    }
  }
};
</script>