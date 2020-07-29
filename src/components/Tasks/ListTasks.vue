<template>
    <div>
        <h2 class="text-center mb-2 mt-2">{{ title }}</h2>

        <form class="form form-inline mb-2" @submit.prevent="save">
            <input placeholder="Nome da tarefa" class="form-control" type="text" v-model="task.name">
            <button type="submit" class="btn btn-info ml-1">Enviar</button>
        </form>
        
        <table class="table">
            <thead>
                <tr>
                    <th>Id.</th>
                    <th>Nome</th>
                    <th width="180px">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>
                        <a href="#" class="btn btn-info">Editar</a>
                        <a href="#" class="btn btn-danger">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Lista de Tarefas',
                tasks: [],
                task: {
                    id: '',
                    name: ''
                }
            }
        },

        methods: {
            save() {
                let idTask = this.tasks.length + 1
                this.task.id = idTask

                this.tasks.push(this.task)

                this.task = {
                    id: '',
                    name: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>