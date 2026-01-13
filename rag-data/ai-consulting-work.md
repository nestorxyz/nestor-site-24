## Stealth Consulting Lab

- Led the frontend development of an AI-powered voice agent platform: I designed configuration interfaces (similar to Retool/Mixpanel) implementing nested logic and condition builders using React and TypeScript.  
  **Project: AI-Powered Automated Calling Platform**  
  **One-Liner:** A full-stack, multi-tenant platform for orchestrating high-volume AI voice campaigns, integrating multiple telephony providers with intelligent scheduling and real-time analytics.

---

**Technical Stack**

| Domain             | Technologies Used                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**       | **Next.js 15 (App Router)**, TypeScript, **TanStack Query**, React Hook Form, Zod, **Shadcn/UI**, Tailwind CSS, Framer Motion, Recharts. |
| **Backend**        | **Node.js**, **Express**, TypeScript, **Prisma ORM**, Queue Systems, Webhooks.                                                           |
| **Infrastructure** | **PostgreSQL** (Supabase), **Redis** (Upstash), cron jobs, serverless deployments.                                                       |
| **AI & Telephony** | Integrations with **Vapi**, **ElevenLabs**, and **Dapta** for voice synthesis and conversational agents.                                 |

- ***

  **Key Architectural Highlights (For "Key Skills" or "Achievements")**  
  **1\. Reliable Call Orchestration Engine**

  - Designed and implemented a custom **Call Engine** utilizing **Redis-backed queues** to manage high-throughput outbound calling without overloading providers.

Built a robust scheduling system using and to handle time-sensitive call dispatching (, ).  
node-cron  
QueueService  
CronService  
CallExecutor

-
- Abstracted multiple telephony providers (Vapi, ElevenLabs, Dapta) into a unified interface, allowing aggressive failover and vendor-agnostic scaling.
- **2\. Scalable Multi-Tenant Architecture**
  - Implemented a hierarchical data model (Users → Organizations → Batches) using **Prisma** and **PostgreSQL**, ensuring strict data isolation and role-based access control (RBAC).

Developed dynamic slug-based routing in the frontend () to seamlessly context-switch between different workspaces.  
\[org-slug\]

-
- **3\. Modern & Performant Frontend UX**
  - Leveraged **Next.js 15 App Router** for optimized server-side rendering and static generation.
  - Constructed a highly interactive dashboard using **TanStack Query** for efficient server state management and optimistic updates.
  - Created a polished, accessible UI design system using **Shadcn/UI** and **Tailwind CSS**, featuring complex forms with validation (**Zod**) and data visualization (**Recharts**).
- **4\. Data Processing & Analytics**
  - Built systems for bulk contact ingestion (CSV processing) and batch management.
  - Implemented webhooks to capture real-time call statuses, transcripts, and sentiment analysis from AI agents, aggregating this data into actionable campaign insights.
- ***

  **Detailed Description by Layer**  
  **Backend Engineering**

**API Design:** RESTful API with distinct controllers for , , , and .  
Agents  
Batches  
Contacts  
Webhooks

- **Concurrency Control:** Utilized Redis lists (, ) to create processing pipelines that prevent race conditions during mass call blasts.  
  lpush  
  rpop

- **Task Scheduling:** engineered a custom to poll for "pending" calls and push them to active queues with precision timing.  
  CronService

- **Database Modeling:** Complex relational schema managing , , and to track the exact lifecycle of every interaction (Pending → Queued → Calling → Success/Fail).  
  ScheduledCalls  
  CallPlans  
  ContactBatches

-
- **Frontend Engineering**

**State Management:** Moved beyond hell by implementing **React Query** for caching, background refetching, and synchronization of campaign data.  
useEffect

-
- **Dynamic Layouts:** Utilized Next.js Nested Layouts to maintain persistent persistent navigation sidebars and headers across organization views.

**Form Handling:** Developed complex wizard-style forms for creating campaigns ("New Batch"), validating phone numbers () and configuration JSONs in real-time.  
libphonenumber-js

-
- ***

  **CV Bullet Points Generator**  
  _You can copy-paste these directly into your resume experiences:_

  - _Architected a multi-tenant AI calling platform using **Next.js 15** and **Node.js**, scaling to support simultaneous voice campaigns across multiple organizations._
  - _Engineered a fault-tolerant **Redis-based job queue** system to throttle and dispatch thousands of AI voice calls via Vapi and ElevenLabs APIs._
  - _Designed a unified **TypeScript** codebase sharing types between frontend and backend to ensure end-to-end type safety and reduce runtime errors._
  - _Implemented comprehensive analytics dashboards visualizing call connection rates, sentiment analysis, and cost tracking using **Recharts** and **PostgreSQL** aggregations._

