# Website Privacy & Compliance Guide

## Overview

This guide explains what legal pages and compliance mechanisms you need for a website, based on features and functionality.

---

## Basic Foundation (Every Website)

### Minimum Required Pages:

```
/privacy-policy
/terms-of-service (optional but recommended)
Cookie consent banner
```

### What Goes in Privacy Policy:
- What data you collect (form submissions, localStorage, cookies)
- How you use the data
- Third-party services (analytics, hosting)
- User rights (access, delete, modify)
- Contact information
- How long you retain data

### What Goes in Terms of Service:
- How users can/cannot use the service
- Liability limitations ("provided as-is")
- User responsibilities
- Account termination rules (if applicable)
- Dispute resolution

### Cookie Consent Banner:
- **Required by:** GDPR (EU), CCPA (California), similar laws worldwide
- **Must include:** Accept/Reject options for non-essential cookies
- **Link to:** Privacy Policy or separate Cookie Policy
- **Essential cookies** (for site functionality) don't need consent
- **Non-essential cookies** (analytics, ads) need opt-in

---

## Feature-Based Requirements

### Analytics (GA4, Meta Pixel, etc.)

**New pages:** None

**Updates needed:**
- ✅ Privacy Policy: Add data collection disclosure
- ✅ Privacy Policy: List third-party analytics providers
- ✅ Cookie banner: Must allow opt-out of analytics cookies
- ✅ Cookie Policy: Document what cookies are set

**Example disclosure:**
```
We use Google Analytics to understand how users interact 
with our site. This includes IP addresses, page views, 
and session duration. Data is processed by Google LLC.
```

---

### Display Ads (Google AdSense, ad networks)

**New pages:** Optionally `/ad-choices` for transparency

**Updates needed:**
- ✅ Privacy Policy: Heavy updates for ad tracking
- ✅ Cookie Policy: Document advertising cookies
- ✅ Cookie banner: **Critical** - must be granular (accept analytics vs ads separately)

**Important:** Ad cookies are highly regulated under GDPR. Users must actively opt-in.

---

### Payments / Subscriptions

**New pages needed:**
- `/refund-policy` (or section in Terms)
- `/cancellation-policy` (or section in Terms)

**Updates needed:**
- ✅ Privacy Policy: Payment processor disclosure (Stripe, PayPal)
- ✅ Privacy Policy: Billing data retention
- ✅ Terms of Service: Billing terms, auto-renewal, pricing

**Example payment processors disclosure:**
```
Payment information is processed by Stripe. We do not 
store credit card numbers. Stripe's privacy policy: [link]
```

---

### Email Collection / Newsletter

**New pages:** None

**Requirements:**
- ✅ Privacy Policy: Email usage disclosure
- ✅ Unsubscribe link in every email (CAN-SPAM Act)
- ✅ Consent checkbox on forms (GDPR)
- ✅ Double opt-in recommended (GDPR best practice)

**Cannot:**
- Pre-check consent boxes
- Hide unsubscribe links
- Make unsubscribe difficult

---

### User Accounts

**New pages:** None (usually)

**Updates needed:**
- ✅ Privacy Policy: Account data storage
- ✅ Privacy Policy: Password security practices
- ✅ Terms: Account responsibilities, termination rules

---

### User Generated Content (Comments, Posts, Uploads)

**New pages needed:**
- `/community-guidelines` or `/content-policy`
- `/dmca` (DMCA takedown process for copyright)

**Updates needed:**
- ✅ Privacy Policy: How user content is used
- ✅ Terms: Content ownership, license grants
- ✅ Terms: Prohibited content rules
- ✅ Moderation/reporting process

**Why DMCA matters:**
- Safe Harbor protection from copyright liability
- Must have designated agent
- Must respond to takedown requests

---

### Affiliate Marketing

**New pages:**
- `/affiliate-disclosure` (FTC requirement)
- OR inline disclosure on pages with affiliate links

**Updates needed:**
- ✅ Privacy Policy: Cookie disclosure (if using affiliate tracking)

**FTC requirement:**
```
"We earn a commission from qualifying purchases 
made through links on this page."
```

Must be **clear and conspicuous** - can't hide it in fine print.

---

## Data Sharing Scenarios

### Scenario 1: Sharing Data with Service Providers

**Example:** Using Mailchimp for email, AWS for hosting, Stripe for payments

**Classification:** Data Processing (not a sale)

**Requirements:**
- ✅ Privacy Policy: List all processors
- ✅ Privacy Policy: Explain why they need the data
- ✅ No "Do Not Sell" page needed (usually)

**Key:** Service providers process data **on your behalf**, not for their own purposes.

---

### Scenario 2: Lead Generation / Contact Form to Partners

**Example:** 
- User fills form: "Get quotes for solar panels"
- You send their info to 3 solar companies
- You get paid per lead

**Classification:** **Depends on presentation**

#### Option A: Frame as Service Delivery
```
"We connect you with service providers to fulfill your request"
```

**Requirements:**
- ✅ Privacy Policy: Disclose partner sharing
- ✅ Consent checkbox on form
- ✅ Clear notice above form
- ⚠️ May still be considered a "sale" under CCPA

#### Option B: Acknowledge as Data Sale (Safest)
```
"We share your information with partners and may receive compensation"
```

**Requirements:**
- ✅ Everything from Option A, PLUS:
- ✅ `/do-not-sell` page
- ✅ Prominent "Do Not Sell" footer link
- ✅ Privacy Policy: Explicit "we sell" language

---

### Scenario 3: Selling Data to Data Brokers

**Example:** Selling browsing behavior, email lists, demographics to third parties

