<template>
<div class="container">
    <h3>Form Create Transaction     
        <span><Router-link :to="{ name: 'transaction.index'}" class="btn btn-secondary btn-sm ml-5">Kembali</Router-link></span>
    </h3>
    <div>
        <div class="nav-align-top mb-4">
            <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                <li class="nav-item">
                    <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-profile" aria-controls="navs-pills-justified-profile" aria-selected="true">
                        <i class="tf-icons bx bx-user"></i> Home
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-home" aria-controls="navs-pills-justified-home" aria-selected="false">
                        <i class="tf-icons bx bx-home"></i> Data Orang Tua/Wali
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-document" aria-controls="navs-pills-justified-document" aria-selected="false">
                        <i class="tf-icons bx bx-message-square"></i> Dokumen Pendukung
                    </button>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade active show" id="navs-pills-justified-profile" role="tabpanel">
                     <div class="row">
                        <div class="col-md">
                            <form @submit.prevent="store()">
                                <div class="row">
                                    <div class="col">
                                        <label class="col-sm-2 col-form-label" for="basic-default-title">Title</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="basic-default-title" placeholder="Title" v-model="transaction.title" />
                                            <div class="text-danger">
                                                Validation message
                                            </div>
                                        </div>
                                        <label class="col-sm-2 col-form-label" for="basic-default-amount">Amount</label>
                                        <div class="col-sm-12">
                                            <input type="number" class="form-control" id="basic-default-amount" placeholder="50000" v-model="transaction.amount" />
                                            <div class="text-danger">
                                                Validation message
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label class="col-sm-2 col-form-label" for="basic-default-type">Type</label>
                                        <div class="col-sm-12">
                                            <select class="form-select" id="type" aria-label="Default select example" v-model="transaction.type">
                                                <option selected="">- Piih -</option>
                                                <option value="revenue">Revenue</option>
                                                <option value="expense">Expense</option>
                                            </select>
                                            <div class="text-danger">
                                                Validation message
                                            </div>
                                        </div>
                                        <label class="col-sm-2 col-form-label" for="basic-default-timestamp">Time</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="basic-default-timestamp" placeholder="yyyy-mm-dd hh:mm:ss" v-model="transaction.time" />
                                            <div class="text-danger">
                                                Validation message
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-primary mt-3 full-right">Tambah Data</button>
                                </div>
                            </form>
                            </div>
                        </div>   
                </div>
                
                <div class="tab-pane fade" id="navs-pills-justified-home" role="tabpanel">
                       
                </div>
                
                <div class="tab-pane fade" id="navs-pills-justified-document" role="tabpanel">
                
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        //data binding
        const transaction = reactive({
            title: '',
            amount: '',
            type: '',
            time: '',
        });
        
        const validation = ref([]);

        const router = useRouter();

        function store() {
                axios.post('http://localhost:8000/api/transaction',
                transaction
            )
            .then(() => {
                router.push({ 
                    name: 'transaction.index' 
                    });

            }).catch((err) => {
                validation.value = err.response.data
            });            
        }

        return {
            transaction,
            validation,
            router,
            store,
            }            
    },       
}
</script>



