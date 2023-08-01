package student;
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.SQLException;

	public class DatabaseManager {
		// Encapsulation: Private static variables are used to store sensitive information (URL, USERNAME, PASSWORD).
	    // These variables are encapsulated within the class, making them accessible only through the public method below.
	    
	    private static final String URL = "jdbc:mysql://localhost:3306/ashvitha";
	    private static final String USERNAME = "root";
	    private static final String PASSWORD = "Password910$";
	 // Abstraction: The method `getConnection` abstracts away the details of creating a database connection.
        // It only provides the interface to get a connection without exposing the implementation details.

        // Factory Method(getConnection): This method serves as a factory for obtaining a database connection.
        // It returns a `Connection` object, which is a type of abstraction over the database connection.

	    public static Connection getConnection() throws SQLException {
	        // Inheritance: The `DriverManager.getConnection` method is part of the JDBC library, and it is inherited from the parent class.
	        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
	    }
	}


