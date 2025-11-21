# Waitlist Storage System

## Overview

The Pledg application now includes a backend API server that stores waitlist entries to a JSON file in the codebase.

## Architecture

### Backend API Server
- **Location**: `server/index.js`
- **Port**: 3001
- **Framework**: Express.js with CORS enabled

### Data Storage
- **Location**: `data/waitlist.json`
- **Format**: JSON array of waitlist entries

## How It Works

1. **User Submission**: When a user fills out the waitlist form on the frontend, the data is sent to the backend API
2. **API Processing**: The backend validates the data, checks for duplicate emails, and stores the entry
3. **File Storage**: Each entry is appended to `data/waitlist.json` with a unique ID and timestamp

## Running the System

### Start Both Servers

```bash
# Terminal 1: Start frontend (Vite dev server on port 3000)
npm run dev

# Terminal 2: Start backend API (Express server on port 3001)
npm run server
```

### Or Run Both Together

```bash
npm run dev:all
```

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

## Viewing Waitlist Data

The waitlist data is stored in `data/waitlist.json`. You can:

1. **View directly**: Open `data/waitlist.json` in any text editor
2. **Use API**: GET request to `http://localhost:3001/api/waitlist`
3. **Command line**: `cat data/waitlist.json` (Unix) or `type data\waitlist.json` (Windows)

## Features

- ✅ **Duplicate Prevention**: Checks for existing emails before adding
- ✅ **Auto-generated IDs**: Each entry gets a unique timestamp-based ID
- ✅ **Timestamps**: Automatic submission timestamp
- ✅ **Validation**: Required fields are validated
- ✅ **Error Handling**: Graceful error handling with user-friendly messages
- ✅ **CORS Enabled**: Frontend can communicate with backend

## Security Considerations

> **Note**: This is a development setup. For production:
> - Add authentication for the GET endpoint
> - Implement rate limiting
> - Use a proper database instead of JSON file
> - Add input sanitization
> - Enable HTTPS
> - Add logging and monitoring

## Troubleshooting

### Backend not starting
- Check if port 3001 is available
- Ensure all dependencies are installed: `npm install`

### Form submission fails
- Verify backend server is running on port 3001
- Check browser console for CORS errors
- Ensure `data/` directory exists

### Data not saving
- Check file permissions for `data/waitlist.json`
- Verify backend server logs for errors
