Zoom: Ctrl/Cmd + Mouse Wheel
Brdgr

PRODUCT REQUIREMENTS DOCUMENT

The platform that runs partnerships end to end.

This document specifies the Brdgr platform: the marketplace, the operating software, and the administrative tools that carry a partnership from vetting to payout. It is the build reference for the Developer, the operating reference for the team, and the scope contract for everyone. What is written here is what gets built; what is not written here is not in scope until this document says so.

The Bridge to Better Partnerships

The product exists to run the five-step engine — VET → MATCH → CONTRACT → TRACK → PAY — for any performance industry, beginning with trading. Every requirement in this document strengthens one of those five steps. Anything that strengthens none of them does not belong in the product.

FIELD

DETAIL

Product

The Brdgr platform — client portal, partner portal, administrative console, and the services behind them

Owner

Founder (scope and priorities) · Developer (technical delivery) · COO (operational acceptance) · Creative Director (interface standard)

Status

Approved for build. No code in production yet.

First ecosystem

Trading — proprietary trading firms, forex and CFD brokers, and their growth partners

Architecture rule

Nothing may hard-code the first ecosystem. Industries, participant types, and commission models are configuration.

Companion documents

Company Overview · wireframes and build specification · agreement drafts (pending legal review)

Date

July 2026

Confidential — not for external distribution

Read-only. Anything shown as — has not been decided and must not be assumed, quoted, or built as if decided. Every open decision is listed in the Open Items Register at the end of this document.

Contents
Three parts: the product’s foundations, the functional requirements module by module, and the standards and plan that govern the build.

#

SECTION

#

SECTION

A

FOUNDATIONS

B

FUNCTIONAL REQUIREMENTS

01

Purpose and scope

08

Accounts, roles, and access

02

Definitions

09

Profiles and the contact directory

03

Who the product serves

10

Vetting

04

Product principles

11

Matching

05

The partnership lifecycle

12

Contracts

06

Commission models as configuration

13

Tracking and attribution

07

Plans, trial, and billing

14

Commissions and the fraud gate

15

Money: ledger and payouts

16

Dashboards and reporting

17

Notifications

18

Administrative console

19

Defensibility features

20

Growth Partner Academy

C

STANDARDS AND PLAN

21

Non-functional requirements

24

Release criteria

22

Build phases

25

Open items register

23

Out of scope

26

Document control

PART A

Foundations

What the platform is, who it serves, and the rules it is built under

01 Purpose and scope
Purpose. Brdgr discovers, recruits, and manages performance-driven partnerships — and this platform is how that service is delivered. It runs performance partnerships end to end: it holds the vetted supply of growth partners, matches them to companies, standardises and stores the contracts, tracks what each partner produces, screens it for fraud, and pays out what is owed — with people approving the decisions that matter. This document defines exactly what that platform must do.

In scope
Three interfaces: a client portal for companies (trading firms and brokers), a partner portal for growth partners, and an administrative console for the Brdgr team.
The five-step engine as workflows: vetting queues, match proposal and approval, electronic contracting, tracking and attribution, commission confirmation, and payouts on an auditable ledger.
Onboarding of a client’s existing partners as a first-class option: invitation by email or in bulk, streamlined verification, direct partnership creation, and the same contracts, tracking, fraud gate, and monthly USD payouts — the option that meets companies where they are without diluting the vetted, matched supply that is the core of the offer.
Subscription billing with a free trial at sign-up, paid plans on both sides, and plan-based feature gating. Prices and the trial length are — — the mechanics are in scope, the numbers are not yet set.
The commission share: the platform retains a configured percentage of each confirmed commission. The percentage is — and is a configuration value, never a hard-coded number.
Defensibility features that keep the relationship on the platform: contact gating, in-platform messaging, and the detection and retention mechanics in Section 19.
Out of scope for the first build
Anything not listed above, and specifically the items in Section 23. The discipline matters: the first release is a small number of workflows finished properly, not a large number started.

The one-sentence test for every feature request

Does it strengthen VET, MATCH, CONTRACT, TRACK, or PAY — and does it serve one of the four roles in Section 03? If the answer to either question is no, it waits.

02 Definitions
Terms used throughout this document, defined once so every requirement reads unambiguously.

TERM

MEANING

Client

A company account — a proprietary trading firm or a broker — that buys partnerships through Brdgr.

Growth partner

An individual or business that promotes clients to an audience and earns commissions for the results.

Contact

A prospective growth partner in the contact directory. A contact has not been vetted and must never be described as vetted, approved, or signed.

Vetted partner

A partner who has passed the full vetting workflow. Only vetted partners can be matched.

Onboarded (BYO) partner

A partner a client brought themselves, via invitation. Passes streamlined verification (identity and compliance); enters the open matching pool only by opting in and completing full vetting. Non-circumvention terms never apply to these relationships.

Brief

A client’s structured description of what they need: audience, regions, commission model, and constraints.

Match

A proposed pairing of one brief with one vetted partner, scored by the system and approved by a person.

