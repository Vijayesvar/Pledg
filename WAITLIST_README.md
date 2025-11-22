# Waitlist Storage System

## Overview

The Pledg application uses a Vercel-hosted backend API to store waitlist entries.

## Architecture

### Backend API Server
- **Hosting**: Vercel
- **URL**: `https://pledg-landing-page-ox84btgs6-vijayesvar0701-gmailcoms-projects.vercel.app`
- **Framework**: Express.js with CORS enabled

### Data Storage
- Managed by the Vercel backend
- Format: JSON array of waitlist entries

## How It Works

1. **User Submission**: When a user fills out the waitlist form on the frontend, the data is sent to the Vercel backend API
2. **API Processing**: The backend validates the data, checks for duplicate emails, and stores the entry
3. **File Storage**: Each entry is stored with a unique ID and timestamp

## Running the Application

### Start Development Server

```bash
# Start frontend (Vite dev server on port 3000)
npm run dev
```

The frontend will automatically connect to the Vercel backend API.

## API Endpoints

### POST /api/waitlist
Submit a new waitlist entry

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "amount": "₹5,00,000",
  "term": "6",
  "notes": "Looking for quick approval"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully joined the waitlist",
  "entry": {
    "id": "1700000000000",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "amount": "₹5,00,000",
    "term": "6",
    "notes": "Looking for quick approval",
    "submittedAt": "2024-01-15T10:30:00.000Z",
    "status": "pending"
  }
}
```

**Response (Error - Duplicate Email):**
```json
{
  "success": false,
  "message": "This email is already on the waitlist"
}
```

### GET /api/waitlist
Retrieve all waitlist entries (for admin purposes)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "entries": [...]
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Data Structure

Each waitlist entry contains:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (timestamp) |
| `name` | string | Full name of the applicant |
| `email` | string | Email address (unique) |
| `phone` | string | Phone number (optional) |
| `amount` | string | Desired loan amount |
| `term` | string | Loan term in months (3, 6, 9, or 12) |
| `notes` | string | Additional notes (optional) |
| `submittedAt` | string | ISO 8601 timestamp |
| `status` | string | Entry status (default: "pending") |

## Environment Configuration

The frontend uses environment variables to configure the API URL:

**`.env.example`:**
```
VITE_API_BASE_URL=https://pledg-landing-page-ox84btgs6-vijayesvar0701-gmailcoms-projects.vercel.app
```

Copy `.env.example` to `.env` for local development.

## Features

- ✅ **Duplicate Prevention**: Checks for existing emails before adding
- ✅ **Auto-generated IDs**: Each entry gets a unique timestamp-based ID
- ✅ **Timestamps**: Automatic submission timestamp
- ✅ **Validation**: Required fields are validated
- ✅ **Error Handling**: Graceful error handling with user-friendly messages
- ✅ **CORS Enabled**: Frontend can communicate with backend
- ✅ **Vercel Hosting**: Scalable, serverless backend

## Troubleshooting

### Form submission fails
- Verify the Vercel backend is accessible
- Check browser console for CORS errors
- Ensure environment variables are set correctly

### API URL Configuration
- Check `.env` file exists and contains correct `VITE_API_BASE_URL`
- Restart dev server after changing environment variables
