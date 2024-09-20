// Simulated hardware status (randomly generated for demonstration)
const hardwareComponents = [
  { id: 'cameraStatus', percentId: 'cameraPercentage', name: 'Camera', status: 'good', abnormality: 0 },
  { id: 'temperatureStatus', percentId: 'temperaturePercentage', name: 'Temperature Sensor', status: 'good', abnormality: 0 },
  { id: 'powerStatus', percentId: 'powerPercentage', name: 'Power Supply', status: 'good', abnormality: 0 },
  { id: 'coolingStatus', percentId: 'coolingPercentage', name: 'Cooling System', status: 'good', abnormality: 0 },
  { id: 'storageStatus', percentId: 'storagePercentage', name: 'Storage', status: 'good', abnormality: 0 }
];

// Function to simulate checking the status of each hardware component
function checkHardwareStatus() {
  let isCritical = false;
  
  hardwareComponents.forEach(component => {
      // Simulating abnormality percentage between 0% to 100%
      const abnormalityPercentage = Math.floor(Math.random() * 100);
      component.abnormality = abnormalityPercentage;
      
      // Set status based on abnormality percentage
      if (abnormalityPercentage < 30) {
          component.status = 'good';
      } else if (abnormalityPercentage < 70) {
          component.status = 'warning';
      } else {
          component.status = 'critical';
      }

      const statusElement = document.getElementById(component.id);
      const percentElement = document.getElementById(component.percentId);
      
      percentElement.textContent = `Abnormality: ${component.abnormality}%`;

      if (component.status === 'good') {
          statusElement.textContent = `Status: Normal`;
          statusElement.className = 'status good';
      } else if (component.status === 'warning') {
          statusElement.textContent = `Status: Maintaince`;
          statusElement.className = 'status warning';
      } else {
          statusElement.textContent = `Status: Critical`;
          statusElement.className = 'status critical';
          isCritical = true;
      }
  });

  if (isCritical) {
      sendAlertNotification();
  } else {
      clearNotification();
  }
}

// Function to send an alert notification
function sendAlertNotification() {
  const notificationElement = document.getElementById('notification');
  notificationElement.textContent = 'ALERT! One or more components are in critical condition. Immediate action required.';
  notificationElement.style.display = 'block';
}

// Function to clear the notification if all components are in normal or warning state
function clearNotification() {
  const notificationElement = document.getElementById('notification');
  notificationElement.style.display = 'none';
}

// Check the hardware status every 10 seconds
setInterval(checkHardwareStatus, 10000);

// Initial status check on page load
checkHardwareStatus();