Partnership

A match that both sides have accepted and contracted. Only a contracted partnership can go live.

Conversion

A tracked event that a commission model pays on — for example a funded challenge purchase or a first-time deposit.

Confirmed commission

A commission that has passed the fraud gate and any holding rules, and is now owed.

The share

The percentage of each confirmed commission that Brdgr retains (—, configuration-driven). The partner receives the remainder, itemised.

Trial

The free period at sign-up (7 or 14 days, —) before billing begins. There is no permanent free plan.

Payout cycle

Monthly. The calendar month closes, the manifest is generated, and approved payouts execute by the fifth business day of the new month.

Launch currency

US dollars (USD). All balances, statements, and payouts are denominated in USD at launch; additional currencies are Phase 3.

Ecosystem

An industry configuration — participant types, commission models, and vocabulary. Trading is the first; the platform must treat it as one of many.

03 Who the product serves
Four roles, described by function. Every requirement in Part B names the role it serves in its module introduction; a requirement that serves none of them is out.

ROLE

WHAT THEY DO

WHAT THE PRODUCT MUST GIVE THEM

Operations Administrator

Internal (COO’s team). Vets supply, approves matches, resolves disputes, oversees payouts.

A work queue that always shows the next action; vetting, matching, dispute, and payout tools in one console; ledgers that reconcile without spreadsheets.

Partnerships Lead (trading firm)

Client. Grows challenge and funded-account sales without building an affiliate team.

Brief submission, match review, one-view performance, and zero legal or payment administration.

Affiliate Manager (broker)

Client. Runs many introducing brokers and affiliates across regions and commission models.

Several commission models tracked in one place, regional breakdowns, exportable reconciliation.

Growth Partner

Supply. Earns from an audience across one or more brands.

Fast sign-up, clear offers, honest terms, one earnings view, links that track reliably, and payment that arrives on schedule.

Where the roles sit
The company is organised into three departments: Operations (headed by the COO — the Operations Administrator role lives here); IT / Product Development (headed by the Developer, this document’s delivery owner), which pairs two units — the development unit led by the Developer and the creative unit led by the Creative Director, so the build and its interface design share one roadmap and one hand-off cadence; and Sales & Marketing (the Founder, acting, until the commercial roles are hired — the internal consumer of client-facing dashboards and reporting). Department detail lives in the Team Workflow document.

Design weighting

When interface effort must be rationed, the order is: the Operations Administrator first (the platform is operated before it is sold), the Growth Partner second (supply-side trust is the hardest asset to win back once lost), clients third — because client value depends entirely on the first two working.

04 Product principles
Eight rules that settle design arguments before they start.

The engine is the product. Five steps, never forked per industry. A feature belongs to a step or it does not belong.
Nothing hard-codes trading. Ecosystems, participant types, and commission models are configuration records. The word "challenge" may appear in configuration data; it must never appear in code.
Humans approve, software assists. Scoring ranks; a person decides. No match is sent and no vetting verdict is issued without human approval in the first build.
Money is sacred. Double-entry, integer minor units, full audit trail, every deduction itemised. A payout error is the most serious incident class the platform has.
The platform is the relationship. Contact details stay hidden until contract. Communication before contract happens on the platform. This is enforced in the service layer, not just the screen.
Curated, never open. No self-serve path may ever make an unvetted contact visible or matchable to a client.
No promise the platform has not measured. No service-time commitment ships in the product or its copy until it has been measured on live matches. All service targets are — at launch.
Every number is defensible. Counts, rates, and figures shown to users must be queryable facts from the ledger or the event stream — never estimates presented as facts.
05 The partnership lifecycle
One state machine governs every partnership. These states are the backbone of the data model, the dashboards, and the billing logic. No interface may invent an undefined state, and every transition is logged with who caused it and when.

STATE

MEANING AND ALLOWED TRANSITIONS

PROPOSED

A match has been created against a brief and approved for sending by an Operations Administrator. → ACCEPTED when both sides opt in; → DECLINED if either side passes; → EXPIRED if unanswered within the configured window.

ACCEPTED

Both sides want the partnership. Contact details remain hidden. → CONTRACTED when both signatures are complete; → WITHDRAWN if either side exits before signing.

CONTRACTED

The agreement is signed and stored. Contact details are released. Tracking assets are issued. → LIVE when the first tracked activity is recorded or the partnership is manually activated.

LIVE

The working state: conversions accrue, commissions confirm, statements issue. → PAUSED by either side or by Brdgr (with reason); → ENDED by term, by agreement, or by enforcement.

PAUSED

Temporarily inactive; links stop crediting new conversions but history is preserved. → LIVE on resume; → ENDED if not resumed within the configured period.

ENDED

Closed. Final statements and payouts complete; records retained read-only for the retention period. Terminal.

Two rules the lifecycle enforces

First: no state may be skipped — a partnership cannot be LIVE without CONTRACTED, and cannot be CONTRACTED without both signatures. Second: contact details release exactly once, at the ACCEPTED → CONTRACTED transition, and the release is an audited event. These two rules are the technical heart of the business model and are tested in the release criteria.