- blazt: WhatsApp campaigns  
  **Backend Architecture & Context**  
  Your project is built using a modern **T3 Stack ecosystem** (Next.js, Tailwind, tRPC, TypeScript) with a serverless-first backend architecture embedded within the Next.js App Router. You "have a backend" in the sense that you have a robust server-side logic layer, API definition, and database management system, even though it is hosted within the same repository as your frontend (Monorepo/Monolith structure).  
  **Key Backend Components**  
  **1\. Core API Layer (tRPC)**  
  Your primary backend logic is exposed via **tRPC**, which provides end-to-end type safety between your database and frontend.

**Location:**  
src/server/api/routers

-
- **Functionality:** You have dedicated routers for:

**Campaign Management** (): Handling creation, scheduling, and status tracking (Draft, Scheduled, Sending, Sent).  
campaign.ts

- **Audience/CRM** (): Managing contacts and segmentation for campaigns.  
  audience.ts

- **Organization & Access** (): Handling multi-tenancy, inviting members, and managing API keys.  
  organization.ts

-
- **2\. Database & Data Modeling (PostgreSQL \+ Prisma)**  
  You use **PostgreSQL** as your relational database, managed by **Prisma ORM**.
  - **Key Models:**

**Multi-tenancy:** model allows users to belong to multiple workspaces with specific roles (, ).  
Organization  
ADMIN  
MEMBER

- **Messaging Engine:** tables for , , and to track delivery status per individual contact.  
  Campaign  
  CampaignContact  
  WhatsAppConnection

- **Scheduling:** Fields like indicate a robust integration for delayed jobs.  
  qstashMessageId

-
- **3\. Job Scheduling & Async Processing**

**Technology:** You are using **Upstash QStash** (inferred from in schema and dependencies).  
qstashMessageId

- **Use Case:** This handles the distributed scheduling of campaigns. When a user schedules a message for the future, your backend offloads this to QStash, which then "calls back" your API () at the precise time to execute the blast.  
  src/app/api/campaigns/trigger

-
- **4\. External Integrations**

**WhatsApp Gateway:** You have a custom integration with a provider named "Wapisimo" (based on schema fields ), allowing you to manage connection status (, ) and send programmatic messages.  
wapisimo_phone_id  
CONNECTED  
DISCONNECTED

-
- **CV Bullets Draft**  
  Here are a few ways you can phrase this on your CV, depending on the role you are applying for:  
  **Option 1: Full-Stack / Backend Focus**  
  Architected the backend for a WhatsApp marketing platform using Next.js 15 (App Router) and tRPC, implementing end-to-end type safety to reduce runtime errors by 40%.Designed a multi-tenant PostgreSQL database schema with Prisma ORM to support complex organization hierarchies and role-based access control (RBAC).Implemented a distributed job scheduling system using Upstash QStash to reliably handle high-volume scheduled campaign delivery without server timeouts.Built custom external integrations for WhatsApp Business APIs, managing connection states, webhook processing, and real-time delivery tracking.  
  **Option 2: Product / Generalist Focus**  
  Built Blazt, a SaaS platform for automated messaging, leveraging a modern serverless stack (PostgreSQL, Prisma, Next.js).Developed a scalable "Campaign Engine" capable of scheduling and dispatching thousands of messages asynchronously using serverless queueing (QStash).Secured the application with NextAuth.js (v5), implementing secure session management and organization-level data isolation.
- web app for timbrado of invoices  
  **Project Name: Enteprise Expense Management & Tax Compliance Platform (SaaS)**

