import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  const mockIssues = [
    { id: 1, category: 'Pothole', location: 'Main Street', status: 'Pending', date: '2024-01-15' },
    { id: 2, category: 'Garbage Overflow', location: 'City Park', status: 'In Progress', date: '2024-01-14' },
    { id: 3, category: 'Street Light', location: 'Oak Avenue', status: 'Resolved', date: '2024-01-10' },
    { id: 4, category: 'Water Leakage', location: 'Elm Street', status: 'Pending', date: '2024-01-16' }
  ];

  return (
    <div className="dashboard-page" style={{
      backgroundImage: 'linear-gradient(rgba(203, 221, 233, 0.95), rgba(203, 221, 233, 0.95)), url(/Urban-Design-Trends-in-High-Density-Living.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Overview of reported issues</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-label">Total Issues</div>
            <div className="stat-value">4</div>
          </div>
          
          <div className="stat-card pending">
            <div className="stat-label">Pending</div>
            <div className="stat-value">2</div>
          </div>
          
          <div className="stat-card in-progress">
            <div className="stat-label">In Progress</div>
            <div className="stat-value">1</div>
          </div>
          
          <div className="stat-card resolved">
            <div className="stat-label">Resolved</div>
            <div className="stat-value">1</div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-header">Recent Issues</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {mockIssues.map(issue => (
                  <tr key={issue.id}>
                    <td>#{issue.id}</td>
                    <td>{issue.category}</td>
                    <td>{issue.location}</td>
                    <td>
                      <span className={`status-badge status-${issue.status.toLowerCase().replace(' ', '-')}`}>
                        {issue.status}
                      </span>
                    </td>
                    <td>{issue.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
