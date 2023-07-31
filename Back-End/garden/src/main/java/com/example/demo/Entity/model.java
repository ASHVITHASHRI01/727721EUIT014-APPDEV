package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class model {
	@Id
	private String username;
	private String password; 
	

	public String getusername() {
		return username;
	}

	public void setusername(String username) {
		this.username = username;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}

	public model(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public model() 
	{
	
	}
	

}
