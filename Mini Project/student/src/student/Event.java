package student;

import java.util.Date;

public class Event {
	    private int eventId;// Encapsulation: Private instance variables are used to encapsulate data.
	    private String eventName;
	    private Date eventDate;
	    private String eventLocation;
		private String category;
		 
		
		

	    // Constructors: Overloaded constructors to create Event objects with different sets of attributes.
		//polymorphism
	    public Event() {
	    }

	    public Event(String eventName, Date eventDate, String eventLocation, String category) {
	        this.eventName = eventName;
	        this.eventDate = eventDate;
	        this.eventLocation = eventLocation;
	        this.category = category;
	    }
		 //Con
		 
		
	    public int getEventId() {
	        return eventId;
	    }

	    public void setEventId(int eventId) {
	        this.eventId = eventId;
	    }

	    public String getEventName() {
	        return eventName;
	    }

	    public void setEventName(String eventName) {
	        this.eventName = eventName;
	    }

	    public Date getEventDate() {
	        return eventDate;
	    }

	    public void setEventDate(Date eventDate) {
	        this.eventDate = eventDate;
	    }

	    public String getEventLocation() {
	        return eventLocation;
	    }

	    public void setEventLocation(String eventLocation) {
	        this.eventLocation = eventLocation;
	    }
	    
	    public String getCategory() {
	        return category;
	    }

	    public void setcategory(String category) {
	        this.category = category;
	    }
	}

