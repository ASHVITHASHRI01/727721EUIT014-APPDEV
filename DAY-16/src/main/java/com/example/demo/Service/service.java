package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.model;
import com.example.demo.Repository.repository;

@Service
public class service {
	
	@Autowired
	repository erepo;
	
	public model saveDetails(model e)
	{
		
	return erepo.save(e);
	}
    public List<model> getDetails()
    {
    	return erepo.findAll();
    }
    public model updateDetails(model s)
    {
    	return erepo.saveAndFlush(s);
    }
    public void deleteDetails(int id)
    {
    	erepo.deleteById(id);
    }
}
