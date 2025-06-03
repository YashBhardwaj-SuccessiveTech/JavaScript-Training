# Atomic Design

Atomic Design is a methodology for creating design systems and user interfaces (UI) in a systematic way. The core idea is to break down the UI into fundamental building blocks and progressively combine them into more complex components culminating in full pages.

Atomic Design is composed of five distinct levels/Stages i.e. Atoms, Molecules, Organisms, Templates, Pages.

## Atoms: 
It refers to smallest,individual building block of UI like buttons,icons etc,usually not useful alone but provide basic elements for complex components.

## Molecules: 
The group of Atoms are bonded together to form simple UI component for example a search form molecule may include input and button atom.

## Organisms: 
These are Relatively more complex components made up of groups of molecules, These are reusable UI sections that can be used when required.

## Templates: 
They Provides the overall page structure by managing the Organisms into a layout.

## Pages: 
It represents the final UI that users Interact with and reveal design issues in realistic setting.

**The key Benefits of Atomic Design includes:**
- Reusability
- Consistency
- Maintainability
- Collaboration


# **Twelve-Factor App**

The Twelve-factor app is a set of 12 principles for building web applications, which nowadays are more commonly known as Software-As-A-Service (SAAS) applications.

## CodeBase: 
You should have one main codebase stored in version control (like Git), but you can deploy it to many places, like testing or production.

## Dependencies: 
The app should list all its dependencies clearly and install them separately.

## Config: 
It refers to keeping the code clean and secure. All configuration settings like passwords should be kept outside the code, usually in environment variables.

## Backing Services: 
Things like databases, caches, or messaging systems should be treated as separate services that the app connects to.

## Build, release, run: 
This makes deployment more predictable,it includes Building the app, preparing it for release and running it are separate steps.

## Processes: 
An application is said to follow this principle if its instances can be created and destroyed any time without making any effect on the overall functionality of our application.

## Port Binding: 
The app exposes its web services by binding to a port and doesn’t rely on external web servers.

## Concurrency: 
It is used to Scale the app by running multiple instances of processes, typically horizontally.

## Disposability: 
The app’s processes should start quickly and shut down cleanly so we can scale or update the app without issues.

## Dev/prod parity: 
Development, staging, and production environments should be as similar as possible. This reduces surprises when deploying.

## Logs: 
The app should output logs as a stream of events that external tools can capture, instead of managing log files internally.

## Admin processes: 
Admin processes are those one-time or occasional tasks that developers or system admins need to run, like Running a database migration Fixing a small piece of data, Testing something directly in the app’s environment.

**These principles, focus on making apps easy to deploy, portable across environments, and suitable for continuous integration and scaling.**


