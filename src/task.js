class task {
  constructor(task, priority, date) {
    this.task = task;
    this.priority = priority;
    this.date = date;
  }
  getTaskInfo() {
    console.log(this.task, this.priority, this.date);
  }

}

export { task };
