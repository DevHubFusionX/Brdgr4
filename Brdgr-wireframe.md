Zoom: Ctrl/Cmd + Mouse Wheel
Brdgr

WIREFRAMES & BUILD SPECIFICATION

Every screen, drawn before it is built.

Brdgr discovers, recruits, and manages performance-driven partnerships — and these are the skeletons of the screens that deliver that service. This document is the visual companion to the Product Requirements Document. It maps the platform as a tree, draws the flows that govern it, and lays out every core screen as an annotated wireframe — so the Developer builds the right thing, the COO can verify the workflows, and the Creative Director has a structural base to design on. Wireframes show structure and behaviour, not final visual design.

The Bridge to Better Partnerships

Three interfaces, one engine. The client portal sells the outcome, the partner portal earns the trust, and the administrative console runs the machine. Every screen in this document exists to move a partnership along VET → MATCH → CONTRACT → TRACK → PAY.

FIELD

DETAIL

Document

Wireframes and build specification — the full product map, the governing flows, and seventeen annotated screen skeletons, from the public landing page to the payout manifest

Owners

Creative Director (interface standard) · Developer (build fidelity) · COO (workflow acceptance) · Founder (scope)

Companions

Product Requirements Document (requirement IDs referenced throughout) · Company Overview

Fidelity

Skeletons by intent: every screen is drawn as labelled regions and placeholder bars — layout, hierarchy, and behaviour, with no copy, numbers, or styling. Colour, type, and final visual design follow from the brand system, produced by the creative unit.

Reading a skeleton

Each dashed region carries an uppercase label naming what lives there; grey bars stand for text, blocks for cards and charts, and gold badges tie regions to the annotation table beneath. Money is USD (decided); every price and share remains — until concluded.

Date

July 2026

Confidential — not for external distribution

Read-only. Anything shown as — has not been decided — including the domain shown as a dash in every browser bar. Open decisions live in the registers of the Company Overview and the PRD.

Contents
#

SECTION

#

SECTION

A

STRUCTURE

B

SCREEN SKELETONS

01

Conventions — how to read a skeleton

05

Public — landing page

02

The full product map

06

Public — sign in & sign up

03

The engine and the lifecycle

07

Client — dashboard

04

How money moves

08

Client — new brief

09

Client — match proposals

10

Client — partnership detail

11

Client — plan & billing

12

Client — onboard your partners

13

Partner — sign-up & vetting status

14

Partner — dashboard

15

Partner — offers

C

COVERAGE

16

Partner — earnings & statements

21

Screen-to-requirement traceability

17

Admin — work queue

22

Open items that shape the interface

18

Admin — vetting review

23

Document control

19

Admin — match builder

20

Admin — payout manifest

PART A

Structure

The platform as a tree, and the flows that govern every screen

01 Conventions
Skeletons are structural contracts. Every screen is drawn as dashed, labelled regions: the uppercase label names what lives there, grey bars stand for text, blocks stand for cards, charts, and inputs. Nothing decorative, no copy, no invented content — the developer reads structure and behaviour; the creative unit supplies the finished look from the brand system.
Gold numbered badges on each wireframe match the annotation table beneath it: region, purpose, and the PRD requirement IDs the region implements.
The browser bar shows a dash because the domain is not yet decided — the wireframes refuse to invent one, exactly as the documents do.
No numbers anywhere — by design. Skeletons carry no amounts, counts, or prices at all. Money is USD (decided) and the payout cycle is monthly (decided); every price, the trial length, and the commission share remain — in the registers, and all values bind to configuration so conclusions drop in without redesign.
Language rules apply inside the interface: a directory entry is a contact, never a partner; nobody is called vetted before passing vetting; and no screen promises a service time, because none is in force until measured.
02 The platform map
The full Brdgr product map on one page — every ecosystem we plan, and the one we are in. The top band is the ecosystem layer: Trading carries the live focus, and the tree states plainly what starts after it — SaaS next, then Fintech, then Creator & E-commerce, each a configuration of the same platform, with the under-evaluation sectors (education, gaming, crypto, web infrastructure, insurance and lending, travel) drawn in dashes behind them and betting-adjacent sectors excluded until a compliance layer exists. Between the ecosystem layer and the portals sits the public entry band — landing page, sign in, and sign up with role selection (drawn in Sections 05–06). Below it, the three portals — the client portal now including the onboard-your-partners branch, where a company brings its existing network onto the rails: client, partner, and the administrative console operated by the Operations department. The Academy appears in the partner portal from Phase 2, and the payout manifests screen carries the decided monthly cycle.



