package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.model;
import com.example.demo.Service.service;

@RestController
public class Controller {
	@Autowired(required=true)
	service eser;
	@PostMapping("/add")
	
	public model addDetails(@RequestBody  model e1)
	{
		return eser.saveDetails(e1);
	}
	
	@GetMapping("/showDetails")
	public List<model> fetchDetails()
	{
		return eser.getDetails();
	}
    @PutMapping("/updateDetails")
    public model updateInfo(@RequestBody model s1)
    {
    	return eser.updateDetails(s1);
    }
//    @DeleteMapping("/delete/{username}")
//    public String deleteInfo(@PathVariable("username") String username)
//    {
//    	eser.deleteDetails(username);
//    	return "Details Deleted Successfully";
//    }
}

