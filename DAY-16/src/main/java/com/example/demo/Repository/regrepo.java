package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.regmodel;

public interface regrepo extends JpaRepository<regmodel, Integer> {

}