Reading the tree: solid means live focus or specified; dashed means sequenced or under evaluation with no detail invented yet. Each portal leaf is a screen or screen family specified in this document or scheduled by phase in the PRD. Sign-in, account management, and the notification centre are shared surfaces across all three portals and are not repeated per branch. When a new ecosystem opens, this map gains configuration — not branches: the portals and screens stay the same.

03 The engine and the lifecycle
The five steps every screen serves:



And the state machine every partnership follows. These states appear verbatim as status labels across all three portals; no interface may invent a state that is not on this diagram, and every transition is logged with actor and timestamp.



The two rules the diagrams enforce

No state may be skipped, and counterparty contact details release exactly once — at the ACCEPTED → CONTRACTED transition, after both signatures. Screens in Part B show how both rules surface to users: anonymised cards before contract, released details and tracking assets after.

04 How money moves
From tracked conversion to paid-out balance. A conversion is not money: it becomes money only after the fraud gate passes it and the programme’s confirmation rule completes. The platform share (—) is stamped at confirmation, the split posts to the double-entry USD ledger, and payouts execute from an approved manifest on the monthly cycle — closed each calendar month and executed by the fifth business day. Every stage below has a screen in Part B.



Why this order is fixed: screening before confirmation protects clients from paying for fraud; confirmation before payout protects partners from silent reversals; and the manifest approval step keeps a human accountable for every batch that leaves. The partner-facing names for these stages — pending review, confirmed, scheduled for payout, paid — appear on the partner dashboard and statements exactly as drawn later.

PART B

Screen Skeletons

Seventeen screens — public entry, client, partner, and admin — annotated against the PRD

05 Public — landing page
The first thing anyone sees — and the vocabulary rule made visible. The hero states the service in our exact words; the page sells the specific problem for each side, shows the five-step engine, presents both ways in, and names the roadmap — no growth promises, no numbers we cannot defend.



#

REGION

PURPOSE

PRD REFS

1

Hero + dual CTA

The positioning statement — Brdgr discovers, recruits, and manages performance-driven partnerships — with one call to action per side of the marketplace.

Overview Principle 7 · ACC-01

2

How it works

The five-step engine as the page’s spine — the same VET → MATCH → CONTRACT → TRACK → PAY drawn in Section 03.

Section 03

3

Two ways in

Supplied partners and bring-your-own, stated side by side with the ecosystem roadmap — trading current, the rest sequenced.

MATCH · PRF-07 · map (02)

4

Footer

Legal, policies, and the sign-in route; domain shown as — until registered.

Open items

06 Public — sign in & sign up
One door in, then two paths. Sign-in serves both sides with second-factor support (mandatory for internal roles). Sign-up selects a side first, then branches: companies choose a plan and start the free trial; partners build a profile and enter the vetting queue — with the rules stated on screen (ACC-01/03, BIL-01, VET-01).



#

REGION

PURPOSE

PRD REFS

1

Sign-in form

One entry point for clients and partners; sessions and password rules per the security standards.

ACC-03

2

Second factor

Supported for all, mandatory for Operations Administrators.

ACC-03

3

Sign-up routing

No account yet — explicit company and partner routes into the flow below.

ACC-01



#

REGION

PURPOSE

PRD REFS

1

Step rail

Choose side → account → side-specific path → (partner) verification — the whole flow visible at once.

ACC-01

2

Role selection + account

Organisation and first seat created; seat limits are plan configuration.

ACC-01 · BIL-04

3

Company path

Plan selection (prices — ) and the free trial start — billing begins when the trial ends.

BIL-01 · BIL-05

4

Partner path + rules

Profile then the vetting queue, with the platform’s rules stated where they are read: trial then billing, no permanent free plan, nobody matchable before vetting.

PRF-01 · VET-01 · BIL-01

07 Client — dashboard
The Partnerships Lead’s daily answer to "is this channel working?" Every figure traces to the ledger and event stream — one source of truth shared with statements (DSH-03).



#

REGION

PURPOSE

PRD REFS

1

KPI band

Live partnerships, clicks, conversions, and confirmed commission cost (USD) for the selected range.

DSH-01

2

Conversions by partnership

Comparative bars so a weak partnership is visible at a glance; feeds the re-match conversation.

DSH-01 · MATCH-07

3

Needs your attention

Proposals awaiting review and anything blocking — the client’s slice of the work queue.

MATCH-05

4

Partnership table

State, volume, and confirmed cost per partnership with one-click entry to detail; CSV export lives here.

DSH-01 · ADM-02

