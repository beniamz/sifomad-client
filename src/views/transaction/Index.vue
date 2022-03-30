<template>
<div class="container my-3">
    <div class="row justify-content-center">
        <div class="col=8">
            
            <div class="card rounded shadow">
                <div class="card-header">                    
                    <h3>Transaction List</h3>
                    <div class="d-grid  d-md-flex justify-content-md-end">
                        <Router-link :to="{ name: 'transaction.create'}" class="btn btn-primary me-md-2">Tambah Data
                        </Router-link>  
                    </div>
                </div>
                <div class="card-body">
                    <div class="table table-responsive table-sm table-hover">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(transaction, index) in transactions.data" :key="index">
                                    <td>{{ transaction.title }}</td>
                                    <td>{{ transaction.amount }}</td>
                                    <td>{{ transaction.type}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <Router-link :to="{ name: 'transaction.edit', params:{id:1}}" class="btn btn-sm btn-outline-info">Edit
                                            </Router-link>
                                            <button class="btn btn-sm btn-outline-danger">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       
</template>

<script>

import axios from 'axios';
import { onMounted, ref } from 'vue';


export default {

    setup() {
        let transactions = ref([]);
        onMounted(() => {
            axios.get('http://localhost:8000/api/transaction')
                .then((result) => {
                    transactions.value = result.data;
                })
                .catch((err) => {
                    console.log(err.response);
                });
        });

        return {
            transactions
        }
    }    
}
</script>

<style>
@media (min-width: 1024px) {
  .index {
    min-height: 100vh;
    display: flex;
  
  }
}
</style>


