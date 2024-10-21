import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

// Registering necessary chart elements for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data for charts
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings',
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        borderColor: '#4e73df',
        backgroundColor: 'rgba(78, 115, 223, 0.1)',
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ['Social', 'Direct', 'Referral'],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  };

  const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Donations',
        data: [120, 190, 300, 500, 200],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Online', 'Offline', 'Subscription'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#f6c23e', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#d1a22d', '#17a673', '#2c9faf'],
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Earnings (Monthly) Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card bg-primary text-white shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Donations (Monthly)</div>
                  <div className="h5 mb-0 font-weight-bold">Rs 40,000</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings (Annual) Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card bg-success text-white shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Donations (Annual)</div>
                  <div className="h5 mb-0 font-weight-bold">Rs 215,000</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card bg-info text-white shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Tasks</div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold">50%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-light" role="progressbar" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Requests Card */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card bg-warning text-white shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">Pending Requests</div>
                  <div className="h5 mb-0 font-weight-bold">18</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bar Chart */}
      <div className="chart-container mt-4">
        <Bar data={barData} />
      </div>

      {/* Charts Section */}
      <div className="row mt-4">
        {/* Line Chart */}
        <div className="col-xl-4 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Donations Overview</h6>
            </div>
            <div className="card-body">
              <Line data={lineData} />
            </div>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Payment Methods</h6>
            </div>
            <div className="card-body">
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            </div>
            <div className="card-body">
              <Pie data={pieData} />
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Referral
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
