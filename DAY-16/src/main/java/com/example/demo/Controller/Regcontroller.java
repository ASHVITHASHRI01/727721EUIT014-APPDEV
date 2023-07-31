package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.regmodel;
import com.example.demo.Service.regser;

@RestController
public class Regcontroller {
	@Autowired(required=true)
	regser eser;
	@PostMapping("/addDetails")
	
	public regmodel addDetail(@RequestBody  regmodel e1)
	{
		return eser.saveDetail(e1);
	}
	
	@GetMapping("/showDetail")
	public List<regmodel> fetchDetail()
	{
		return eser.getDetail();
	}
    @PutMapping("/updateDetail")
    public regmodel updateInfo(@RequestBody regmodel s1)
    {
    	return eser.updateDetail(s1);
    }
//    @DeleteMapping("/delete/{username}")
//    public String deleteInfo(@PathVariable("username") String firstname)
//    {
//    	eser.deleteDetails(firstname);
//    	return "Details Deleted Successfully";
//    }
}

