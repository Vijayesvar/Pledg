# Pledg - Peer-to-Peer Crypto-Backed INR Loans

Pledg is a platform that enables users to get instant INR loans against their crypto assets in a secure, transparent, and decentralized manner.

## Features

- Instant INR loans against crypto collateral
- Secure and transparent lending process
- Real-time loan tracking
- Easy repayment options
- Secure wallet integration

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Pledg.git
   cd Pledg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Deployment

This project is configured to be deployed to GitHub Pages. Push your changes to the `main` branch, and GitHub Actions will automatically build and deploy the site.

The site will be available at: [https://vijayesvar.github.io/Pledg](https://vijayesvar.github.io/Pledg)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# For local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# For production (GitHub Pages)
# NEXT_PUBLIC_SITE_URL=https://vijayesvar.github.io/Pledg
```

Note: The `.env.local` file is included in `.gitignore` and should not be committed to version control.

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible UI Components
- [GitHub Pages](https://pages.github.com/) - Hosting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
