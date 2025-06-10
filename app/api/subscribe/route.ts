import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Path to store the emails
const EMAIL_FILE_PATH = path.join(process.cwd(), 'emails.json');

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Read existing emails
    let emails: string[] = [];
    try {
      const fileContent = await fs.readFile(EMAIL_FILE_PATH, 'utf-8');
      emails = JSON.parse(fileContent);
    } catch (error: unknown) {
      // File doesn't exist yet, we'll create it
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
        await fs.writeFile(EMAIL_FILE_PATH, JSON.stringify([], null, 2));
      } else {
        throw error;
      }
    }

    // Check if email already exists
    if (emails.includes(email)) {
      return NextResponse.json(
        { message: 'This email is already subscribed' },
        { status: 200 }
      );
    }

    // Add new email and save
    emails.push(email);
    await fs.writeFile(EMAIL_FILE_PATH, JSON.stringify(emails, null, 2));

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