06 Commission models as configuration
A commission model is a data record, not a code path. Each model defines what event pays, how the amount is calculated, and what rules gate confirmation. New models are added by configuration; the calculation engine is generic.

MODEL

PAYS ON

FIRST NEEDED

Fixed per action (CPA)

A defined conversion — e.g. a funded challenge purchase, an account funded to a threshold

Phase 1 — the launch model for trading

Percentage of sale

A tracked purchase amount

Phase 1 — same engine as CPA with a rate

Per-unit (e.g. per lot)

Volume reported by the client’s systems

Phase 2 — requires reported-data ingestion

Revenue share

A percentage of ongoing tracked revenue

Phase 2

Recurring commission

Renewals of a tracked subscription

Phase 2 — designed now so SaaS is configuration later

Hybrid (fixed + trailing)

A combination of the above on one partnership

Phase 2

Every model must support: per-programme defaults, per-partner overrides, effective-date changes that never rewrite history, currency declaration, and a confirmation rule (immediate, after a holding period, or after client acknowledgement — configurable per programme). The platform’s share (—) and any plan-based share reduction (—) apply at confirmation time and are stored on the commission record, so later configuration changes never alter settled records.

07 Plans, trial, and billing
Subscriptions are one of the two revenue streams, so billing is a first-class module, not an afterthought. The structure is decided; the numbers are —.

The structure
ELEMENT

STATUS

DETAIL

Free trial at sign-up

—

7 or 14 days, both sides — length to be decided. Full product access during trial within plan limits.

Billing after trial

Confirmed

The account converts to its selected paid plan when the trial ends. Card capture timing is a launch decision recorded in the register.

Permanent free plan

None

No indefinite free tier on either side. Expired-trial accounts move to a locked state with data preserved.

Client plans

Starter / Growth / Enterprise

Prices —. Higher plans carry higher usage limits, deeper analytics, and a reduced commission share (reduction —).

Partner plans

Starter / Pro / Elite

Prices —. Higher plans carry priority matching and richer analytics. Line-up provisional until confirmed.

Billing cycle

—

Monthly and annual intended; any annual discount —.

Billing requirements
ID

PHASE

REQUIREMENT

BIL-01

P1

Every new account enters the trial automatically at sign-up; trial length is a single configuration value applied platform-wide.

BIL-02

P1

Trial expiry converts the account to its selected plan and starts billing; the user is notified before expiry (timing configurable) and on conversion.

BIL-03

P1

An expired account that does not convert moves to a locked state: sign-in permitted, data visible read-only, all workflows disabled until a plan is chosen.

BIL-04

P1

Plan limits (briefs, live partnerships, seats, and other gated quantities) are configuration per plan and enforced in the service layer.

BIL-05

P1

All plan prices, the trial length, and any discounts are configuration values changeable without deployment; price changes never apply retroactively to a billing period already invoiced.

BIL-06

P1

Invoices and receipts are generated for every charge, denominated in USD at launch, and available in-product; failed payments follow a configurable retry-and-notify sequence before the account locks.

BIL-07

P2

Plan upgrades apply immediately with proration; downgrades apply at the next billing boundary; both are audited events.

BIL-08

P2

The commission-share reduction attached to higher client plans applies automatically from the next confirmation after upgrade — never retroactively.

PART B

Functional Requirements

Module by module: what the platform must do

08 Accounts, roles, and access
Serves every role. The account model separates the organisation (a client company or a partner business) from the people inside it, so seats, permissions, and audit trails stay clean.

ID

PHASE

REQUIREMENT

ACC-01

P1

Organisation accounts for clients and partners, with one or more user seats per organisation; seat limits are plan configuration.

ACC-02

P1

Role-based permissions: organisation owner, member, and read-only. Internal roles for Operations Administrators are separate and invisible to external users.

ACC-03

P1

Authentication with strong password rules, session management, and second-factor support; second factor is mandatory for internal roles.

ACC-04

P1

Every sign-in, permission change, and sensitive action is written to the audit log with actor, timestamp, and origin.

ACC-05

P1

Account closure preserves financial and contractual records read-only for the retention period; personal data handling follows the privacy standards in Section 21.

ACC-06

P2

Seat invitation flows with expiring links and owner approval.

09 Profiles and the contact directory
Serves the Operations Administrator and the Growth Partner. The directory holds prospects; the profile is what vetting evaluates and matching consumes. The language rule is absolute: a directory entry is a contact, not a partner, and the interface must never blur the two.

ID

PHASE

REQUIREMENT

PRF-01

P1

Partner profiles: identity, audience channels and sizes, regions, languages, categories, promotion methods, and payout details — payout details visible only to the partner and to internal money workflows, never to clients.

PRF-02

P1

Client programme profiles: brand, offering, target regions, restricted territories, commission model, and creative constraints.

PRF-03

P1

