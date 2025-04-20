# SevaIITP - NSS IIT Patna Donation Platform

![SevaIITP Logo](public/images/logo.png)

## Overview

SevaIITP is a comprehensive donation management platform developed for the National Service Scheme (NSS) at IIT Patna. The platform facilitates various types of donations including blood donation camps, blood requests, fundraising campaigns, and item donations. It provides a user-friendly interface for both donors and administrators to manage and participate in donation activities.

## Features

### Blood Donation Management
- **Blood Donation Camps**: Create and manage blood donation camps with details like location, date, time, and required blood groups
- **Blood Requests**: Post and respond to urgent blood donation requests
- **Blood Group Tracking**: Track available blood groups and requirements

### Fundraising
- **Campaign Creation**: Create fundraising campaigns with goals, descriptions, and categories
- **Progress Tracking**: Monitor campaign progress with visual progress bars
- **Multiple Categories**: Support for medical, education, disaster relief, and social causes
- **Payment Integration**: Multiple payment methods including credit/debit cards, UPI, and net banking

### Item Donations
- **Campaign Management**: Create and manage item donation campaigns
- **Category-based Organization**: Organize items by categories (clothing, food, books, etc.)
- **Drop-off Points**: Manage collection points and pickup arrangements
- **Item Tracking**: Track donated items and their conditions

### User Management
- **Role-based Access**: Separate interfaces for admin and regular users
- **User Profiles**: Manage user information and donation history
- **Authentication**: Secure login and registration system

### Admin Dashboard
- **Campaign Management**: Create, view, and delete all types of campaigns
- **User Management**: Monitor and manage user accounts
- **Analytics**: Track donation statistics and campaign progress
- **Cleanup Tools**: Remove completed or expired campaigns

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: Custom session-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshUpadhyay30/SevaIITP.git
   cd SevaIITP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=donation_db
   PORT=3000
   ```

4. Import the database schema:
   ```bash
   mysql -u your_mysql_username -p donation_db < database.sql
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`

## Database Schema

The application uses the following main tables:
- `users`: User accounts and authentication
- `blood_donation_camps`: Blood donation camp details
- `blood_donation_requests`: Blood request information
- `fundraising_campaigns`: Fundraising campaign details
- `fundraising_donations`: Records of monetary donations
- `item_donation_campaigns`: Item donation campaign details
- `item_donations`: Records of item donations

## Usage

### For Regular Users
1. Register an account or login
2. Browse available donation opportunities
3. Participate in blood donation camps, respond to blood requests, donate to fundraising campaigns, or contribute items
4. Track your donation history

### For Administrators
1. Login with admin credentials
2. Access the admin dashboard
3. Manage all types of campaigns
4. Monitor user activities and donation statistics
5. Clean up completed campaigns

## Default Admin Account
- Email: admin@donation.com
- Password: admin123

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- National Service Scheme (NSS) IIT Patna
- All contributors and supporters of the project

## Contact

For any queries or support, please contact:
- Email: support@sevaiitp.com
- Website: https://sevaiitp.com
