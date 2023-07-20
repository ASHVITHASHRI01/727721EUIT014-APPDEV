package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.model;

public interface repository extends JpaRepository<model, Integer> {

}
