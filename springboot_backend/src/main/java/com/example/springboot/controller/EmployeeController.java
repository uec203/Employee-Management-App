package com.example.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Employee;
import com.example.springboot.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//Get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	//Add employee
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee e) {
		return employeeRepository.save(e);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee e = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id :"+id));
		return ResponseEntity.ok(e);
		
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee e = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id :"+id));
		employeeRepository.delete(e);
		Map<String,Boolean> m = new HashMap<String,Boolean>();
		m.put("Deteleted", true);
		return ResponseEntity.ok(m);
		
	}
	
	@PostMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails) {
		Employee e = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id :"+id));
		e.setFirstName(employeeDetails.getFirstName());
		e.setLastName(employeeDetails.getLastName());
		e.setEmailId(employeeDetails.getEmailId());
		Employee updatedEmployee = employeeRepository.save(e);
		return ResponseEntity.ok(updatedEmployee);
		
	}
}
