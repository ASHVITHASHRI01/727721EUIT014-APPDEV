package student;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class EventDAO {
	//oops
	
//	    private Connection connection;
//
//	    public EventDAO(Connection connection) {
//	        this.connection = connection;
//	    }
	//oops    
	    
	// Add event
	public void addEvent(Event event) {
	    try (Connection connection = DatabaseManager.getConnection();
	         PreparedStatement preparedStatement = connection.prepareStatement(
	                 "INSERT INTO events (event_name, event_date, event_location,category) VALUES (?, ?, ?, ?)",
	                 Statement.RETURN_GENERATED_KEYS
	         )) {
	    	// Encapsulation: Using getter methods to access event fields.
	        preparedStatement.setString(1, event.getEventName());
	        preparedStatement.setDate(2, new java.sql.Date(event.getEventDate().getTime()));
	        preparedStatement.setString(3, event.getEventLocation());
	        preparedStatement.setString(4, event.getCategory());

	        int rowsAffected = preparedStatement.executeUpdate();
	        if (rowsAffected > 0) {
	            try (ResultSet generatedKeys = preparedStatement.getGeneratedKeys()) {
	                if (generatedKeys.next()) {
	                    event.setEventId(generatedKeys.getInt(1));
	                }
	            }
	        }

	        // Commit the transaction
//	        connection.commit();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}
//}
//	
	
	 public List<Event> getAllEvents() {
	        List<Event> events = new ArrayList<>();

	        try (Connection connection = DatabaseManager.getConnection();
	             Statement statement = connection.createStatement();
	             ResultSet resultSet = statement.executeQuery("SELECT * FROM events")) {

	            while (resultSet.next()) {
	                Event event = new Event();
	                event.setEventId(resultSet.getInt("event_id"));
	                event.setEventName(resultSet.getString("event_name"));
	                event.setEventDate(resultSet.getDate("event_date"));
	                event.setEventLocation(resultSet.getString("event_location"));
	                event.setcategory(resultSet.getString("category"));

	                events.add(event);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        return events;
	    }
	}
