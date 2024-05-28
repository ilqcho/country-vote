# Country Vote App - React + TypeScript + Redux

## Overview

This is a simple application for voting countries built with React, TypeScript, and Vite. It allows users to view a paginated country data table ordered by most voted countries, complete a form for voting, and receive an alert when submitting. 

The design is responsive.

Using Redux for a centralized state management, which is beneficial for larger applications where multiple components need to share state. For this small project, Redux might be considered overkill, but it's a good practice for larger scalability.

Using react-hook-form for its simplicity and efficiency in handling form state and validation.

Integrated Material-UI for styling the table and form.

Using TypeScript for type safety.

## Dependencies

- **typescript:** ^5.2.2
- **react:** ^18.2.0
- **vite:** ^5.2.0

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [PNPM](https://pnpm.io/) installed on your system.

### Installation Steps

1. Navigate into the project directory:

    ```bash
    cd country
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

## Usage

To run the project locally, use the following command:

```bash
pnpm run dev