**Classification:** Data Sale - **Heavily Regulated**

**Requirements:**
- ✅ `/do-not-sell` page (required)
- ✅ Privacy Policy: Explicit disclosure of sales
- ✅ Privacy Policy: Categories of data sold
- ✅ Privacy Policy: To whom (data brokers, advertisers)
- ✅ Opt-in consent banner (GDPR)
- ✅ Opt-out mechanism (CCPA)
- ⚠️ **High legal risk** - consider consulting lawyer

**Major difference:**
- No direct user benefit
- Not part of service delivery
- Pure monetization of user data
- Reputational risk

---

## Consent Requirements

### GDPR (European Union)

**Applies to:** Any site with EU visitors

**Key rules:**
- Consent must be **freely given, specific, informed, unambiguous**
- Boxes cannot be pre-checked
- Must be as easy to withdraw as to give
- Must be opt-in (not opt-out)
- Consent for one purpose doesn't cover another

**Valid consent example:**
```
☐ I agree to receive marketing emails [separate action]
```

**Invalid:**
```
☑ I agree to Terms, Privacy, and marketing emails [pre-checked, bundled]
```

---

### CCPA / CPRA (California)

**Applies to:** Businesses with California customers meeting thresholds
- $25M+ annual revenue, OR
- 100K+ CA consumers/households, OR
- 50%+ revenue from selling personal information

**Key rights:**
- Right to know what data is collected
- Right to delete
- Right to opt-out of sales
- Right to non-discrimination for opting out

**"Do Not Sell" link must be:**
- In footer of every page
- Clearly labeled "Do Not Sell My Personal Information"
- Easy to use

---

### CAN-SPAM Act (Email Marketing)

**Applies to:** All commercial email in the US

**Requirements:**
- Accurate "From" and "To" information
- Truthful subject lines
- Identify message as ad
- Include physical address
- Easy opt-out mechanism
- Honor opt-outs within 10 days

---

## Quick Reference Matrix

| Feature | New Page(s) | Privacy Update | Cookie Banner | Special Requirements |
|---------|-------------|----------------|---------------|---------------------|
| **Basic site** | Privacy, Terms | N/A | If cookies used | - |
| **GA4 / Analytics** | - | ✅ | ✅ Opt-out | Cookie disclosure |
| **Display Ads** | Ad Choices (opt) | ✅ Heavy | ✅ Granular | GDPR opt-in critical |
| **Payments** | Refund, Cancel | ✅ | - | PCI compliance |
| **Email marketing** | - | ✅ | - | Unsubscribe links |
| **User accounts** | - | ✅ | - | Security practices |
| **User content** | Guidelines, DMCA | ✅ | - | Moderation process |
| **Affiliate links** | Disclosure | Maybe | - | FTC compliance |
| **Share data (service)** | - | ✅ | - | Processor disclosure |
| **Lead generation** | Do Not Sell (maybe) | ✅ | Consent on form | Clear disclosure |
| **Sell data** | Do Not Sell ✅ | ✅ Heavy | ✅ Opt-in | High compliance |

---

## Best Practices

### 1. Be More Transparent Than Required
- Users appreciate honesty
- Reduces legal risk
- Builds trust

### 2. Make Privacy Easy to Understand
- Use plain language, not legal jargon
- Add a "What This Means" section
- Provide examples

### 3. Give Users Control
- Easy access to their data
- Simple deletion process
- Clear opt-out mechanisms

### 4. Document Everything
- When consent was given
- What version of policy was shown
- User opt-in/opt-out choices

### 5. Keep Policies Updated
- Review every 6-12 months
- Update when adding features
- Notify users of material changes

### 6. Cookie Consent Best Practices
- "Accept All" and "Reject All" buttons (same prominence)
- Granular options (Analytics vs Ads)
- Don't use dark patterns
- Don't block site access (questionable under GDPR)

---

## Common Mistakes to Avoid

❌ **Pre-checked consent boxes** - Invalid under GDPR
❌ **Hiding opt-out mechanisms** - Violates CCPA
❌ **Vague privacy policies** - "We share with partners" (who?)
❌ **Copying policies from other sites** - May not match your practices
❌ **Not updating after feature changes** - Out of sync = liability
❌ **Bundling consent** - "Agree to Terms and marketing" = invalid
❌ **No way to delete data** - GDPR/CCPA violation
❌ **Ignoring user requests** - Must respond in 30-45 days

---

## When to Consult a Lawyer

You should get legal advice if:
- Selling user data for profit
- Handling sensitive data (health, financial, children)
- Large scale (100K+ users)
- Operating internationally (multiple jurisdictions)
- Receiving legal complaints/requests
- Uncertain about compliance

**Privacy generators are useful for simple sites, but not substitutes for legal advice in complex scenarios.**

---

## Resources

### Policy Generators (Basic sites):
- Termly
- TermsFeed
- PrivacyPolicies.com

### Compliance Tools:
- OneTrust (enterprise)
- Cookiebot (cookie consent)
- TrustArc

### Legal Requirements:
- GDPR: https://gdpr.eu/
- CCPA: https://oag.ca.gov/privacy/ccpa
- CAN-SPAM: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business

---

## Summary TL;DR

**Every site needs:**
- Privacy Policy
- Cookie banner (if using cookies)

**Add Terms of Service if:**
- Want liability protection
- Have user accounts
- Want usage rules

**Add more pages when:**
- Payments → Refund/Cancel policies
- User content → Guidelines/DMCA
- Selling data → Do Not Sell page
- Affiliates → Disclosure

**The more you do with user data, the more transparency you need.**
