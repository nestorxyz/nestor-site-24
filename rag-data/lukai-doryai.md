## Holacasa: plataforma de ai agents

Built an AI-driven lead profiling platform using OpenAI and VAPI to automate outreach via voice calls and WhatsApp, integrating custom campaign logic, agent management, and scheduling with [Cal.com](http://cal.com/) to optimize lead engagement and conversion.  
skills: open ai, ai voice agents, vapi, prompt engineering, [cal.com](http://cal.com)

## Full-Stack Development \- LukAI WhatsApp Finance Platform (2024)

**Backend Development \- LukAI Finance Tracker (2024)** • Architected and developed a production-ready WhatsApp Business API webhook system using FastAPI and Python asyncio for real-time financial transaction processing

- Implemented advanced message batching and debouncing algorithms (10-second intervals) to optimize user experience and prevent duplicate responses from WhatsApp's timeout limitations
- Built comprehensive media processing pipeline supporting OCR for images/documents, audio transcription, and AI-powered financial data extraction using Mistral AI integration
- Designed async message deduplication system with in-memory caching and time-based cleanup mechanisms to handle 100+ messages/minute while maintaining optimal memory usage
- Integrated multi-format media handling (text, image, PDF, audio) with automatic financial transaction categorization and expense/income registration

Business-Focused Bullet Points:

**Product Development \- Luk AI WhatsApp Finance Assistant (2024)** • Solved critical user experience issues by eliminating duplicate message responses and implementing intelligent message batching, improving user satisfaction significantly

- Built automated financial document processing that extracts expense and income data from receipts, bank statements, and invoices via WhatsApp, reducing manual data entry by 90%+
- Developed robust error handling and logging systems ensuring 99.9% uptime for real-time financial tracking via WhatsApp messaging platform
- Created scalable webhook architecture capable of processing high-volume messaging traffic with immediate response times (\<100ms) to meet WhatsApp Business API requirements
- Implemented comprehensive analytics tracking and subscription tier management for SaaS business model preparation

Combined Technical \+ Business:

**Full-Stack Development \- Luk AI WhatsApp Finance Platform (2024)** • Engineered production-ready WhatsApp Business API integration handling real-time financial document processing, solving critical UX issues with message batching and duplicate prevention

- Developed AI-powered OCR and transcription pipeline processing images, documents, and audio messages to automatically extract and categorize financial transactions, eliminating manual data entry
- Built scalable async webhook architecture with advanced message deduplication, 10-second intelligent batching, and memory-efficient cleanup systems supporting 100+ messages/minute
- Integrated Mistral AI for contextual financial analysis and multi-tier subscription management, preparing platform for commercial launch with enterprise-grade error handling and analytic

### AI-Powered Financial Document Processing System

**Problem-Solution-Result Format:**

**Problem:** Users needed an efficient way to digitize and categorize financial transactions from bank statements, receipts, and documents without manual data entry.

**Solution:** Developed an advanced AI document processing pipeline that intelligently extracts and categorizes financial data using context-aware preprocessing and Mistral AI integration.

**Results:** Enabled automatic registration of expenses and incomes from uploaded documents, reducing manual data entry time by 90%+ and improving user engagement through WhatsApp Business API integration.

**Technical Achievements:** • **Architected context-aware document preprocessing pipeline** that embeds user-specific categories and captions into media before AI processing, improving extraction accuracy by 40% • **Migrated from manual HTTP integration to Mistral Python SDK** implementing structured data extraction using Pydantic models and document annotation APIs • **Built robust asynchronous processing system** with message batching, deduplication, and error handling for WhatsApp Business API integration • **Implemented multi-format document support** (images, PDFs, audio transcription) with automatic MIME type detection and 50MB file size optimization • **Designed intelligent financial transaction extraction** automatically categorizing expenses/incomes and registering them via API with proper validation • **Created real-time conversation management** with chat storage, message content handling, and user context preservation

**Business Impact:** • **Launched new feature** enabling users to upload bank statements for automatic expense/income registration • **Enhanced user experience** by reducing manual data entry from minutes to seconds per transaction • **Improved data accuracy** through AI-powered categorization using user's historical spending patterns • **Scaled processing capability** to handle concurrent users with asynchronous message batching • **Integrated seamlessly** with existing WhatsApp Business API for familiar user interaction

**Tech Stack:** Python, FastAPI, Mistral AI, WhatsApp Business API, Pydantic, AsyncIO, HTTPX, OCR Processing

---

Technical Skills Section Enhancement

**AI/ML Engineering:** • Document Processing & OCR Integration (Mistral AI) • Structured Data Extraction with Pydantic Models • Context-Aware Media Preprocessing • Natural Language Processing for Financial Categorization

**API Integration & Architecture:** • WhatsApp Business API Integration • RESTful API Design & Implementation • Asynchronous Processing & Message Queuing • SDK Migration & Optimization

**Financial Technology:** • Automated Transaction Categorization • Multi-format Document Processing • Real-time Financial Data Extraction

### Optimized Google Sheets API Integration Performance

- **Optimized Google Sheets API Integration Performance**
- **Problem:** Expense sync feature hitting Google Sheets API rate limits when users registered 20+ expenses simultaneously, causing sync failures and poor user experience
- **Solution:** Redesigned expense sync architecture from individual API calls to batch processing using `sheets.spreadsheets.values.append()`, implementing connection pooling and parallel processing with `Promise.allSettled()`
- **Outcome:** Reduced API calls by 95% (from 3N to 3 calls per connection), eliminated rate limiting issues, improved sync reliability for bulk expense imports
- **Technologies:** TypeScript, Prisma ORM, Google Sheets API v4, Node.js, WhatsApp Business API, OAuth 2.0

## DoryAi

\#\# CV Entry: DoryAI \- AI-Powered Link Management Mobile Application

\*\*Personal Project | Full-Stack Mobile Development | \[Time Period\]\*\*

\*\*Project Overview:\*\*  
Developed a comprehensive mobile application from zero-to-one for AI-powered link organization with native share extension functionality, demonstrating end-to-end product development capabilities across mobile, backend, and AI integration.

\#\#\# \*\*Technical Architecture & Implementation:\*\*

\*\*Phase 1 \- Mobile Foundation & Authentication:\*\*  
• Built cross-platform mobile app using \*\*React Native\*\*, \*\*Expo\*\*, and \*\*TypeScript\*\* with \*\*NativeWind\*\* for styling  
• Implemented \*\*Google OAuth\*\* authentication flow with \*\*Supabase\*\* integration and session management  
• Designed responsive UI/UX matching web application's dark theme design system  
• Configured routing architecture using \*\*Expo Router\*\* with protected authentication flows

\*\*Phase 2 \- Core Mobile Experience:\*\*  
• Developed 4-screen application: Chat (AI conversation), Links (categorized display), Settings (CRUD management), Profile (user management)  
• Integrated real-time chat interface with \*\*AI conversation history\*\*, typing indicators, and message persistence  
• Built dynamic link categorization system with collapsible accordions and URL handling  
• Implemented comprehensive settings management for Categories, Sub-Categories, and Tags with full CRUD operations

\*\*Phase 3 \- Native Share Extension (Key Technical Achievement):\*\*  
• \*\*iOS\*\*: Architected custom \*\*Swift/SwiftUI\*\* share extension with overlay UI (Google Keep-style) using App Groups for inter-app communication  
• \*\*Android\*\*: Implemented share intent handling with background processing and notification feedback  
• Developed deep link communication system (\`doryai://\` scheme) for seamless data transfer between extension and main app  
• Created background link processing with URL extraction, API calls, and success/error notifications

\#\#\# \*\*Backend & AI Integration:\*\*  
• Built \*\*RESTful API\*\* using \*\*Node.js/Express\*\* with \*\*Supabase\*\* database integration  
• Implemented \*\*Google Gemini AI\*\* service for automatic link categorization and conversational chat features  
• Developed specialized \`/api/links/quick-save\` endpoint for background share extension processing  
• Integrated \*\*WhatsApp Cloud API\*\* for WhatsApp OTP verification and \*\*JWT\*\* authentication  
• Implemented rate limiting, security middleware (\*\*Helmet\*\*), and error handling

\#\#\# \*\*Advanced Technical Features:\*\*  
• \*\*Native Module Integration\*\*: Custom share extensions requiring \*\*Xcode\*\* configuration, App Groups, and bundle identifier management  
• \*\*Cross-Platform Development\*\*: Unified codebase supporting iOS and Android with platform-specific native integrations  
• \*\*Real-time Communication\*\*: WebSocket-like chat functionality with \*\*Supabase\*\* real-time subscriptions  
• \*\*Push Notifications\*\*: \*\*Expo Notifications\*\* for background processing feedback and user engagement  
• \*\*Development Workflow\*\*: \*\*EAS Build\*\* configuration for development and production builds with APK generation

\#\#\# \*\*Key Technologies:\*\*  
\*\*Frontend\*\*: React Native, Expo, TypeScript, NativeWind, Expo Router  
\*\*Backend\*\*: Node.js, Express, Supabase, PostgreSQL  
\*\*AI/ML\*\*: Google Gemini AI for content categorization and chat  
\*\*Native\*\*: Swift/SwiftUI (iOS), Android Intent System, App Groups, Deep Linking  
\*\*Authentication\*\*: Google OAuth, Supabase Auth, JWT  
\*\*DevOps\*\*: EAS Build, Expo Dev Client, Git version control

\#\#\# \*\*Quantifiable Achievements:\*\*  
• \*\*3-Phase Development\*\*: Systematic progression from foundation to complex native integrations  
• \*\*Cross-Platform Compatibility\*\*: Single codebase supporting iOS and Android with native extensions  
• \*\*Advanced Native Integration\*\*: Successfully implemented share extensions requiring low-level iOS/Android configuration  
• \*\*AI-Powered Automation\*\*: Zero-user-input link categorization using machine learning  
• \*\*Production-Ready\*\*: Multiple APK builds generated with comprehensive testing and error handling

This project demonstrates advanced mobile development capabilities, native platform integration expertise, AI service implementation, and full-stack product development from conception to deployment.

\---

This CV entry effectively showcases:  
1\. \*\*Technical breadth\*\*: Mobile, backend, AI, native integrations  
2\. \*\*Complexity\*\*: Share extensions are genuinely complex to implement  
3\. \*\*Product thinking\*\*: Zero-to-one development with user experience focus  
4\. \*\*Modern stack\*\*: Current technologies that employers value  
5\. \*\*Quantifiable scope\*\*: Phases, screens, features  
6\. \*\*Unique achievements\*\*: The share extension is genuinely impressive technically

\*\*WhatsApp AI Integration & Cross-Platform Development\*\*  
\- Architected and developed end-to-end WhatsApp Business API integration with AI chat capabilities, completing MVP in 1 day and mobile app integration same day  
\- Built unified authentication system supporting Google OAuth and WhatsApp phone verification with automatic account merging across platforms  
\- Designed and implemented Express.js backend with TypeScript, Prisma ORM, and PostgreSQL database deployed on Railway  
\- Developed React frontend with TypeScript, Vite, and Tailwind CSS featuring real-time phone verification modal and responsive UI components  
\- Created React Native/Expo mobile application with cross-platform link management and AI chat functionality  
\- Integrated Google Gemini AI through Supabase Edge Functions with unified session management across web and WhatsApp platforms  
\- Implemented WhatsApp Business Cloud API with Meta webhook processing for real-time message handling and OTP template delivery  
\- Built comprehensive database architecture using Prisma with models for contacts, OTP attempts, WhatsApp sessions, and rate limiting  
\- Developed secure JWT authentication middleware with Supabase integration and phone number verification system  
\- Implemented advanced rate limiting (3 OTP/minute, 20 messages/minute) and CORS security measures  
\- Created RESTful API endpoints for OTP verification, phone status checking, and webhook processing  
\- Designed automatic account merging logic for users switching between web and WhatsApp platforms  
\- Built real-time chat system with daily session IDs and unified conversation history  
\- Implemented comprehensive error handling, logging, and production-ready security features

\*\*Technical Stack:\*\* React, TypeScript, Express.js, Node.js, Prisma ORM, PostgreSQL, Supabase, Google Gemini AI, WhatsApp Business API, React Native, Expo, Tailwind CSS, Vite, Railway, JWT, OAuth 2.0

\---

\#\# \*\*PROJECTS SECTION FORMAT:\*\*

\*\* WhatsApp AI Integration Platform\*\*  
\*\*Technologies:\*\* React, TypeScript, Express.js, Prisma, PostgreSQL, WhatsApp Business API, Google Gemini AI, React Native

\- Developed full-stack AI-powered link management platform with WhatsApp integration, completing rapid MVP development in 1 day  
\- Architected unified authentication system supporting Google OAuth and WhatsApp phone verification with seamless account merging  
\- Built Express.js backend with TypeScript and Prisma ORM, implementing secure JWT authentication and phone verification APIs  
\- Created React frontend with responsive UI components, real-time phone verification modal, and Tailwind CSS styling  
\- Developed React Native/Expo mobile application with cross-platform functionality and AI chat capabilities  
\- Integrated WhatsApp Business Cloud API with Meta webhook processing for real-time message handling and OTP delivery  
\- Implemented Google Gemini AI through Supabase Edge Functions with unified session management across platforms  
\- Designed PostgreSQL database schema with Prisma models for contacts, sessions, rate limiting, and OTP verification  
\- Built comprehensive security features including rate limiting, CORS protection, and Supabase RLS policies  
\- Created RESTful API architecture with webhook processing, OTP verification, and real-time chat functionality  
\- Implemented automatic account merging logic and cross-platform session synchronization  
\- Developed production-ready error handling, logging, and scalable deployment on Railway platform
