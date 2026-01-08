# Persistent Stopwatch - Design Document

## Core Concept

A stopwatch that continues running even when the browser is closed. Persistence is achieved by storing timestamps in localStorage rather than maintaining a running timer.

## Architecture

### Tech Stack
- **Hosting:** Cloudflare Pages
- **Framework:** Next.js (App Router)
- **Analytics:** Google Analytics 4 (GA4)
- **Testing:** 
  - Jest (unit/integration tests)
  - Playwright (e2e tests)

### Page Structure

**Main Route (`/`):**
- **Upper section:** Stopwatch interface (always visible)
- **Lower section:** Landing page content (scrollable)
  - Explanation of the app
  - Features/benefits
  - SEO-optimized content

This combined approach allows the functional stopwatch to be immediately accessible while providing SEO value and user education below the fold.

**Additional Pages:**
- `/info` - About/information page
- `/privacy-policy` - Privacy policy
- (More legal pages TBD)

## Persistence Mechanism

Instead of keeping a timer running, we store:
- `start_tmp`: Timestamp when the stopwatch was started (null when paused)
- `accumulated_time`: Total elapsed time from all previous sessions (in milliseconds)

**Calculating total elapsed time:**
- **When running:** `accumulated_time + (Date.now() - start_tmp)`
- **When paused:** `accumulated_time`

This approach ensures the stopwatch "runs" even when the tab/browser is closed, by recalculating elapsed time on page load.

## State Management

### localStorage Schema
```javascript
{
  "start_tmp": number | null,      // Timestamp in ms, or null when paused
  "accumulated_time": number        // Total accumulated time in ms
}
```

### State Machine

**Initial State:**
- `start_tmp = null`
- `accumulated_time = 0`

**User Actions:**

1. **Start/Pause Button Click:**
   ```
   If start_tmp is null (currently paused):
     → Set start_tmp = Date.now()
   
   If start_tmp is not null (currently running):
     → Add (Date.now() - start_tmp) to accumulated_time
     → Set start_tmp = null
   ```

2. **Reset Button Click:**
   ```
   → Set start_tmp = null
   → Set accumulated_time = 0
   ```

## UI Components

### Display
- Shows `HH:MM:SS` format
- Updates every second when running
- Shows last value when paused

### Start/Pause Button
- Label changes based on state:
  - "Start" when paused
  - "Pause" when running
- Visual styling should reflect state (color, icon, etc.)

### Reset Button
- **Enabled when:** `start_tmp !== null` OR `accumulated_time !== 0`
- **Disabled when:** Both are zero/null
- Clears all stored time data

## Analytics (GA4)

### Events to Track

**UI Interaction Events:**
- `timer_start` - When user starts the timer
- `timer_pause` - When user pauses the timer
- `timer_reset` - When user resets the timer
- `display_click` - Click on the number display area
- `empty_area_click` - Click on empty/background area
- `info_page_click` - Navigation to /info page

**Purpose:**
- `display_click`: Track if users expect the display to be interactive
- `empty_area_click`: Baseline reference for accidental/exploratory clicks

## Project Structure

```
c-persistent-stopwatch/
├── ops/                    # Pipeline scripts (image generation, etc.)
├── web/                    # Next.js application
│   ├── app/
│   │   ├── page.tsx       # Main stopwatch page
│   │   ├── info/          # Info/about page
│   │   └── privacy-policy/ # Privacy policy page
│   └── __tests__/
└── wt/                     # Worktrees for AI agents
    ├── wt-ai_a_webpages/  # Agent A: info, privacy pages
    └── wt-ai_b_mainpage/  # Agent B: main stopwatch functionality
```

## Test Plan

### Unit Tests
- [ ] Start button initializes `start_tmp` correctly
- [ ] Pause button calculates and stores `accumulated_time`
- [ ] Reset button clears both values
- [ ] Time calculation is accurate
- [ ] localStorage persistence works across sessions

### Integration Tests
- [ ] Timer continues correctly after page reload
- [ ] Display updates every second when running
- [ ] Button states update correctly
- [ ] Reset button enable/disable logic

### User Interaction Tests
- [ ] Click on main button (start/pause)
- [ ] Click on number display area
- [ ] Click on empty area
- [ ] Navigate to /info page
- [ ] Verify GA4 events fire correctly

### Edge Cases
- [ ] Browser closed while running, reopened after hours
- [ ] localStorage cleared while timer running
- [ ] Multiple tabs open simultaneously
- [ ] Very long running times (days/weeks)

## Technical Notes

### Time Precision
- Store timestamps in milliseconds
- Display in `HH:MM:SS` format (seconds precision is sufficient)

### Browser Compatibility
- localStorage support (all modern browsers)
- Date.now() for timestamps

### Performance
- Display updates: 1 second interval when running, no updates when paused
- No continuous timer needed thanks to timestamp approach

## Future Considerations

- Session history/logs (if users want to track individual sessions)
- Export data functionality
- Multiple named timers
- Sound/notification when certain durations are reached
- PWA for better "app-like" experience