The contact directory is an internal-only dataset: importable, taggable, and searchable by Operations Administrators. Directory entries are invisible to clients everywhere in the product.

PRF-04

P1

A directory entry can be invited into onboarding; on sign-up it links to the new account and enters the vetting queue. The entry’s history (source, tags, invitations) carries over.

PRF-07

P1

Clients can invite their existing partners: single invitations by email and bulk invitations by CSV, each carrying the client’s programme terms (with per-partner overrides) and pre-linking the resulting account to that client.

PRF-08

P1

An invitation dashboard shows each invited partner’s state — invited, signed up, verifying, contracted, live — so the client watches their own network come onto the rails.

PRF-05

P1

Profile fields that feed matching are structured (no free-text-only critical fields), so scoring and filters behave predictably.

PRF-06

P2

Audience-channel verification helpers (ownership checks for declared channels) recorded as evidence on the profile.

10 Vetting
Serves the Operations Administrator; protects everyone. Vetting is the product’s quality control: nobody becomes matchable without passing it, and the workflow must make careful review fast rather than skippable.

ID

PHASE

REQUIREMENT

VET-01

P1

A vetting queue for Operations Administrators: pending applications with the evidence gathered, ordered by age, with assignment so two reviewers never duplicate work.

VET-02

P1

Three assessment dimensions recorded per review: audience authenticity, compliance history, and track record — each with a verdict and reviewer notes.

VET-03

P1

Outcomes: approved (becomes a vetted partner), declined with reason codes, or more-information-requested with a structured request to the applicant.

VET-04

P1

Declined applicants may re-apply after a configured period; the prior review and its evidence are shown alongside the new application.

VET-05

P1

No interface, import, or administrative shortcut may mark a contact as vetted without a completed review record. This is enforced in the service layer and covered by an automated test in the release criteria.

VET-09

P1

Client-invited partners pass a streamlined verification — identity and compliance only — sufficient for partnerships with the inviting client. Entering the open matching pool requires the partner’s explicit opt-in plus the full vetting workflow; no shortcut moves a BYO partner into open matching (the VET-05 rule applies).

VET-06

P1

Every verdict is an audited event: reviewer, timestamp, dimensions, and reasons.

VET-07

P2

Screening assistance: automated signals (audience-size consistency, duplicate-identity checks, restricted-geography flags) presented to the reviewer as input, never as an automatic verdict.

VET-08

P2

Periodic re-vetting triggers for long-inactive or flagged partners, with the same workflow and audit trail.

11 Matching
Serves clients and partners; operated by the Operations Administrator. Matching is the core product. The system proposes and ranks; a person approves; both sides consent before anything proceeds — and contact details stay sealed throughout.

ID

PHASE

REQUIREMENT

MATCH-01

P1

Clients submit structured briefs: objective, audience, regions, commission model and terms, constraints, and volume expectations. Briefs remain editable drafts, with change history, until submitted.

MATCH-02

P1

Candidate generation ranks vetted partners against a brief using profile fit (categories, regions, languages, audience) with scores and reasons visible to the Operations Administrator.

MATCH-03

P1

An Operations Administrator selects and approves proposals before anything is sent. Each proposal carries the terms, anonymised partner summary for the client, and anonymised programme summary for the partner.

MATCH-04

P1

Contact details, exact channel identities, and any information sufficient to identify the counterparty are withheld from both sides until the partnership reaches CONTRACTED. Enforcement is in the service layer; any breach is a severity-one incident.

MATCH-05

P1

Both sides accept or decline within a configured window; declines carry reason codes that feed matching improvements. Expired proposals close automatically.

MATCH-10

P1

BYO partnership creation: an accepted invitation creates a direct partnership between the inviting client and the partner — no anonymity and no PROPOSED stage, entering the lifecycle at ACCEPTED and proceeding through the same CONTRACTED → LIVE flow, contracts, tracking, and money rails as matched partnerships.

MATCH-06

P1

Match volume per client is limited by plan configuration (limits — with pricing).

MATCH-07

P2

Re-match workflow: when a live partnership underperforms against its brief, the client can request a re-match; the request routes to the Operations Administrator with the partnership’s history attached.

MATCH-08

P2

Partner-side discovery: vetted partners can browse anonymised open programmes and express interest, feeding the same approval workflow — discovery never bypasses approval or contact gating.

MATCH-09

P2

Exclusivity windows: a configurable period during which a matched partner is not proposed to the client’s named competitors; recorded on the match and enforced by candidate generation.

12 Contracts
Serves clients and partners; protects the model. The contract step turns acceptance into a live-able partnership and is the moment contact details release. Templates come from the commercial document set (pending legal review).

ID

PHASE

REQUIREMENT

CON-01

P1

Standard agreement templates per participant type, merged with the specific deal terms (model, rates, territories, duration) into a final document.

CON-02

P1

Electronic signature by both parties in-platform, with signature evidence (signatory, timestamp, document hash) stored on the partnership record. Provider selection is — (register).

CON-03

P1

