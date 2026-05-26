# Contact Management Mobile App for Technical Test

![Expo](https://img.shields.io/badge/Expo-56.0.4-000020?logo=expo&logoColor=white)
![Uniwind](https://img.shields.io/badge/Uniwind-1.7.0-111827?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-24%20LTS-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&logoColor=black)
![React Native](https://img.shields.io/badge/React%20Native-0.85.3-20232A?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.12.0-764ABC?logo=redux)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?logo=vitest&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.100.14-FF4154?logo=reactquery&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.76.1-EC5990?logo=reacthookform&logoColor=white)
![React Native Testing Library](https://img.shields.io/badge/React%20Native%20Testing%20Library-13.2.0-E33332?logo=testinglibrary&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.4.3-3E67B1)
![Coverage](https://codecov.io/gh/pramahaditamaputra/contact-management-react-native-with-expo/branch/main/graph/badge.svg)
![CI](https://github.com/pramahaditamaputra/contact-management-react-native-with-expo/actions/workflows/ci.yml/badge.svg?branch=main)

[Live Demo - Download APK for Android](https://drive.google.com/file/d/1sg7QJ8zro5ZFKx-WegvpM3T14tjBEqiW/view?usp=sharing)

## Video Demo

Watch the app showcase here:

[Contact Management Video Demo](https://drive.google.com/file/d/1pjNazxARl7samAdL5rLJ1WATCH2m4l52/view?usp=sharing)

A modern Contact Management mobile application built with Expo SDK 56.0.4 + React Native 0.85.3 + React 19.2.3, TypeScript 5.9, Redux Toolkit 2.12.0 and TanStack Query 5.100.14, React Hook Form 7.76.1, Zod 4.4.3, Uniwind 1.7.0, React Native Testing Library 13.2.0 following a feature-based clean architecture.

## Tech Stack

- Framework: Expo SDK 56.0.4 + React Native 0.85.3 + React 19.2.3
- Language: TypeScript 5.9
- State Management: Redux Toolkit 2.12.0
- Server State: TanStack Query 5.100.14
- Forms: React Hook Form 7.76.1 + Zod 4.4.3
- Styling: Uniwind 1.7.0 + Stylesheet
- Testing: Vitest 3.2.4 + React Native Testing Library 13.2.0

## Getting Started

Prerequisites:

- Node.js 24 LTS
- npm

Install dependencies:

```bash
npm install
```

Environment variables (create `.env`):

```bash
EXPO_PUBLIC_API_BASE_URL=https://randomuser.me/api
```

Run development server:

```bash
npm run ios
npm run android
```

## Available Scripts

```bash
npm run start      # start dev metro server
npm run ios        # run development in ios
npm run android    # run development in android
npm run lint       # run eslint
npm run test       # run vitest (watch mode depends on your config)
npm run coverage   # run tests with coverage
```

## API

This app expects a contacts API. Default base URL used in development:

- `EXPO_PUBLIC_API_BASE_URL=https://randomuser.me/api`

## Project Structure (high level)

```text
src/
├── app/           # Expo routes
├── providers/     # App providers (Redux, QueryClient)
├── store/         # Redux store + hooks
├── shared/        # Shared UI, api client, utilities
└── features/
 └── contact/
  ├── data/          # Data sources, mappers, repository implementation
  │   ├── api/
  │   ├── mappers/
  │   └── repositories/
  ├── domain/        # Entities, repository contracts, use cases
  │   ├── entities/
  │   ├── repositories/
  │   └── usecases/
  └── presentation/  # UI components, views, state, queries, viewmodels
   ├── components/
   ├── forms/
   ├── queries/
   ├── state/
   ├── viewmodels/
   └── views/
```

## Architecture Diagram

[View Full Diagram](https://drive.google.com/file/d/1ZDjshRsDEX_M5En0DOM41eeZm5PTrCBb/view)

![Clean Architecture Diagram](https://drive.google.com/uc?export=view&id=1ZDjshRsDEX_M5En0DOM41eeZm5PTrCBb)

## Testing

Unit and component tests are implemented with Vitest and Testing Library. Run:

```bash
npm run test
npm run coverage
```

## Notes

- The app is structured for maintainability and testability using a feature-based clean architecture.
- Redux handles local/UI state (Search), while TanStack Query handles server state and caching.
