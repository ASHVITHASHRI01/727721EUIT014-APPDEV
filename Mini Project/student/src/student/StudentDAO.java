package student;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO {
	//oops
	// Association: StudentDAO interacts with instances of Student objects to perform database operations.
//	 private Connection connection;
//
//	    public StudentDAO(Connection connection) {
//	        this.connection = connection;
//	    }
	    //oops
	    
    // Add student
    public void addStudent(Student student) {
        try (Connection connection = DatabaseManager.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO students (student_name, roll_number, department, student_email, password) VALUES (?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS
             )) {
            preparedStatement.setString(1, student.getStudentName());
            preparedStatement.setString(2, student.getRollNumber());
//            preparedStatement.setString(3, student.getSection());
            preparedStatement.setString(3, student.getDepartment());
//            preparedStatement.setString(4, student.getSection());
            preparedStatement.setString(4, student.getStudentEmail());
            preparedStatement.setString(5, student.getPassword());
            
            preparedStatement.executeUpdate();

            ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
            if (generatedKeys.next()) {
                student.setStudentId(generatedKeys.getInt(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Get all students
    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();

        try (Connection connection = DatabaseManager.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM students")) {

            while (resultSet.next()) {
                Student student = new Student();
                student.setStudentId(resultSet.getInt("student_id"));
                student.setStudentName(resultSet.getString("student_name"));
                student.setRollNumber(resultSet.getString("roll_number"));
//                student.setSection(resultSet.getString("section")); 
                student.setDepartment(resultSet.getString("department"));
                student.setStudentEmail(resultSet.getString("student_email"));
                student.setPassword(resultSet.getString("password"));

                students.add(student);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return students;
    }
}