Signed documents are stored with a complete history and are downloadable by both parties for the life of the account and the retention period after.

CON-04

P1

The ACCEPTED → CONTRACTED transition completes only when both signatures exist; the transition releases contact details and issues tracking assets, and both effects are audited.

CON-05

P1

Agreements include the non-circumvention terms once settled by legal review (period and consequences —) — applying only to partnerships Brdgr introduces. BYO partnership agreements exclude these clauses by construction: the client’s own relationships remain the client’s, and the template system renders the correct variant automatically.

CON-06

P2

Renewal and amendment flows: term-end reminders, renewal with updated terms, and amendments that reference the original without rewriting it.

13 Tracking and attribution
Serves everyone; trust depends on it. If tracking is doubted, every downstream number is doubted. The design principle: attribution happens on our servers, not in the visitor’s browser, so ad blockers and browser privacy features cannot erase a partner’s credit.

ID

PHASE

REQUIREMENT

TRK-01

P1

Each live partnership receives unique referral links on the platform’s tracking domain; clicks resolve server-side, record the attribution event, and forward to the client’s destination.

TRK-02

P1

Conversion reporting by signed postback: the client’s system calls a per-partnership endpoint with a shared-secret signature; unsigned or malformed calls are rejected and logged.

TRK-03

P1

Conversions carry an idempotency key; replays and duplicates are detected and ignored, and the original record is preserved.

TRK-04

P1

Attribution windows and rules (first-click or last-click per programme) are configuration; every conversion stores the click it attributed to, so any commission can be traced end to end.

TRK-05

P1

A manual conversion-entry path exists for clients whose systems cannot call postbacks at launch; manual entries are flagged as such, and are subject to the same fraud gate plus client attestation.

TRK-06

P1

Partners see click and conversion counts per partnership in near real time; discrepancies they raise become disputes (Section 18) with the trace attached.

TRK-07

P2

Promotional-code attribution for audio, video, and offline promotion, feeding the same conversion pipeline.

TRK-08

P2

Reported-data ingestion for volume-based models (per-lot, revenue share): scheduled client file or API submissions, validated, reconciled, and flagged when out of pattern.

TRK-09

P3

Native adapters for common trading-platform back offices, so volume data flows without manual export. Scope and providers —.

14 Commissions and the fraud gate
Serves partners and clients; protects the economics. A conversion is not money. It becomes money only after the fraud gate and the programme’s confirmation rules pass. This ordering — screen first, confirm second, pay third — is fixed.

ID

PHASE

REQUIREMENT

COM-01

P1

The calculation engine computes commission amounts from the partnership’s model configuration at event time, storing inputs, rate, amount, and currency on the record.

COM-02

P1

Every commission passes the fraud gate before confirmation: rule-based checks (velocity, geography vs restrictions, duplicate identity signals, pattern anomalies) with outcomes pass, hold-for-review, or reject.

COM-03

P1

Held commissions enter a review queue for the Operations Administrator with the evidence and the trace; decisions are audited with reasons.

COM-04

P1

Confirmation applies the programme’s rule (immediate, holding period, or client acknowledgement) and stamps the platform share (—) and any plan-based reduction (—) onto the record at that moment.

COM-05

P1

Rejections and clawbacks (e.g. a refunded purchase within the holding window) reverse correctly on the ledger and are itemised on the partner’s statement with reasons.

COM-06

P1

Partners and clients each see commission states with plain-language names — pending review, confirmed, scheduled for payout, paid — and every state change is timestamped.

COM-07

P2

Fraud-signal tuning per ecosystem via configuration; new rules deployable without code changes to the gate.

15 Money: ledger and payouts
Serves partners above all. "Paid" is a third of the motto. The ledger is double-entry, amounts are integer minor units, the launch currency is US dollars, and nothing about money is ever approximate.

The payout cycle is decided: monthly.

Why monthly at launch: it aligns with how firms and brokers already reconcile commissions; it gives fraud holding windows room to complete before money moves; and it keeps the manifest-approval workload realistic for a small operations department while approval is still human. The commitment that matters is regularity — the same cycle, executed by the fifth business day, every month, without exception. Frequency is configuration (MNY-03), so higher-frequency payouts for top partner tiers can be introduced from Phase 2, once automated batches (MNY-07 context) carry the load — announced only when operations can sustain them.

ID

PHASE

REQUIREMENT

MNY-01

P1

A double-entry ledger records every monetary event — confirmation, share split, adjustment, payout, reversal — in integer minor units per currency, with no floating-point arithmetic anywhere in the money path. The launch currency is US dollars (USD); the schema is multi-currency from day one so Phase 3 adds currencies without migration.

MNY-02

P1

The share split posts at confirmation: partner remainder and platform share as balanced entries; both queryable at any time and immutable once posted (corrections are new entries, never edits).

MNY-03

P1

Payouts run on a monthly cycle: the calendar month closes, a manifest of all payable USD balances above the configured minimum is generated on the first business day, and an Operations Administrator approves it before execution completes by the fifth business day. Cycle frequency is configuration, enabling higher-frequency runs for selected partner tiers from Phase 2.