08 Client — new brief
A brief is structured, not a free-text wish. Five steps gather objective, audience, model, and constraints; drafts keep change history until submitted (MATCH-01).



#

REGION

PURPOSE

PRD REFS

1

Step rail

Five stages with clear progress; a brief cannot submit with a required stage incomplete.

MATCH-01

2

Commission model stage

Model, paying conversion, amount, and confirmation rule — all configuration-driven so new models need no redesign.

COM-01 · COM-04 · Section 06 of the PRD

3

Brief summary

Always-visible summary of choices so far; becomes the anonymised programme summary partners see.

MATCH-03

4

Limits note

Proposal volume follows plan configuration; restricted territories are enforced at matching and the fraud gate.

MATCH-06 · COM-02

09 Client — match proposals
Vetted candidates, anonymised until contract. The client judges fit signals and terms — never identities. Accept or decline within the window; declines carry reasons that improve matching (MATCH-05).



#

REGION

PURPOSE

PRD REFS

1

Anonymised candidate card

State pill, fit signals as tags, and a vetted mark — identity and channels withheld until CONTRACTED.

MATCH-03 · MATCH-04

2

Gating note

Plain-language statement of the contact rule, so the behaviour never surprises a client.

MATCH-04 · DEF-01

3

Accept / decline

Both actions in one place; decline requires a reason code; expiry closes silently unanswered proposals.

MATCH-05

4

Proposal terms

Model, amount, territories, exclusivity window — the exact terms that will merge into the contract.

CON-01 · MATCH-09

10 Client — partnership detail
One record, whole life. Tabs cover overview, contract, tracking, commissions, and messages — the same record the Operations Administrator sees in the console (ADM-02).



#

REGION

PURPOSE

PRD REFS

1

Tab rail

Overview, contract, tracking, commissions, messages — the full partnership in one place.

ADM-02

2

State + timeline

Current lifecycle state with the audited transition history: who, what, when.

Section 05 of the PRD

3

Contract access

The signed document, stored with complete history, downloadable for the life of the account.

CON-03

4

Actions

Pause with reason, and request re-match when performance disappoints — routed to the Operations Administrator.

MATCH-07 · ADM-02

5

Commission summary

Counts by money state, matching the partner-side names exactly — both sides see the same truth.

COM-06

11 Client — plan & billing
Trial first, then a decision. The banner counts the trial down ( — days: 7 or 14, undecided); plans show dashes until pricing is concluded; the locked state and retry sequence are specified even though nobody wants to meet them (BIL-01..06).



#

REGION

PURPOSE

PRD REFS

1

Trial banner

Days remaining and what happens at expiry — billing begins, no permanent free plan.

BIL-01 · BIL-02

2

Plan cards

Starter / Growth / Enterprise with dash prices; higher plans show the reduced commission share ( — ).

BIL-05 · BIL-08

3

Invoices

Every charge produces an invoice, available in-product.

BIL-06

4

Failure note

Failed payments retry and notify before the account locks read-only — stated where the client will look for it.

BIL-03 · BIL-06

12 Client — onboard your partners
The option that meets companies where they are. Existing partners are invited singly or in bulk, pass streamlined verification, and land on the same contracts, tracking, fraud gate, and monthly USD payouts — with the client’s ownership of the relationship stated on the screen itself (PRF-07/08, VET-09, MATCH-10).



#

REGION

PURPOSE

PRD REFS

1

Single invitation

Email invitation carrying the client’s programme terms, with per-partner overrides.

PRF-07 · COM-01

2

Bulk invitation

CSV upload; every invitee is pre-linked to this client’s programme on sign-up.

PRF-07

3

Invitation pipeline

Invited → signed up → verifying → contracted → live — the client watches their own network come onto the rails.

PRF-08 · VET-09 · MATCH-10

4

Ownership & verification notes

Plainly stated: non-circumvention never applies to partners the client brought, and invited partners pass identity-and-compliance checks only — full vetting applies only if they opt into open matching.

DEF-08 · CON-05 · VET-09

13 Partner — sign-up & vetting status
The honest waiting room. An applicant sees the three dimensions under review, any evidence request, and the rules — without ever being called vetted early (VET-01..06).



#

REGION

PURPOSE

PRD REFS

1

Progress rail

Profile submitted → under review → outcome; no time promise is shown, because none is in force.

VET-01 · Principle 7

2

Review dimensions

Audience authenticity, compliance history, track record — each with live status.

VET-02

3

Evidence request

Structured more-information flow, including channel-ownership checks.

VET-03 · PRF-06

4

Rules panel

Re-application after decline, and the guarantee that payout details never reach clients.

