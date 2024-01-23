function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Lấy nội dung từ ô input
    var taskContent = taskInput.value;

    if (taskContent.trim() !== "") {
        // Tạo một phần tử li mới
        var newTask = document.createElement("li");
        newTask.className = "task";
        newTask.appendChild(document.createTextNode(taskContent));

        // Thêm công việc vào danh sách
        taskList.appendChild(newTask);

        // Xóa nội dung trong ô input sau khi thêm công việc
        taskInput.value = "";
    }
}