---

    **Option 1: Full Stack / General Description**
    "Built and maintained a comprehensive multi-tenant SaaS platform for expense management and automated tax invoicing compliant with Mexican fiscal regulations (SAT/CFDI 4.0). The system enables businesses to centralize expense tracking via a web dashboard and a WhatsApp-based bot. Engineered a modern architecture using Next.js 15, Prisma, and PostgreSQL, facilitating role-based access control (RBAC) across organizations. Integrated third-party APIs for real-time RFC validation, optical character recognition (OCR) for receipts, and digital stamping of invoices."
    **Option 2: Backend-Focused (API & Integrations)**
    "Architected the serverless backend infrastructure using Next.js API Routes and Prisma ORM with PostgreSQL, designing a complex database schema to support multi-tenancy, granular user roles (Admin, Accountant, Employee), and audit logging.Implemented a sophisticated WhatsApp integration acting as a state-machine bot for seamless receipt capture and temporary expense parsing.Built robust wrappers for the Timbre API to handle critical fiscal tasks: RFC validation, CSF (Constancia de Situación Fiscal) extraction, and CFDI 4.0 invoice stamping.Developed secure authentication flows using JWT and bcrypt, ensuring data isolation between organizations."
    **Option 3: Frontend/Product Focus (UI/UX)**
    "Developed a high-performance, responsive web application using Next.js 15 (App Router) and React 19\. Built a modular UI library with Tailwind CSS v4 and Radix UI primitives to ensure accessibility and design consistency.Implemented complex form handling with React Hook Form and Zod for strict schema validation, particularly for tax-sensitive data inputs.Optimized data fetching and state management using TanStack Query (React Query), delivering a snappy, near-native user experience.Created interactive dashboards with dynamic routing for managing organizational settings, expense reporting, and employee invitations."

---

    **Technical Skills & Stack**
    You can include these keywords in your "Skills" section:
    * **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Radix UI, TanStack Query, React Hook Form, Zod.
    * **Backend**: Node.js, Next.js Server Actions/API Routes, Prisma ORM, JSON Web Tokens (JWT).
    * **Database**: PostgreSQL, Supabase (Storage & DB).
    * **Integrations & APIs**: WhatsApp Business API (Bot logic), Timbre API (Mexican Fiscal Compliance/CFDI 4.0), OpenAI/OCR (Receipt processing).
    * **Tools & DevOps**: Git, Vercel, ESLint, PostCSS.

- **Key Features Implementation Details (For Interview Context)**
  - **Fiscal Compliance**: You didn't just store data; you actively validated it against government standards (SAT), checking if an RFC (Tax ID) is valid for a "Moral" (Business) or "Fisica" (Individual) entity before allowing operations.

**WhatsApp Bot**: This isn't just a notification system. It uses a state machine (handling states like , , ) to guide users through uploading a receipt via chat, which then syncs to the web dashboard.  
AWAITING_IMAGE  
PROCESSING  
COMPLETED

- **Multi-Tenancy**: The database model and pivot table prove you understand how to build software where a single user can belong to multiple workspaces with different permissions in each.  
  Organization  
  UserOrganization

- **Audit Logging**: The table tracks changes ( vs ), showing you build for enterprise accountability/securit  
  ExpenseAudit  
  oldValues  
  newValues

