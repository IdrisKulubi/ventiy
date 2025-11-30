# Ventiy MVP Requirements

## Project Overview
Ventiy is a mental wellness platform providing safe, anonymous spaces for emotional expression with AI-driven insights, color-based emotional journeys, and pathways to professional care.

**Tech Stack:**
- Frontend: Next.js 16, TypeScript, Tailwind CSS
- Database: Neon (Serverless Postgres)
- ORM: Drizzle ORM
- Authentication: Better Auth
- Deployment: Vercel

---

## Core Features for MVP

### 1. Authentication & User Management

#### 1.1 User Registration & Login
- **Email/password authentication** via Better Auth
- **Anonymous session creation** - allow users to vent without creating an account
- **Profile setup** (optional)
  - Display name (can be pseudonym)
  - Age range
  - Location (country/region only)
  - Areas of concern (stress, anxiety, relationships, etc.)
- **Session persistence** - maintain anonymous sessions across devices via secure tokens
- **Account conversion** - allow anonymous users to create accounts and retain their history

#### 1.2 Privacy Controls
- **Visibility settings** - choose what's visible to community
- **Data export** - allow users to download their data
- **Account deletion** - complete removal of user data

---

### 2. Anonymous Venting System

#### 2.1 Vent Creation
- **Text-based venting** (500-2000 character limit)
- **Emotion tags** - users select primary emotion(s) from predefined list
  - Anxious, Stressed, Sad, Angry, Lonely, Confused, Overwhelmed, Grateful, Hopeful
- **Privacy levels:**
  - Private (only user can see)
  - Community (visible in matching micro-groups)
  - Public (visible on general feed)
- **Auto-save drafts** - prevent loss of content
- **Content warnings** - flag sensitive topics automatically

#### 2.2 Community Interaction
- **View community vents** - browse by emotion tag or topic
- **Supportive reactions** - limited to positive emojis (❤️, 🫂, 💪, 🌟)
- **Supportive comments** - allow encouraging responses
- **Report system** - flag inappropriate content
- **No user profiles visible** - maintain anonymity even in interactions

---

### 3. AI-Driven Mood Tracking

#### 3.1 Sentiment Analysis
- **Real-time emotion detection** from vent text
- **Mood scoring** - analyze intensity and sentiment
- **Pattern recognition** - identify recurring themes over time
- **Integration:** OpenAI GPT-4 API or Anthropic Claude API for sentiment analysis

#### 3.2 Personalized Insights
- **Daily mood summary** - visualization of emotional state
- **Weekly/monthly trends** - track emotional patterns
- **Trigger identification** - highlight common stress triggers
- **Wellness recommendations** based on detected mood:
  - Breathing exercises
  - Journaling prompts
  - Suggested micro-groups
  - Professional help indicators (when mood is consistently low)

#### 3.3 Crisis Detection
- **Keyword flagging** - detect language indicating self-harm or crisis
- **Immediate resources** - display crisis hotlines and emergency contacts
- **Gentle notifications** - suggest professional help without being alarming

---

### 4. Color-Based Emotional Journey

