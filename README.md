# IHEC Chatbot

**Project Documentation**  
**Team**: 404DALGONAFOUND  
**Institution**: Institut des Hautes Études Commerciales (IHEC)  
**Date**: January 26, 2025  

---

## Table of Contents

1. [Introduction](#introduction)  
   1.1 [General Context](#general-context)  
   1.2 [Objectives](#objectives)  
2. [Specifications and Requirements Analysis](#specifications-and-requirements-analysis)  
   2.1 [Functional Scope](#functional-scope)  
   2.2 [Advanced Options](#advanced-options)  
   2.3 [Technical Constraints](#technical-constraints)  
   2.4 [Performance and Accessibility](#performance-and-accessibility)  
3. [System Architecture](#system-architecture)  
   3.1 [Architecture Diagram](#architecture-diagram)  
   3.2 [Data Flow](#data-flow)  
4. [Design and Implementation](#design-and-implementation)  
   4.1 [Data Corpus Preparation](#data-corpus-preparation)  
   4.2 [Model Fine-Tuning](#model-fine-tuning)  
   4.3 [Front-End Development](#front-end-development)  
   4.4 [Web Speech API Integration](#web-speech-api-integration)  
   4.5 [Backend/API Development](#backendapi-development)  
5. [Testing and Validation](#testing-and-validation)  
   5.1 [Unit Tests](#unit-tests)  
   5.2 [Integration Tests](#integration-tests)  
   5.3 [User Acceptance Testing](#user-acceptance-testing)  
6. [Deployment and Security](#deployment-and-security)  
   6.1 [Deployment](#deployment)  
   6.2 [Security and Privacy](#security-and-privacy)  
7. [Maintenance and Future Developments](#maintenance-and-future-developments)  
   7.1 [Maintenance](#maintenance)  
   7.2 [Future Evolutions](#future-evolutions)  
8. [Conclusion](#conclusion)  
9. [Annexes](#annexes)  

---

## Introduction

### General Context
IHEC aims to enhance the student experience by integrating an intelligent chatbot on its website. This chatbot addresses frequently asked questions (FAQ) related to admissions, programs, schedules, exams, and more.

### Objectives
- Simplify access to information for students.  
- Provide continuous, fast, and user-friendly service (24/7).  
- Adhere to IHEC's design and security standards.  
- Seamlessly integrate into the existing web infrastructure.  

---

## Specifications and Requirements Analysis

### Functional Scope
#### Main Features
- Automated responses to FAQ.  
- Guided navigation to resources (forms, documents, etc.).  
- Keyword-based search (e.g., "schedule," "registration").  
- Multilingual support (French and English).  

#### Key Use Cases
- FAQs such as: *"What documents are needed for registration?"*  
- Advanced search like: *"I want to view the Marketing Master program."*

### Advanced Options
- Feedback system to improve response relevance.  
- Usage statistics for administrative staff.  

### Technical Constraints
- Web integration must align with IHEC's graphic charter.  
- No reliance on external cloud services (e.g., OpenAI, Gemini).  
- Data stored locally (CSV or JSON) with GDPR compliance.  

### Performance and Accessibility
- Fast loading times, including on mobile devices.  
- Compatibility with major browsers (Chrome, Firefox, Safari, Edge).  
- Responsive and intuitive interface.  

---

## System Architecture

### Architecture Diagram
- **Front-End**: Built with Next.js and Tailwind CSS, incorporating the Web Speech API.  
- **Back-End**: TensorFlow (Python or Node.js) for NLP tasks.  
- **Database**: Local CSV/JSON storage for FAQs (sourced via web scraping).  

### Data Flow
1. User submits a question through the Next.js interface.  
2. Backend processes the question using a fine-tuned multilingual NLP model.  
3. The most relevant response is sent back to the user interface.  

---

## Design and Implementation

### Data Corpus Preparation
- **Web Scraping**: Extracted data from the official IHEC website (programs, fees, schedules).  
- **Data Formatting**: Cleaned and stored in structured CSV/JSON files.  

### Model Fine-Tuning
- Used `sentence-transformers/distiluse-base-multilingual-cased-v2`.  
- Fine-tuned with IHEC-specific data for optimal relevance.  

### Front-End Development
- Built with Next.js and styled using Tailwind CSS.  
- Integrated Web Speech API for voice-based queries.  

### Web Speech API Integration
- Enabled speech-to-text functionality for multilingual support.  

### Backend/API Development
- Developed in Node.js with TensorFlow for model inference.  
- API handles user questions and retrieves answers from the fine-tuned model.  

---

## Testing and Validation

### Unit Tests
- Tested API endpoints and core NLP model functions.  

### Integration Tests
- Verified smooth interaction between Front-End and Back-End components.  

### User Acceptance Testing
- Conducted real-world scenarios with students and administrative staff.  

---

## Deployment and Security

### Deployment
- Hosted Front-End on a local server or web hosting service.  
- Backend deployed using Docker or Node.js.  

### Security and Privacy
- SSL/TLS encryption for secure communication.  
- GDPR compliance with anonymized logs and opt-out features.  

---

## Maintenance and Future Developments

### Maintenance
- Regular updates to FAQ data.  
- Performance monitoring and optimizations.  

### Future Evolutions
- Support for additional languages (e.g., Spanish).  
- Integration of virtual avatar for conversational interaction.  

---

## Conclusion
The IHEC Chatbot streamlines information access for students while ensuring compliance with technical and security requirements. This scalable, multilingual solution leverages modern frameworks and technologies for a seamless integration into IHEC's digital ecosystem.  

---

## Annexes

### Sample FAQ JSON File
```json
[
  {
    "question": "What documents are needed for registration?",
    "response": "You need to provide a copy of your ID, transcripts, and a completed registration form.",
    "link": "https://www.ihec-example.tn/registration"
  },
  {
    "question": "What are the registration fees?",
    "response": "Fees vary by study cycle. Visit the fees page for more details.",
    "link": "https://www.ihec-example.tn/fees"
  }
]
