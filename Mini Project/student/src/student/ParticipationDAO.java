package student;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//
//public class ParticipationDAO {
//    // Register participant
//    public void registerParticipant(int eventId, int studentId) {
//        try (Connection connection = DatabaseManager.getConnection();
//             PreparedStatement preparedStatement = connection.prepareStatement(
//                     "INSERT INTO event_participation (event_id, student_id, student_name) VALUES (?, ?, ?)"
//             )) {
//            preparedStatement.setInt(1, eventId);
//            preparedStatement.setInt(2, studentId);
//            preparedStatement.setString(3, studentName);
//
//            preparedStatement.executeUpdate();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }
//}


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ParticipationDAO {
	//oops
	// Encapsulation: The private 'connection' variable is used to encapsulate the database connection within the class.
    // It is accessed through a constructor and is not directly exposed to the outside world.
//oops
//	 private Connection connection;
//
//	    public ParticipationDAO(Connection connection) {
//	        this.connection = connection;
//	    }
	    //oops
	    
    // Register participant
    public void registerParticipant(int eventId, int studentId) {
        try (Connection connection = DatabaseManager.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO event_participation (event_id, student_id) VALUES (?, ?)"
             )) {
            preparedStatement.setInt(1, eventId);
            preparedStatement.setInt(2, studentId);
//            preparedStatement.setString(3, studentName);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
