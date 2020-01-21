package com.todo.Todo.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Task {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	int id;
	
	@Column
	String name;
	
	@Column
	boolean status;
	
	@Column
	int taskListId;
	
	public int getTaskListId() {
		return taskListId;
	}

	public void setTaskListId(int taskListId) {
		this.taskListId = taskListId;
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	 

	public Task(int id, String name, boolean status, int taskListId) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
		this.taskListId = taskListId;
	}

	public Task() {
		// TODO Auto-generated constructor stub
	}
}
