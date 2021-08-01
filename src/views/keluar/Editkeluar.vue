<template>
    <div class="editkeluar">
     <form action="/editkeluar" method="POST">

<div class="form-group">
<label for="namabarangk">Nama Barang</label>
<input type="text" class="form-control" id="namabarangk"
                    name="namabarangk" placeholder="Nama Barang"
                    value="">
</div>

<div class="form-group">
<label for="jumlah">jumlah</label>
<input type="number" class="form-control" id="jumlah"
                    name="jumlah" placeholder="jumlah"
                    value="">

</div>
<div class="form-group">
<label for="penerima">penerima</label>
<input type="text" class="form-control" id="penerima"
                    name="penerima" placeholder="penerima"
                    value="">
</div>
<router-link class="btn btn-primary" to="/Keluar">Simpan</router-link>
</form>
    </div>    
</template>