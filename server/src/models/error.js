module.exports = {
    ADMIN_ERROR: {
      http_error: {
        code: '404',
        message: 'Admin not found.',
      },
      server_error: {
        code: 'A001',
        message: 'Access denied for admin role.',
      },
      db_error: {
        code: 'A001',
        message: 'Access denied for admin role.',
      },
      
    },
    EMPLOYEE_ERROR: {
      HTTP_ERROR: {
        code: '200',
        message: 'Invalid Credentials.',
      },
      // Add more employee-specific errors here
    },
    MANAGER_ERRORS: {
      ACCESS_DENIED: {
        code: 'M001',
        message: 'Access denied for manager role.',
      },
      // Add more manager-specific errors here
    },
    HR_ERRORS: {
      ACCESS_DENIED: {
        code: 'H001',
        message: 'Access denied for HR role.',
      },
      // Add more HR-specific errors here
    },
    // Add other generic errors that can occur for any role here
  };
  