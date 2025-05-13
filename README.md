# Fxsion - Digital Solutions Agency

A modern, professional website for Fxsion - a digital solutions agency specializing in workflow automation, web development, mobile app development, and document automation solutions that streamline business operations and boost productivity.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations and interactions
- Custom cursor and interactive elements
- Comprehensive services section highlighting key offerings
- Project showcase with case studies
- Client testimonials and success metrics
- Contact form with integrated booking system
- Dockerized for easy deployment

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Docker for containerization
- Responsive image optimization
- CSS animations and transitions

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fxsion-agency.git
cd fxsion-agency
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

## Docker Deployment

The project includes a Dockerfile for containerized deployment:

```bash
# Build the Docker image
docker build -t fxsion-agency .

# Run the container
docker run -p 3000:3000 fxsion-agency
```

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   ├── CountUp.tsx        # Animated counter component
│   ├── CustomCursor.tsx   # Custom cursor component
│   └── PageSpacer.tsx     # Layout utility component
└── public/                # Static assets
    ├── images/            # General images
    ├── projects/          # Project images
    ├── skills/            # Technology icons
    └── testimonials/      # Testimonial images
```

## Services Offered

Fxsion specializes in:

1. **Workflow Automation** - Streamline operations using Zapier, Make.com, and custom integrations
2. **Web Development** - Create modern, responsive websites using Next.js, React, and Tailwind CSS
3. **Mobile App Development** - Build cross-platform mobile apps with Flutter
4. **Proposal & Document Automation** - Transform document workflows with PandaDoc and custom solutions

## Customization

1. Update content in each page component to match your offerings and services
2. Replace images in the `public` directory with your own project examples
3. Modify color schemes in `tailwind.config.js` and theme variables in `globals.css`
4. Update contact information, booking links, and social media profiles

## Deployment Options

The site can be deployed using:

- **Docker**: Using the included Dockerfile (recommended)
- **Vercel**: Direct integration with GitHub repository
- **Netlify**: Automated builds from Git
- **AWS Amplify**: Scalable hosting with CI/CD pipeline

## Contact

Fxsion Digital Solutions - [hello@fxsion.dev](mailto:hello@fxsion.dev)

Website: [https://fxsion.com](https://fxsion.com)
