# Yaswanth Kumar Akkireddy Portfolio

## Project overview

This repository contains a production-ready Next.js App Router portfolio for Yaswanth Kumar Akkireddy. It showcases AI engineering work, project case studies, recruiter-focused navigation, a formatted HTML resume experience, and a lighter Recruiter Mode from the same codebase.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- GSAP
- shadcn/ui and Base UI primitives
- Lucide React

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Project structure

- `src/app/` contains the homepage, resume route, global styles, and metadata.
- `src/components/` contains sections, navigation, animation systems, resume UI, and project UI.
- `src/data/` contains profile, projects, case studies, resume data, skills, experience, certifications, story chapters, and asset paths.
- `public/assets/` contains shared images.
- `public/assets/projects/` contains project images.
- `public/resume/` contains the downloadable resume PDF.

## Add a new project

1. Add the project image to `public/assets/projects/`.
2. Add the project object to `src/data/projects.ts`.
3. Add the matching case study object to `src/data/projectCaseStudies.ts`.
4. Update `src/data/assets.ts` if the image filename changes or needs a new key.
5. Push to GitHub.
6. Vercel auto-deploys on push.

## Replace images

- Put shared images in `public/assets/`.
- Put project images in `public/assets/projects/`.
- Update `src/data/assets.ts` if filenames change.

## Replace resume PDF

To replace the resume, put the new PDF at:

`public/resume/Yaswanth_Kumar_Akkireddy_Resume.pdf`

The `/resume` page will still render cleanly if the PDF is temporarily missing.

## Recruiter Mode

Recruiter Mode is stored in `localStorage` under `portfolio-recruiter-mode`.

When enabled, it:

- reduces particle density and animation intensity
- disables the custom cursor
- tones down background effects and parallax
- increases readability and information density

## Command Palette

Open the command palette with:

- `Ctrl + K` on Windows and Linux
- `Cmd + K` on macOS

It supports:

- section navigation
- project case-study shortcuts
- resume actions
- external profile links

## Deploy to Vercel

1. Push the code to GitHub.
2. Import the GitHub repository into Vercel.
3. Confirm the framework is detected as `Next.js`.
4. Use this build command:

```bash
npm run build
```

5. Deploy. Future pushes will auto-deploy by default.
