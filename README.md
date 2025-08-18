# Catur Insan Cendekia University Website Design Competition

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (with Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v20 or later) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/janfdev/limitless_UMC_BitFest2025.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd limitless_UMC_BitFest2025
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js App Router structure:

```
lomba-web/
├── app/                  # Main application routes and global styles
├── components/           # Reusable React components
│   ├── section/          # High-level page sections (Hero, Footer, etc.)
│   └── ui/               # Low-level UI components (Button, Card, Dialog)
├── lib/                  # Helper functions, data, types, and utilities
│   ├── data.ts           # Static data for programs, activities, etc.
│   ├── helpers.ts        # Utility functions
│   └── type.ts           # TypeScript type definitions
├── public/               # Static assets (images, logos)
└── ...                   # Configuration files (Next.js, Tailwind, etc.)
```
