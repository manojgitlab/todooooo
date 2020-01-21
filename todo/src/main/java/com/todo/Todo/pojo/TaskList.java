package com.todo.Todo.pojo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="task_list")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TaskList{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column 
	int id;
	
	@Column
	String name;

	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name = "taskListId")
	List<Task> tasks;
	
	public TaskList(int id, String name, List<Task> tasks) {
		super();
		this.id = id;
		this.name = name;
		this.tasks = tasks;
	}
 

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

	public TaskList() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