MNY-04

P1

Partner statements itemise every line: each commission, each share deduction, each adjustment, each payout — with running balances. Nothing is ever summarised away.

MNY-05

P1

Payout execution records provider references and final status per line; failures are retried per policy and surfaced individually, never silently dropped. Providers are — (register).

MNY-06

P1

Reconciliation views prove the ledger balances: per partner, per client programme, per currency, and platform-wide — designed so the COO can verify money without a spreadsheet.

MNY-07

P2

Payout method management for partners (methods depend on provider selection), with verification steps before first use.

MNY-08

P2

Client programme funding view: what has confirmed, what is scheduled, what was paid — exportable for the client’s own accounting.

MNY-09

P3

Multi-currency settlement and FX handling beyond US dollars, on the multi-currency schema established in MNY-01.

16 Dashboards and reporting
Serves clients and partners daily. Dashboards answer one question per audience: for clients, "is this channel working?"; for partners, "what am I earning and what should I do next?" Everything shown must trace to ledger or event data.

ID

PHASE

REQUIREMENT

DSH-01

P1

Client dashboard: live partnerships, clicks, conversions, confirmed commission cost, by partnership and time range, with CSV export.

DSH-02

P1

Partner dashboard: earnings by state and by partnership, clicks and conversions per link, next scheduled payout, and statement access.

DSH-03

P1

All dashboard figures derive from the same events and ledger the statements use — one source of truth, no parallel counts.

DSH-04

P2

Regional and channel breakdowns for clients running multi-territory programmes.

DSH-05

P2

Benchmark context (anonymised, minimum-organisation floors) so clients can judge performance against the network — exact metrics gated on data volume.

DSH-06

P3

Real-time custom reporting and scheduled report delivery for enterprise plans.

17 Notifications
Serves everyone; sets the platform’s tone. Notifications exist for moments that matter — money, matches, contracts, and risk — and every money-related notification states amounts and reasons plainly.

ID

PHASE

REQUIREMENT

NTF-01

P1

Transactional email for lifecycle moments: proposals, acceptances, contract requests and completions, commission confirmations, payout notices, trial expiry, and billing events.

NTF-02

P1

In-product notification centre mirroring email, with read state.

NTF-03

P1

Notification templates are content-managed; money templates always include the itemised amounts and a link to the underlying statement line.

NTF-04

P2

Per-user notification preferences (frequency and channel), with money and contract notices non-optional.

NTF-05

P2

Partner activation sequences per programme (welcome, first-link, first-conversion milestones) — configuration, not code.

18 Administrative console
Serves the Operations Administrator; runs the company. One console for vetting, matching, money, disputes, and enforcement — built as seriously as the customer-facing product, because service quality is the product.

ID

PHASE

REQUIREMENT

ADM-01

P1

A unified work queue across vetting, match approvals, held commissions, payout manifests, and disputes — each item with age, priority, and one-click entry to its workflow.

ADM-02

P1

Partnership operations: view any partnership’s full history (states, documents, events, money) in one place; pause, resume, and end with reason codes.

ADM-03

P1

Dispute workflow: either side opens a dispute on a commission or payout line; the console shows the full trace; resolutions post as audited ledger adjustments with notified outcomes.

ADM-04

P1

Enforcement tools: warnings, feature restrictions, suspension, and termination per account, each with reason codes and audit trail.

ADM-05

P1

Configuration management for ecosystems, commission models, plans, limits, and templates — changes are audited and take effect without deployment.

ADM-06

P2

Internal metrics: queue ages, vetting throughput, time-to-first-match distributions, payout punctuality — measured privately first, published only when the numbers can be stood behind (Section 21).

19 Defensibility features
Protects the business model itself. The Company Overview defines seven layers that keep partnerships on the platform. These are the product’s contributions, phased honestly: gating and messaging first, detection second.

ID

PHASE

REQUIREMENT

DEF-01

P1

Contact gating (restating MATCH-04 as a defensibility control): no counterparty contact details or identifying channel names cross sides before CONTRACTED; enforced in the service layer; breach is severity one.

DEF-08

P1

Contact gating and pre-contract anonymity do not apply to BYO partnerships — both sides already know each other — and detection logic (DEF-04) distinguishes introduced from onboarded relationships so no false flag is raised against a client’s own network.

DEF-02

P1

In-platform messaging for PROPOSED and ACCEPTED partnerships, so pre-contract questions have a legitimate home that is not email.

DEF-03

P2

Message screening: pre-contract messages are scanned for contact-exchange patterns (addresses, phone numbers, handles, spelled-out numbers); matches are masked pending review and logged; repeated attempts flag the account.

DEF-04

P2

Anomaly detection: live partnerships whose tracked volume collapses while partner profile signals stay healthy are flagged for review as possible off-platform movement.

DEF-05

P2