#### 4.1 Color System
- **Emotion-to-color mapping:**
  - Anxious → Stormy Blue (#4A5FBE)
  - Stressed → Burnt Orange (#E85D30)
  - Sad → Deep Indigo (#3D3B77)
  - Angry → Crimson Red (#C1272D)
  - Lonely → Misty Gray (#A8ABAD)
  - Confused → Foggy Purple (#9B7FB0)
  - Overwhelmed → Dark Teal (#2C5F5F)
  - Grateful → Warm Gold (#F4A535)
  - Hopeful → Soft Green (#7FB069)

#### 4.2 Gamification
- **Color palette unlocking** - earn new colors by venting regularly
- **Visual journey map** - show emotional evolution over time
- **Milestones** - celebrate 7 days, 30 days, 100 vents, etc.
- **Emotional diversity badge** - encourage expressing range of emotions

#### 4.3 Visual Dashboard
- **Color gradient calendar** - each day colored by dominant emotion
- **Mood spectrum** - visual representation of emotional range
- **Progress indicators** - show engagement and growth

---

### 5. Micro-Communities

#### 5.1 Community Structure
- **Auto-generated groups** based on:
  - Emotion tags (e.g., "Dealing with Anxiety")
  - Life situations (e.g., "Career Stress", "Relationship Struggles")
  - Demographics (optional - age range, location)
- **Group size limits** - max 50-100 members per micro-group
- **Private group spaces** - safe containers for sharing

#### 5.2 Moderation System
- **AI pre-moderation** - flag potentially harmful content
- **Community guidelines** - clear rules displayed prominently
- **Report & review** - human moderators review flagged content
- **Warning system** - temporary bans for violations
- **Banned keywords** - auto-filter harmful language

#### 5.3 Community Features
- **Group feed** - see recent vents from group members
- **Supportive responses** - comment with empathy
- **Weekly check-ins** - optional prompts to encourage engagement
- **Anonymous always** - no profiles even within groups

---

### 6. Wellness Marketplace (Basic MVP)

#### 6.1 Resource Library
- **Curated content:**
  - Guided meditation audio (5-15 min sessions)
  - Breathing exercises
  - Journaling prompts
  - Self-care tips
- **Free tier** - 3-5 free resources
- **Premium tier** - full library access

#### 6.2 Therapist Directory (Phase 1)
- **Browse licensed therapists** - filterable by specialty, language, price
- **Therapist profiles:**
  - Credentials
  - Specializations
  - Availability
  - Rates
  - Contact info
- **External booking** - link out to therapist's scheduling (no in-app booking for MVP)
- **Verification system** - ensure therapists are licensed

---

### 7. Subscription & Monetization

#### 7.1 Freemium Model
**Free Tier:**
- Unlimited vents (private)
- 5 community vents per week
- Basic mood tracking
- Limited wellness content (3 resources)
- Standard color palette (5 base colors)

**Premium Tier ($4.99/month):**
- Unlimited community vents
- Advanced AI insights (detailed patterns, trigger analysis)
- Full color palette (all 15+ colors)
- Complete wellness library
- Export data & reports
- Priority support

#### 7.2 Payment Integration
- **Stripe integration** for subscriptions
- **Local payment methods** - M-Pesa, Airtel Money for African markets
- **Trial period** - 7-day free trial of premium

---

### 8. Admin Dashboard

#### 8.1 Content Moderation
- **Flagged content queue** - review reported vents/comments
- **User management** - ban/suspend users
- **Moderation logs** - track actions taken

#### 8.2 Analytics
- **User growth** - signups, active users, retention
- **Engagement metrics** - vents per user, community participation
- **Emotion trends** - most common emotions, patterns
- **Subscription metrics** - conversion rates, churn

#### 8.3 Therapist Management
- **Verify therapist credentials**
- **Approve/reject applications**
- **Manage listings**

---

## Technical Requirements

### Database Schema (Core Tables)

```typescript
// Users
- id (uuid, primary key)
- email (unique, nullable for anonymous)
- password_hash (nullable)
- display_name
- is_anonymous (boolean)
- created_at
- last_active_at
- subscription_tier (free/premium)
- subscription_expires_at

// Vents
- id (uuid, primary key)
- user_id (foreign key)
- content (text)
- emotion_tags (json array)
- ai_sentiment_score (json)
- privacy_level (private/community/public)
- color_code (string)
- is_flagged (boolean)
- created_at
- updated_at

// Comments
- id (uuid, primary key)
- vent_id (foreign key)
- user_id (foreign key)
- content (text)
- created_at

// Reactions
- id (uuid, primary key)
- vent_id (foreign key)
- user_id (foreign key)
- reaction_type (heart/hug/strength/star)
- created_at

// MoodLogs
- id (uuid, primary key)
- user_id (foreign key)
- date (date)
- dominant_emotion (string)
- sentiment_score (float)
- color_code (string)
- ai_insights (json)

// Communities
- id (uuid, primary key)
- name (string)
- description (text)
- emotion_tag (string)
- member_count (int)
- created_at

// CommunityMembers
- id (uuid, primary key)
- community_id (foreign key)
- user_id (foreign key)
- joined_at

// Therapists
- id (uuid, primary key)
- name (string)
- credentials (text)
- specializations (json array)
- languages (json array)
- rate (decimal)
- contact_info (json)
- is_verified (boolean)
- created_at
```

### Server Actions (Core)

#### Auth Actions
- `signUpUser()` - Register user
- `loginUser()` - Login
- `createAnonymousSession()` - Create anonymous session
- `logoutUser()` - Logout
- `convertAnonymousToUser()` - Convert to full account

#### Vent Actions
- `createVent()` - Create vent
- `getUserVents()` - Get user's vents
- `getCommunityVents()` - Get community feed
- `getVentById()` - Get single vent
- `updateVent()` - Update vent
- `deleteVent()` - Delete vent
- `addReaction()` - Add reaction
- `addComment()` - Add comment
- `reportVent()` - Report vent

#### Mood Tracking Actions
- `getMoodInsights()` - Get AI insights
- `getMoodCalendar()` - Get mood calendar
- `getMoodTrends()` - Get mood trends

#### Community Actions
- `browseCommunities()` - Browse communities
- `getCommunityDetails()` - Get community details
- `joinCommunity()` - Join community
- `leaveCommunity()` - Leave community
- `getCommunityFeed()` - Get community feed

#### Wellness Actions
- `getWellnessResources()` - Get resources library
- `getTherapists()` - Browse therapists

#### Subscription Actions
- `createCheckoutSession()` - Create checkout session
- `cancelSubscription()` - Cancel subscription
- `getSubscriptionStatus()` - Get subscription status

#### Admin Actions
- `getFlaggedContent()` - Get flagged content
- `moderateContent()` - Take moderation action
- `getAnalytics()` - Get analytics data

---

## Non-Functional Requirements

### Performance
- **Page load time** < 2 seconds
- **API response time** < 500ms
- **Real-time sentiment analysis** < 3 seconds
- **Support 50,000 concurrent users** in MVP phase

### Security
- **End-to-end encryption** for private vents
- **HTTPS only** - force SSL
- **Rate limiting** on all API endpoints
- **SQL injection prevention** via ORM
- **XSS protection** via sanitization
- **GDPR compliance** - data export, right to deletion
- **Anonymous data storage** - separate identity from emotional data

### Scalability
- **Serverless database** (Neon) for auto-scaling
- **Edge functions** for global low latency
- **CDN** for static assets
- **Database connection pooling**

### Monitoring
- **Error tracking** - Sentry integration
- **Analytics** - PostHog or Mixpanel
- **Uptime monitoring** - 99.9% target
- **Performance monitoring** - Core Web Vitals

---

## MVP Launch Checklist

### Phase 1: Core Foundation (Weeks 1-4)
- [ ] Setup Next.js 15 project with TypeScript
- [ ] Configure Neon database + Drizzle ORM
- [ ] Implement Better Auth authentication
- [ ] Build database schema
- [ ] Create user registration/login flows
- [ ] Setup anonymous session handling

### Phase 2: Venting System (Weeks 5-8)
- [ ] Build vent creation interface
- [ ] Implement emotion tagging system
- [ ] Create community feed
- [ ] Add reactions and comments
- [ ] Build report/moderation system
- [ ] Implement privacy controls

### Phase 3: AI & Mood Tracking (Weeks 9-12)
- [ ] Integrate AI sentiment analysis API
- [ ] Build mood tracking dashboard
- [ ] Create color-based visualization
- [ ] Implement personalized insights
- [ ] Add crisis detection system
- [ ] Build mood calendar view

### Phase 4: Communities (Weeks 13-15)
- [ ] Create micro-community system
- [ ] Build community discovery
- [ ] Implement join/leave flows
- [ ] Add community moderation
- [ ] Create group feeds

### Phase 5: Marketplace & Monetization (Weeks 16-18)
- [ ] Build wellness resource library
- [ ] Create therapist directory
- [ ] Implement Stripe subscriptions
- [ ] Add M-Pesa/Airtel Money integration
- [ ] Build premium feature gates
- [ ] Create subscription management

### Phase 6: Admin & Polish (Weeks 19-20)
- [ ] Build admin dashboard
- [ ] Implement content moderation panel
- [ ] Add analytics tracking
- [ ] Setup error monitoring
- [ ] Performance optimization
- [ ] Security audit
- [ ] Beta testing with 100 users

### Phase 7: Launch (Week 21)
- [ ] Deploy to production
- [ ] Setup monitoring & alerts
- [ ] Launch marketing campaign
- [ ] Onboard first therapists
- [ ] Community guidelines published
- [ ] Support system ready

---

## Success Metrics (First 6 Months)

### User Acquisition
- **Target:** 50,000 registered users
- **Anonymous sessions:** 20,000+ monthly
- **Conversion rate:** 10% anonymous → registered

### Engagement
- **Daily active users (DAU):** 15-20% of registered users
- **Vents per user:** Average 3-5 per week
- **Session duration:** 8-12 minutes average
- **Retention:** 40% at Day 30

### Monetization
- **Premium conversions:** 10% of active users
- **Monthly recurring revenue (MRR):** $25,000
- **Churn rate:** < 5% monthly

### Community Health
- **Moderation actions:** < 2% of total vents
- **User reports:** < 1% of content
- **Support response time:** < 24 hours
- **User satisfaction:** 4+ stars average

---

## Future Enhancements (Post-MVP)

### Features to Add Later
- Mobile apps (iOS/Android)
- Voice venting (audio recording)
- Video meditation content
- In-app therapist booking & video sessions
- AI chatbot companion
- Group therapy sessions
- Corporate wellness packages
- Multi-language support
- Offline mode
- Desktop app


---

## Resources & Dependencies

### External Services
- **OpenAI API** - Sentiment analysis ($0.002/1K tokens)
- **Stripe** - Payment processing (2.9% + $0.30 per transaction)
- **M-Pesa API** - Mobile payments in Africa
- **Twilio** - SMS notifications (optional)
- **SendGrid** - Email notifications
- **Cloudflare** - CDN & DDoS protection
- **Vercel** - Hosting & deployment

### Development Tools
- **GitHub** - Version control
- **Figma** - Design handoff (already done)
- **Sentry** - Error tracking
- **PostHog** - Product analytics
- **Linear/Jira** - Project management

### Compliance & Legal
- **Privacy Policy** - GDPR compliant
- **Terms of Service** - Clear user agreement
- **Community Guidelines** - Safe space rules
- **Crisis Resource List** - Local hotlines by country
- **Data Processing Agreement** - For therapists

---



### Environment Variables
```
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
OPENAI_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
```


