<template>
    <div class="createfriends">
     <form action="/masuk" method="POST">

<div class="form-group">
<label for="namabarang">Nama Barang</label>
<input type="text" class="form-control" id="namabarang"
                    name="namabarang" placeholder="Nama Barang"
                    value="">
</div>

<div class="form-group">
<label for="stock">Stock</label>
<input type="number" class="form-control" id="stock"
                    name="stock" placeholder="Stock"
                    value="">

</div>
<div class="form-group">
<label for="keterangan">keterangan</label>
<input type="text" class="form-control" id="keterangan"
                    name="keterangan" placeholder="keterangan"
                    value="">
</div>
<div class="form-group">
<label for="tanggal">tanggal</label>
<input type="date" class="form-control" id="tanggal"
                    name="tanggal"
                    placeholder="tanggal" value="">
</div>
<router-link class="btn btn-primary" to="/Masuk">Simpan</router-link>
</form>
    </div>    
</template>