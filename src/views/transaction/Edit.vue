<template>
<div class="container">
    <div class="row">
        <div class="col">
            <h3>Form Edit Transaction</h3>
        </div> 
        <div class="col">
            <Router-link :to="{ name: 'transaction.index'}" class="btn btn-primary btn-sm float-sm-end">Kembali</Router-link>
        </div>   
    </div>
    <div>
        <div class="nav-align-top mb-4">
            <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                <li class="nav-item">
                    <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-profile" aria-controls="navs-pills-justified-profile" aria-selected="true">
                        <i class="tf-icons bx bx-user"></i> Profile
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
                            <form @submit.prevent="update()">
                                <div class="row">
                                    <div class="col">
                                        <label class="col-sm-2 col-form-label" for="basic-default-title">Title</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="basic-default-title" placeholder="Title" v-model="transaction.title" />
                                            <div v-if="validation.title" class="text-danger">
                                                {{ validation.title[0] }}
                                            </div>
                                        </div>
                                        <label class="col-sm-2 col-form-label" for="basic-default-amount">Amount</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="basic-default-amount" placeholder="50000" v-model="transaction.amount" />
                                            <div v-if="validation.amount" class="text-danger">
                                                {{ validation.amount[0] }}
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
                                            <div v-if="validation.type" class="text-danger">
                                                {{ validation.type[0] }}
                                            </div>
                                        </div>
                                        <label class="col-sm-2 col-form-label" for="basic-default-time">Time</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="basic-default-timep" placeholder="yyyy-mm-dd hh:mm:ss" v-model="transaction.time" />
                                            <div v-if="validation.time" class="text-danger">
                                                {{ validation.time[0] }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="divider">
                                    <div class="divider-text">End Form</div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary text-center">Update Data</button>
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
import { reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        //data binding
        let transaction = reactive({
            title: '',
            amount: '',
            type: '',
            time: '',
        });
        // validasi dulu
        const validation = ref([]);
        // fungsi tombol back
        const router = useRouter();        

        const route = useRoute();

        // fungsi Hook
        onMounted(() => {
            axios.get(`http://localhost:8000/api/transaction/${route.params.id}`)
            .then((result) => {
                transaction.title = result.data.data.title
                transaction.amount = result.data.data.amount
                transaction.type = result.data.data.type
                transaction.time = result.data.data.time
            }).catch((err) => {
                console.log(err.response.data);
            });
        });
        // fungsi kirim data ke server
        function update() {
                axios.put(`http://localhost:8000/api/transaction/${route.params.id}`,
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
        // fungsi semua const
        return {
            transaction,
            validation,
            router,
            update,
            }            
    },       
}
</script>



