class task {
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.date = date;
  }
  getTaskInfo() {
    console.log(this.title, this.priority, this.date);
  }

}

export { task };
