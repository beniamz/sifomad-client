<template>  

<div class="container">
     <h3>Transaction List</h3>
    <div class="card rounded shadow">
        <div class="card-header">                    
            
            <Router-link :to="{ name: 'transaction.create'}" class="btn btn-primary btn-sm">Tambah Data</Router-link>
        </div>
        <div class="card-body">
            <div class="table-responsive text-nowrap">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">                      
                        <tr v-for="(transaction, index) in transactions.data" :key="index">
                            <td>{{ transaction.title }}</td>
                            <td>{{ transaction.amount }}</td>
                            <td>{{ transaction.type}}</td>
                            <td>
                                <div class="btn-group">
                                    <Router-link :to="{ name: 'transaction.edit', params:{id: transaction.id},}" class="btn btn-sm btn-outline-info">Edit
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


