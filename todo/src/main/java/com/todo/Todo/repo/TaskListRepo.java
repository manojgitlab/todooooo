package com.todo.Todo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.Todo.pojo.TaskList;

public interface TaskListRepo extends JpaRepository<TaskList, Integer>{

}