Contract support for the non-circumvention terms and any sanctioned buy-out route once legal review settles them (terms —); the product must record, surface, and report against these terms.

DEF-06

P2

Report-and-review path: either side can report an approach to deal off-platform; reports route to enforcement (ADM-04) with the message trail attached.

DEF-07

P3

Retention surfaces: partner performance record and recognition displays that make accumulated on-platform history visible and valuable.

20 Growth Partner Academy
Serves partners; strengthens the whole marketplace. The Academy is Brdgr’s education programme — helping partners grow their brands bigger and better — planned for every ecosystem. Product scope begins in Phase 2; commercial packaging is —.

ID

PHASE

REQUIREMENT

ACA-01

P2

A learning area in the partner portal hosting structured content tracks (brand building, promotion craft, professional standards, business skills), with per-partner progress tracking.

ACA-02

P2

Completion records live on the partner’s internal record and may inform matching signals; any client-visible badge waits for ACA-04.

ACA-03

P2

Content is managed without deployments and organised per ecosystem, so each new ecosystem launches with an adapted track.

ACA-04

P3

Certification: assessed completion producing a client-visible credential; assessment design and any premium pricing — (register).

ACA-05

P3

Cohort features (sessions, community spaces) as the partner base grows — scoped when reached.

PART C

Standards and Plan

The bar the build must clear, and the order it ships in

21 Non-functional requirements
These apply to every module. A feature that meets its functional requirement but fails these is not done.

Money integrity
Double-entry, integer minor units, immutable postings. Corrections are new entries. No floating-point arithmetic exists anywhere in the money path, and an automated test suite proves ledger balance invariants on every build.
Traceability. Any figure a user sees — a dashboard number, a statement line, a payout — can be traced to its events and postings by an Operations Administrator in the console.
Security and privacy
Application security to recognised standards (the current OWASP guidance): input validation, output encoding, secure session handling, and dependency hygiene as build-time checks.
Encryption in transit and at rest; secrets in a managed store; least-privilege access with internal actions audited (ACC-04).
Privacy compliance with GDPR and Nigerian data-protection law: lawful-basis records, data-subject access and deletion workflows that respect financial-record retention, and a data map kept current.
Payout details and identity documents are stored with field-level protection and are never visible across sides (PRF-01).
Reliability
The money path is held to a higher availability standard than the rest of the platform. Specific availability and recovery targets are — and will be set with the Developer before launch and recorded in the register — unmeasured targets are not published, internally or externally.
Tracking endpoints degrade safely: if attribution is briefly unavailable, clicks still forward to the destination and events queue for recovery — partners must never lose credit to our downtime silently.
Backups with tested restores; an incident process where payout errors and contact-gating breaches are severity one.
Accessibility, performance, and quality
Recognised accessibility standards across all three interfaces.
Interactive views respond within levels that feel immediate on ordinary consumer hardware and networks; heavy reports may run asynchronously with progress shown.
Automated tests cover the lifecycle rules (Section 05), the vetting bypass block (VET-05), contact gating (MATCH-04/DEF-01), commission calculation, and ledger invariants — these suites are release-blocking.
Configurability
Ecosystems, participant types, commission models, plans, limits, templates, and fraud rules are configuration changeable without deployment, audited, and never retroactive on settled records. The second ecosystem must be provable as configuration alone (Section 22, Phase 3 proof).
22 Build phases
Sequenced for trust: the first release is the smallest platform that can run a real partnership properly — vet, match, contract, track, pay — with money handled to the full Section 21 standard from day one.

PHASE

THEME

SCOPE (REQUIREMENT IDS)

Phase 1

Launch — run one partnership properly, many times

Accounts and access (ACC-01–05) · profiles, directory, and partner invitations (PRF-01–05, PRF-07–08) · vetting incl. streamlined BYO verification (VET-01–06, VET-09) · matching and BYO partnership creation (MATCH-01–06, MATCH-10) · contracts (CON-01–05) · tracking (TRK-01–06) · commissions and fraud gate (COM-01–06) · money (MNY-01–06) · dashboards (DSH-01–03) · notifications (NTF-01–03) · console (ADM-01–05) · defensibility gating and messaging with the BYO exclusion (DEF-01–02, DEF-08) · billing and trial (BIL-01–06).

Phase 2

Intelligence and depth

Seat invitations (ACC-06) · channel verification (PRF-06) · screening assistance and re-vetting (VET-07–08) · re-match, discovery, exclusivity windows (MATCH-07–09) · renewals (CON-06) · promo codes and reported data (TRK-07–08) · fraud tuning (COM-07) · payout methods and funding views (MNY-07–08) · breakdowns and benchmarks (DSH-04–05) · preferences and activation sequences (NTF-04–05) · internal metrics (ADM-06) · message screening, anomaly detection, non-circumvention support, reporting path (DEF-03–06) · Academy first tracks (ACA-01–03) · plan changes and share reductions (BIL-07–08).

Phase 3

Enterprise and expansion