VET-04 · PRF-01

14 Partner — dashboard
What am I earning, and what should I do next? Money states in plain language across every partnership, plus the tracking links that make credit survive ad blockers (COM-06, TRK-01).



#

REGION

PURPOSE

PRD REFS

1

Money-state cards

Pending review → confirmed → scheduled → paid — the exact states from the money-flow diagram, named identically everywhere.

COM-06 · MNY-04

2

Per-partnership table

Clicks, conversions, and earnings per programme — one account, every partnership.

DSH-02

3

Link panel

Server-side tracking links on the platform domain ( — until decided); copy in one click.

TRK-01

4

Attribution note

Why credit is safe: attribution happens on our servers, not the visitor’s browser.

TRK-01 · TRK-02

15 Partner — offers
Programmes come to the partner. Anonymised client, plain terms, a response window, and messaging that stays on-platform until contract (MATCH-04, DEF-02).



#

REGION

PURPOSE

PRD REFS

1

Offer card

Anonymised programme with fit tags — why this partner, stated plainly.

MATCH-03 · MATCH-08

2

Terms table

What pays, how much reaches the partner, and the response window — no hidden mechanics.

COM-01 · MATCH-05

3

Accept / decline

Same consent mechanics as the client side; declining with a reason improves future matches.

MATCH-05

4

Gating & messaging note

Contact releases only at contract; pre-contract questions go through platform messages.

CON-04 · DEF-01 · DEF-02

16 Partner — earnings & statements
The screen the motto answers to. Every line itemised — commissions, the platform share ( — ), clawbacks with reasons, payouts with provider references — with running balances (MNY-04).



#

REGION

PURPOSE

PRD REFS

1

Next payout

The monthly cycle made visible: amount, execution by the fifth business day, and the minimum ( — ).

MNY-03

2

Statement export

CSV and PDF of the same ledger truth the dashboard shows.

MNY-04 · DSH-03

3

Itemised lines

Confirmations, the share, clawbacks with reasons, payouts — nothing summarised away.

MNY-04 · COM-05

4

Disputes note

Every deduction carries a reason; disputes attach the full trace.

ADM-03 · MNY-04

17 Admin — work queue
The console’s front page: everything waiting, oldest and riskiest first. Vetting, match approvals, held commissions, payout manifests, and disputes in one queue with assignment (ADM-01).



#

REGION

PURPOSE

PRD REFS

1

Queue counters

Live counts per workflow with the oldest item’s age — the COO’s morning view.

ADM-01

2

Unified list

Every waiting item, typed and aged, one click from its workflow; assignment prevents duplicate review.

ADM-01 · VET-01

3

Held commission entry

Fraud-gate holds surface here with the rule that fired.

COM-02 · COM-03

4

Private metrics note

Service metrics record privately first — published only when they can be stood behind.

ADM-06 · Principle 7

18 Admin — vetting review
Careful made fast. Evidence on the left, three verdicts on the right, audited notes, and three outcomes — with no path that skips the review record (VET-05).



#

REGION

PURPOSE

PRD REFS

1

Evidence panel

Everything gathered for this application; Phase 2 screening signals appear here as reviewer input, never as a verdict.

VET-01 · VET-07

2

Dimension verdicts

Audience authenticity, compliance history, track record — one verdict each.

VET-02

3

Audited notes

Reviewer reasoning captured with the verdict; every outcome is an audited event.

VET-06

4

Outcomes

Approve, request information, or decline with reason codes; declined applicants can re-apply after the set period.

VET-03 · VET-04

19 Admin — match builder
Where matching actually happens. The brief on the left, ranked vetted candidates with visible reasons on the right, and a human approval before anything is sent (MATCH-02, MATCH-03).



#

REGION

PURPOSE

PRD REFS

1

Brief panel

The structured brief being served, with its constraints.

MATCH-01

2

Ranked candidates

Scores with reasons — the system ranks, the person decides.

MATCH-02

3

Approve & send

Proposals go out only on explicit approval, carrying anonymised summaries for both sides.

MATCH-03

4

Filter note

Restricted territories and exclusivity windows filter candidates before ranking ever runs.

MATCH-09 · COM-02

20 Admin — payout manifest
The accountable moment. The monthly payout run is a reviewable manifest — lines, USD totals in integer minor units, ledger check — approved by a person before a unit moves, and executed by the fifth business day (MNY-03).



#

REGION

PURPOSE

PRD REFS

1

Run summary

The monthly run: line count, USD totals in integer minor units, and balances carried below the minimum.

MNY-03 · MNY-01