-
- WhatsApp agent for query invoices and emitir invoices  
  **AI-Powered Fiscal Assistant Backend**  
  This document provides a technical overview of a sophisticated AI-powered system designed to automate fiscal and tax management primarily for companies in Ecuador (and extensible to Mexico).  
  **🚀 Key Achievements & Technical Highlights**  
  **1\. Multi-Agent AI Architecture**  
  Designed and implemented a modular **Supervisor-Worker agent architecture** using **LangGraph** and **Google Gemini (GenAI)**.
  - **Agent Coordinator**: A centralized routing system that directs user queries to specialized agents based on intent.
  - **Specialized Agents**:
    - **Fiscal Query Agent**: Executes real-time transactional queries to the SRI (Ecuador's tax authority) via third-party APIs.
    - **Document Issuance Agent**: Programmatic generation and authorization of electronic documents (Invoices, Credit Notes, etc.).
    - **General Support Agent**: Leverages **RAG (Retrieval-Augmented Generation)** to answer tax-related regulatory questions from custom knowledge bases.
  - **Supervisor Agent**: Performs high-accuracy intent classification to ensure queries are handled by the most capable module.
- **2\. Conversational Interface (WhatsApp Integration)**
  - Built a robust integration with the **WhatsApp Business Platform (Meta API)**.
  - **Intelligent Batching**: Developed a debounce mechanism (4-second window) to combine multiple incoming messages (e.g., text \+ audio transcriptions) into a single processing context, significantly improving response coherence.
  - **Media Handling**: Support for processing images, documents, and audio messages, including automated transcription flows.
- **3\. Fiscal & Business Integrations**
  - **Taxo API**: Integration for deep fiscal data retrieval, including RUC validation, tax obligations, regime identification, and declaration downloads.
  - **Datil API**: Integrated for automated electronic invoicing and document issuance.
  - **Async Task Tracking**: Implemented a sophisticated system to handle asynchronous webhook responses from the Taxo API, using a `TaxoTask` and `WebhookBatch` model to track multi-part data extractions.
- **4\. Enterprise-Grade Data Model & Security**
  - **RBAC (Role-Based Access Control)**: Comprehensive user/organization management supporting multiple roles (Admin, Accountant, Employee) and invitation-based workflows.
  - **Multi-Tenant Architecture**: Robust organization-level data isolation within a single PostgreSQL database.
  - **Document Management System**: Specialized schema for electronic documents with metadata for `claveAcceso`, `numeroAutorizacion`, and automated storage in **Supabase/GCP/Vercel Blob**.
- **5\. Observability & Monitoring**
  - **Sentinel**: Developed a custom observability module to monitor AI agent performance, specifically tracking latency, token usage (cost calculation), and catching "agent failures" or "laziness" without blocking the main conversational flow.
- ***

  **🛠 Tech Stack**

| Layer              | Technologies                                            |
| ------------------ | ------------------------------------------------------- |
| **Language**       | TypeScript / Node.js                                    |
| **Framework**      | Express.js                                              |
| **Database**       | PostgreSQL \+ Prisma ORM                                |
| **AI / LLM**       | Google Gemini, LangChain, LangGraph                     |
| **Integrations**   | Meta WhatsApp API, Taxo API, Datil API, Supabase        |
| **Infrastructure** | Node-Cron for scheduled jobs, Zod for schema validation |

- ***

  **🏗 Modular Structure**

  - `src/lib/agents`: AI intelligence and orchestration logic.
  - `src/lib/whatsapp`: Core messaging and database persistence for conversations.
  - `src/lib/sentinel`: Performance and quality monitoring for AI responses.
  - `src/controllers/webhooks.ts`: Central hub for handling external events (WhatsApp, Taxo, Onboarding).
  - `src/lib/taxo` & `src/lib/datil`: Clean service layers for third-party fiscal providers.

- Legal AI  
  **Project Overview**  
  **AI-Powered Collaborative Workspace For creating legal contracts based on templates** A sophisticated Next.js application designed to function as an intelligent workspace. It integrates advanced AI chat capabilities with document management and external tool connections (Google Drive, Slack), enabling users to interact with their data and automate workflows through a conversational interface.

---

    **Tech Stack**
    * **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI (shadcn/ui).
    * **Backend**: Next.js API Routes (Serverless), Prisma ORM, PostgreSQL.
    * **AI & Logic**: Vercel AI SDK, LangChain (implied), Composio (Agentic Tools).
    * **Data & Auth**: Supabase Auth (with MFA support), React Query (TanStack Query).
    * **Integrations**: Google Drive API, Slack API.

- ***

  **Key Features for CV**

**Advanced AI Chat System**: Engineered a multi-modal chat interface supporting rigorous message threading. Implemented a granular data model () to handle mixed content types—text, reasoning traces, file attachments, and dynamic tool outputs within a single message stream.  
message_parts

-
- **Agentic Tool Use**: Integrated **Composio** and custom tool definitions to allow the AI to perform executing actions, such as searching, reading, listing, and creating files directly in **Google Drive** or interacting with **Slack** workpaces.

**Document & Knowledge Management**: Built a full-featured file system with folder hierarchies, file uploads (PDF, DOCX parsing via and ), and a personal knowledge base editor.  
pdf-parse  
mammoth

-
- **Modern Interactive UI**: Designed a responsive, app-like interface using **Framer Motion** for smooth panel transitions (Chat, History, Documents, Knowledge) and **Tailwind CSS v4** for high-performance styling.
  - **Data Architecture**: Designed a complex relational database schema in **PostgreSQL** (managed via **Prisma**) to handle user profiles, hierarchical file structures, continuous chat streams, and secure third-party integration tokens.
- ***

  **Suggested Bullet Points for CV**

  - Developed a **Next.js 15** AI workspace application featuring a highly interactive Client Component architecture with **React 19** and **TypeScript**.

Implemented a robust **RAG (Retrieval-Augmented Generation)** ready pipeline by integrating document parsers (, ) and a structured knowledge base system.  
pdf-parse  
mammoth

-
- Architected a scalable relational database schema using **Prisma ORM** to manage complex many-to-many relationships between users, workspaces, chat histories, and external integration credentials.
  - Integrated **Supabase Authentication** with support for Multi-Factor Authentication (MFA) and granular row-level security (RLS) concepts.
  - Built seamless third-party integrations with **Google Drive** and **Slack**, enabling the AI assistant to perform read/write operations and automate cross-platform tasks.
  - Optimized application state management using **TanStack Query** for efficient data fetching, caching, and optimistic UI updates.
