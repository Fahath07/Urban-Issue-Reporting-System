import React, { useState } from 'react';
import '../styles/issues.css';

const Issues = () => {
  const [issues, setIssues] = useState([
    { id: 1, category: 'Pothole', description: 'Large pothole on Main Street', location: 'Main Street, Downtown', status: 'Pending', department: null, date: '2024-01-15' },
    { id: 2, category: 'Garbage Overflow', description: 'Garbage bin overflowing near City Park', location: 'City Park, North Area', status: 'In Progress', department: 'Sanitation Department', date: '2024-01-14' },
    { id: 3, category: 'Street Light', description: 'Street light not working', location: 'Oak Avenue, Block 5', status: 'Resolved', department: 'Electricity Department', date: '2024-01-10' },
    { id: 4, category: 'Water Leakage', description: 'Water pipe leaking continuously', location: 'Elm Street, Sector 3', status: 'Pending', department: null, date: '2024-01-16' }
  ]);

  const departments = [
    'Public Works Department',
    'Sanitation Department',
    'Electricity Department',
    'Water Supply Department',
    'Road Maintenance Department'
  ];

  const [filter, setFilter] = useState('All');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [modalType, setModalType] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const filteredIssues = filter === 'All' ? issues : issues.filter(issue => issue.status === filter);

  const handleStatusUpdate = () => {
    if (selectedIssue && newStatus) {
      setIssues(issues.map(issue => 
        issue.id === selectedIssue ? { ...issue, status: newStatus } : issue
      ));
      closeModal();
    }
  };

  const handleDepartmentAssign = () => {
    if (selectedIssue && selectedDepartment) {
      setIssues(issues.map(issue => 
        issue.id === selectedIssue ? { ...issue, department: selectedDepartment, status: 'In Progress' } : issue
      ));
      closeModal();
    }
  };

  const closeModal = () => {
    setSelectedIssue(null);
    setModalType('');
    setNewStatus('');
    setSelectedDepartment('');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      setIssues(issues.filter(issue => issue.id !== id));
    }
  };

  return (
    <div className="issues-page" style={{
      backgroundImage: 'linear-gradient(rgba(203, 221, 233, 0.95), rgba(203, 221, 233, 0.95)), url(/Urban-Design-Trends-in-High-Density-Living.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="issues-container">
        <div className="issues-header">
          <h1 className="issues-title">Manage Issues</h1>
          <p className="issues-subtitle">View and manage all reported issues</p>
        </div>

        <div className="issues-filter">
          <label>Filter by Status:</label>
          <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Issues</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="card">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredIssues.map(issue => (
                  <tr key={issue.id}>
                    <td>#{issue.id}</td>
                    <td>{issue.category}</td>
                    <td>{issue.description}</td>
                    <td>{issue.location}</td>
                    <td>{issue.department || 'Not Assigned'}</td>
                    <td>
                      <span className={`status-badge status-${issue.status.toLowerCase().replace(' ', '-')}`}>
                        {issue.status}
                      </span>
                    </td>
                    <td>{issue.date}</td>
                    <td>
                      <div className="table-actions">
                        {!issue.department && (
                          <button className="btn btn-primary btn-small" onClick={() => { setSelectedIssue(issue.id); setModalType('assign'); }}>
                            Assign
                          </button>
                        )}
                        <button className="btn btn-warning btn-small" onClick={() => { setSelectedIssue(issue.id); setModalType('status'); }}>
                          Update
                        </button>
                        <button className="btn btn-danger btn-small" onClick={() => handleDelete(issue.id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedIssue && modalType === 'status' && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Update Issue Status</h3>
              <div className="form-group">
                <label className="form-label">Select New Status</label>
                <select className="form-select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                  <option value="">Choose status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={handleStatusUpdate}>Update</button>
                <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {selectedIssue && modalType === 'assign' && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Assign to Department</h3>
              <div className="form-group">
                <label className="form-label">Select Department</label>
                <select className="form-select" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                  <option value="">Choose department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={handleDepartmentAssign}>Assign</button>
                <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Issues;
