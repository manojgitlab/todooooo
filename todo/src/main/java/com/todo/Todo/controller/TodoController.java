package com.todo.Todo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.Todo.pojo.Task;
import com.todo.Todo.pojo.TaskList;
import com.todo.Todo.repo.TaskRepo;
import com.todo.Todo.service.TodoService;

@RestController
public class TodoController {
	@Autowired
	TodoService todoService;

	@GetMapping("/taskList")
	public ArrayList<TaskList> getTaskAllList() {
		return todoService.getAllTaskList();
	}

	@GetMapping("/taskList/{id}")
	public TaskList getTaskAllListById(@PathVariable int id) {
		return todoService.getTaskListById(id);
	}

	
	@PostMapping("/taskList")
	public TaskList addTaskList(@RequestBody TaskList taskList) {
		return todoService.addTaskList(taskList);
	}

	@PostMapping("/task")
	public Task addTask(@RequestBody Task task) {
		return todoService.addTask(task);
	}

	@PutMapping("/task")
	public Task updateTask(@RequestBody Task task) {
		return todoService.updateTask(task);
	}
	
	@PutMapping("/taskList")
	public TaskList updateTaskList(@RequestBody TaskList taskList) {
		return todoService.updateTaskList(taskList);
	}
	
	@DeleteMapping("/task/{id}")
	public Task deleteTask(@PathVariable int id) {
		return todoService.deleteTask(id);
	}
	
	@DeleteMapping("/taskList/{id}")
	public TaskList deleteTaskList(@PathVariable int id) {
		return todoService.deleteTaskList(id);
	}
	
}
