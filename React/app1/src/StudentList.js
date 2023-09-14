import React from 'react';
const students = [
  { id: 1, name: 'Hit Koladiya', marks: 89 },
  { id: 2, name: 'Hiranj kotak', marks: 28 },
  { id: 3, name: 'Henil mendapara', marks: 48 },
  { id: 4, name: 'Jay keraliya', marks: 16 },
];

const StudentList = () => {
  const lowMarksStudents = students.filter(student => student.marks < 35);

  return (
    <div>
      <h1>Students with Less Than 35 Marks</h1>
      <ul>
        {lowMarksStudents.map(student => (
          <li key={student.id}>
            {student.name} - Marks: {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StudentList;
