# EHR SaaS Application

## Description

A modern, multi-tenant Electronic Health Records (EHR) SaaS application tailored for solo and small clinic practitioners. The platform offers features such as clinic management, appointment scheduling, patient portals, inventory management, and billing. Designed with robust data segregation, it ensures that each owner’s data is secure and independent. Practitioners can manage multiple clinics, patients can book appointments online, and owners can oversee operations effortlessly.

## Tech Stack

- **Backend**: NextJS, PostgreSQL
- **Frontend**: Shadcn, Tailwind CSS
- **Authentication**: Better Auth
- **Deployment**: Docker, Caddy Server

## MVP Features

### Phase 1

1. **User Roles and Permissions**:

   - Owner, Practitioner, Staff, Patient roles with RBAC.

2. **Clinic Management**:

   - Owners can create and manage multiple clinics.

3. **Practitioner and Staff Management**:

   - Add and manage practitioners and staff for each clinic.

4. **Patient Management**:

   - Patients can belong to multiple clinics.
   - Patient portal for online appointment booking.

5. **Appointment Scheduling**:

   - Patients can book appointments with practitioners.
   - Practitioners and staff can manage their schedules.

6. **Inventory Management**:

   - Centralized inventory with the ability to transfer items between clinics.

7. **Billing and Invoices**:

   - Generate and manage invoices per clinic.

8. **Security and Multi-Tenancy**:
   - Data segregation ensuring one owner cannot access another’s data.

### Phase 2

1. **Audit Logs**:

   - Track all changes made to patient data, inventory, billing, and appointments.

2. **Analytics and Reporting**:

   - Provide detailed reports for owners on clinic performance, patient metrics, and revenue.

3. **Communication Features**:

   - Email/SMS notifications for appointments, billing, and reminders.

4. **Localization**:

   - Support for multiple languages and regional compliance.

5. **Advanced Inventory**:
   - Automated inventory alerts for low stock.
