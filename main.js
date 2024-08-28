function data() {
    return {
        task: '',
        tasks: [],

        Addtask() {
            if (this.task) {
                this.tasks.push({
                    title: this.task,
                    completed: false,
                    id: Math.random()
                })
                this.task = ''
            }

        },
        complete(task){
            task.completed = !task.completed
        },
     
        get TasksSortedByComplete(){
            return this.tasks.sort((a, b) => a.completed - b.completed )
        }, 

        deleteTask(index){
            this.tasks = this.tasks.filter(
                (task, taskIndex) => {
                    return index !== taskIndex
                }
            )

        }
    
    }

}