2

Ledger check

Balance invariants verified before approval is even offered.

MNY-06

3

Line detail

Per-partner balances, methods per provider ( — ), references, and statuses — failures retry per policy and surface individually.

MNY-05

4

Approve & execute

One explicit approval; a payout error is a severity-one incident, and this screen is why it stays rare.

MNY-03 · Section 21 of the PRD

PART C

Coverage

Every screen tied to its requirements, and the open items that shape the interface

21 Screen-to-requirement traceability
Proof of coverage. Every Phase 1 module in the PRD has a home in these wireframes. Where a module’s screen is not drawn in Part B, the table says where it lives instead — nothing is silently unspecified.

PRD MODULE

PRIMARY SCREENS

WHERE DRAWN / NOTED

Accounts & access (ACC)

Landing, sign-in, sign-up & role selection; account and seats

Sections 05 and 06 — drawn as skeletons; seats as standard patterns

Profiles & directory (PRF)

Partner profile; admin contact directory; partner invitations

Partner sign-up (13) and sign-up flow (06); invitations (12); directory as console branch (02, 17)

Vetting (VET)

Applicant status; admin review; streamlined BYO verification

Sections 13 and 18; the partner path in 06; BYO notes in 12

Matching (MATCH)

Brief; proposals both sides; match builder; BYO partnership creation

Sections 08, 09, 15, 19; BYO in 12

Contracts (CON)

Contract tab; signature step

Section 10; e-sign flow follows provider selection ( — )

Tracking (TRK)

Link panel; tracking tab

Sections 14 and 10

Commissions & fraud gate (COM)

Money states; held-commission review

Sections 14, 16, 17

Money (MNY)

Statements; payout manifest

Sections 16 and 20

Billing & trial (BIL)

Plan selection at sign-up; plan & billing; trial banner; locked state

Sections 06 and 11

Dashboards (DSH)

Client and partner dashboards

Sections 07 and 14

Notifications (NTF)

Notification centre — shared surface

Platform map (02); templates content-managed

Admin console (ADM)

Queue; partnership ops; disputes; configuration

Sections 17–20; remaining branches on the map (02)

Defensibility (DEF)

Gating notes; platform messages; report path; the BYO exclusion

Sections 09, 10, 15; the exclusion stated in 12; screening and anomaly views are Phase 2

Academy (ACA)

Partner portal branch — Phase 2

Platform map (02), tagged P2; drawn when Phase 2 is specified

Phase discipline in the drawings

Part B draws the launch build. Phase 2 and Phase 3 surfaces — Academy tracks, screening assistance, anomaly review, benchmarks, white-label, API — are placed on the map and tagged, and will be wireframed against their PRD requirements when their phase begins. Drawing them now would invent detail ahead of decisions.

22 Open items that shape the interface
These decisions change pixels. Each is owned in the Company Overview or PRD register; this table records only what the interface does about them meanwhile.

OPEN ITEM

WHERE IT APPEARS

INTERFACE BEHAVIOUR UNTIL DECIDED

Domain name

Browser bar of every screen; partner link panel

Shown as a dash; tracking-link layout accepts any domain length

Trial length (7 or 14 days)

Billing banner (11) and sign-up (06)

Banner reads " — days remaining"; countdown binds to configuration

All plan prices, both sides

Plan cards (11); plan step at sign-up (06)

Dash prices; card layout fixed so numbers drop in without redesign

Commission share % and plan reductions

Statements (16); plan cards (11); money flow (04)

Share line prints " — %"; statement math renders from configuration

Payout providers & minimum

Manifest (20); partner payout settings

Method column reads "per provider ( — )"; the cycle itself is decided — monthly — and amounts are USD; the minimum stays configuration

E-signature provider

Contract step (10)

Signature step drawn as a handoff; detailed flow follows selection

Service-time targets

Vetting status (13); queue (17)

No countdowns or promises rendered; ages shown, targets absent

Non-circumvention terms

Contract tab; offer notes

Referenced as "per agreement"; clause text follows legal review

23 Document control
DOCUMENT CONTROL

DETAIL

Date

July 2026

Status

Read-only. Confidential — not for external distribution. Approved as the structural base for build and visual design.

Owners

Creative Director (interface standard) · Developer (build fidelity) · COO (workflow acceptance) · Founder (scope)

Companions

Product Requirements Document · Company Overview · brand system

Maintenance

Updated when an open item lands, when a phase begins, or when scope changes are approved by the Founder

The Bridge to Better Partnerships

Three portals. Seventeen screens. One engine — drawn as skeletons before it is built.