package com.todo.Todo.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.Todo.pojo.Task;
import com.todo.Todo.pojo.TaskList;
import com.todo.Todo.repo.TaskListRepo;
import com.todo.Todo.repo.TaskRepo;

@Service
public class TodoService {
	static ArrayList<TaskList> taskLists = new ArrayList<>();
	static ArrayList<Task> tasks = new ArrayList<>();

	@Autowired
	TaskListRepo taskListRepo;
	
	@Autowired
	TaskRepo taskRepo;
	
	public ArrayList<TaskList> getAllTaskList() {
		return (ArrayList<TaskList>) taskListRepo.findAll();
	}

	public TaskList addTaskList(TaskList taskList) {		 
		return taskListRepo.save(taskList);
	}

	public Task addTask(Task task) {		 
		return taskRepo.save(task);
	}

	public TaskList updateTaskList(TaskList taskList) {		
		TaskList list=taskListRepo.getOne(taskList.getId());
		list.setName(taskList.getName());
		taskListRepo.save(list); 
		return list;
	}
	
	public Task updateTask(Task task) {
		Task item=taskRepo.getOne(task.getId());
		item.setName(task.getName());
		item.setStatus(task.isStatus());		
		return taskRepo.save(item);
	}
	
	public TaskList getTaskListById(int id) {		
		return taskListRepo.getOne(id);
	}

	public Task deleteTask(int id) {
		taskRepo.deleteById(id);
		Task item= new Task();
		item.setName("");
		return item;
	}

	public TaskList deleteTaskList(int id) {
		TaskList taskList=taskListRepo.getOne(id);
		taskListRepo.deleteById(id);
		return taskList;
	}	

}
