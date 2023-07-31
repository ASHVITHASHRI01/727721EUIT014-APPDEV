package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.regmodel;
import com.example.demo.Repository.regrepo;

@Service
public class regser {
	
	@Autowired
	regrepo erepo;
	
	public regmodel saveDetail(regmodel e)
	{
		
	return erepo.save(e);
	}
    public List<regmodel> getDetail()
    {
    	return erepo.findAll();
    }
    public regmodel updateDetail(regmodel s)
    {
    	return erepo.saveAndFlush(s);
    }
//    public void deleteDetails(int id)
//    {
//    	erepo.deleteById(id);
//    }
}
