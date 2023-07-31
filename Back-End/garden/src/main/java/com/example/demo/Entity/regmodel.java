package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")
public class regmodel {
	@Id
	private String firstname;
	private String lastname; 
	private String email;
	private String password; 

	

	public String getfirstname() {
		return firstname;
	}

	public void setfirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getlastname() {
		return lastname;
	}

	public void setlastname(String lastname) {
		this.lastname = lastname;
	}
	
	public Long getcontact() {
		return contact;
	}

	public void setcontact(Long contact) {
		this.contact = contact;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
		this.password = password;
	}
	
	

	public regmodel(String firstname, String lastname,Long contact, String password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.contact=contact;
		this.password = password;
		
	}

	public regmodel() 
	{
	
	}
	

}
