# INFOBOT

<i>You wouldn't have to repeat yourself now!</i>

![InfoBot Logo](./infobot.png)

InfoBot is a knowledge-sharing FAQ platform with integrated chatbot capabilities. It allows users to create organizations, manage FAQs, and share organization-specific FAQs with their students or audience.

## Project Overview

InfoBot is a platform designed to facilitate the creation and sharing of FAQs to help users find answers to their common queries efficiently. With integrated chatbot functionality powered by OpenAI's GPT-3 and Dialogflow, InfoBot can provide instant responses based on the knowledge base of FAQs.

## Features

- **Organization Management**:

  - Create and manage organizations to categorize FAQs.
  - Customize organization-specific subroutes for easy sharing (e.g., `/faqs/my-org-name`).

- **FAQ Management**:

  - Create, edit, and organize FAQs within organizations.
  - Categorize and tag FAQs for easy navigation.

- **Chatbot Integration**:

  - An integrated chatbot powered by OpenAI and Dialogflow.
  - Real-time responses to user queries based on the FAQs in the knowledge base.

- **Authentication and User Profiles**:

  - User authentication and authorization.
  - User profiles with saved FAQs, usage history, and customization options.

- **Search and Navigation**:

  - Search functionality to find relevant FAQs quickly.
  - User-friendly navigation and browsing of FAQs.

<!-- - **Analytics Dashboard**:
  - Admin dashboard for tracking user engagement and FAQ usage statistics. -->

## Tech Stack

- **Language**:
  - [x] TypeScript
- **Frontend**:
  - [x] Next.js 13
  - [x] Tailwind CSS
- **Backend**:
  - [ ] Node.js
  - [x] MongoDB
- **AI and Chatbot**:
  - [x] OpenAI (GPT-3)
  - [ ] Dialogflow
  - [ ] Wisper API
- **Authentication**:
  - [ ] NextAuth.js
- **State Management**:
  - [ ] Redux Toolkit
- **Vector Search**:
  - [x] Mongo Atlas Vector Search

## Usage and FAQ Management

- Create organizations, add FAQs and customize your organization.
- You can share your organization's FAQs under `/faqs/org-name` route.
- Use the chatbot to ask questions, and it will provide responses based on the FAQs you've added.
- To create and manage FAQs, log in and navigate to your organization's dashboard.
- Use the FAQ management interface to create, edit, and categorize FAQs.

## Chatbot

- The integrated chatbot responds to user queries in real time.
- The chatbot is powered by OpenAI's GPT-3, Wisper API and Dialogflow for accurate and contextual responses.

## Contributing

Contributions are welcome! To contribute to InfoBot, please follow our [contribution guidelines](./docs/CODE_OF_CONDUCT.md).

## Contact

For questions, feedback or support please contact Shehzad Iqbal at [shehzad.dev@pm.me](mailto:shehzad.dev@pm.me).

---

This project is licensed under the [MIT License](./LICENSE).

Inspiration from Sir [Ameen Alam's App](https://ameenalam.web.app/faq/linux)