Back-office adapters (TRK-09) · multi-currency settlement (MNY-09) · custom reporting (DSH-06) · retention surfaces (DEF-07) · certification and cohorts (ACA-04–05) · white-label portals, API access, and multi-tier partner structures (scoped when reached) · and the architecture proof: the second ecosystem stood up as configuration only, with no code change.

Phase discipline

A Phase 2 item does not start while a Phase 1 item is unfinished, and nothing ships ahead of its automated tests. The launch phase is deliberately narrow: every workflow in it is exercised by real operations from the first week, and it is better to run few things excellently than many things almost.

23 Out of scope
Explicitly not being built now, so nobody discovers it mid-build.

Fully automated matching or vetting without human approval — assistance yes, autonomy no (Principle 3).
Any open, self-serve marketplace path that would surface unvetted supply to clients (Principle 6).
Native mobile applications — the web product must work well on mobile browsers; apps are a later decision.
Regulated betting-adjacent ecosystems until a dedicated compliance layer exists (Company Overview, Section 13).
Client-side cookie-based tracking as the attribution source of truth — attribution is server-side by design (TRK-01/02).
Payment processing for the client’s own customers — Brdgr moves commission money, never the client’s checkout revenue.
Public statistics or league tables derived from network data before the anonymisation floors and data volumes in DSH-05 are met.
24 Release criteria
The launch build ships when all of the following are true — and not before. These criteria are about correctness and safety; they deliberately contain no service-time promises, because none is in force until measured (Principle 7).

End-to-end proof, repeatedly — on both paths: a matched partnership travels PROPOSED → ACCEPTED → CONTRACTED → LIVE, and a BYO partnership travels invitation → ACCEPTED → CONTRACTED → LIVE with real signatures, real tracked conversions, the fraud gate exercised, commissions confirmed with the share applied, a payout manifest approved, and a statement that itemises everything — run repeatedly without manual database intervention.
Lifecycle rules hold under test: no state skipping, and contact details provably sealed before CONTRACTED across interface, exports, notifications, and logs (the MATCH-04 suite passes).
Vetting cannot be bypassed: the VET-05 suite proves no path marks a contact vetted without a review record.
Ledger invariants pass: double-entry balance proven on every build; a deliberately injected imbalance fails the build.
Billing behaves: trial start, expiry notice, conversion to paid, the locked state, invoices, and failed-payment handling all verified — with prices and trial length still configuration (— until decided).
Security and privacy checks pass: the Section 21 security checklist, dependency audit, and privacy workflows (access and deletion requests) demonstrated.
Operational readiness: the console queues work end to end, severity-one alerting is live for payout and gating incidents, backups restore in a test, and internal service metrics (ADM-06) are recording — privately.
Content and legal readiness: agreement templates are the lawyer-approved set, notification templates reviewed, and no interface copy anywhere promises a number this document marks —.
25 Open items register
Product-relevant open decisions. Each appears as — where it bites. Commercial items are owned in the Company Overview’s register; they are repeated here only where the build depends on them.

OPEN ITEM

OWNER

BUILD DEPENDENCY

NEEDED BY

Free trial length (7 or 14 days)

Founder

BIL-01 configuration value

Billing configuration

All plan prices, both sides

Founder

BIL-05 configuration values

Before launch pricing pages

Commission share percentage

Founder

COM-04 configuration value

Before first confirmation

Plan-based share reductions

Founder

BIL-08 / COM-04

With pricing

Annual billing discount

Founder

BIL-05

With pricing

Card capture timing at sign-up

Founder + COO

BIL-02 flow detail

Billing build

Match volume limits per plan

Founder + COO

MATCH-06 configuration

With pricing

Electronic signature provider

COO + Developer

CON-02 integration

Contracts build

Payment and payout providers

COO + Developer

BIL + MNY-05 integrations

Money build

Non-circumvention terms

Founder + lawyer

CON-05 / DEF-05 templates

Before first signature

Payout minimum threshold

COO

MNY-03 configuration — the cycle itself is decided: monthly

Before first payout run

BYO share treatment

Founder

COM-04 configuration — whether the share on client-onboarded partnerships matches or sits below the introduced-partnership share

Test in the trading survey; before launch pricing

Reliability and recovery targets

Developer + COO

Section 21 commitments

Before launch

Tracking domain

Founder (with domain)

TRK-01 infrastructure

Tracking build

Service-time targets

COO

ADM-06 measurement first

Published only when proved

Academy packaging and certification pricing

Founder

ACA-04

Phase 3

26 Document control
DOCUMENT CONTROL

DETAIL

Date

July 2026

Status

Read-only. Confidential — not for external distribution. Approved for build.

Owners

Founder (scope) · Developer (delivery) · COO (operational acceptance) · Creative Director (interface standard)

Companions

Company Overview · wireframes and build specification · agreement drafts (pending legal review)

Maintenance

Updated when an open item in Section 25 is decided, or when scope changes are approved by the Founder

The Bridge to Better Partnerships

Five steps. Three interfaces. One engine — built once, configured everywhere.