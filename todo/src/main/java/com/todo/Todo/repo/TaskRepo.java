package com.todo.Todo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.Todo.pojo.Task;

public interface TaskRepo extends JpaRepository<Task, Integer> {

}
