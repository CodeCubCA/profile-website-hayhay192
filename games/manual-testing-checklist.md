# 🎯 Mines Game - Manual Testing Checklist

## Testing Environment Setup
- **Game File:** `mines-game.html`
- **Browser:** Chrome/Firefox/Safari/Edge
- **Screen Sizes:** Desktop, Tablet, Mobile
- **Test Date:** ___________
- **Tester Name:** ___________

---

## 1. Input Validation Testing

### 1.1 Bet Amount Validation
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Minimum bet boundary** | 1. Set bet to $9<br>2. Click Start Game | Error message: "Minimum bet is $10" | | |
| **Maximum bet boundary** | 1. Set bet to $101 (when balance is $100)<br>2. Click Start Game | Error message: "Insufficient funds!" | | |
| **Manual input override** | 1. Quickly type $150 in bet field<br>2. Immediately click Start Game | Should prevent or auto-correct | | |
| **Negative values** | 1. Type -50 in bet field<br>2. Try to start game | Should reject or correct to minimum | | |
| **Decimal values** | 1. Type 10.99 in bet field<br>2. Check what value is used | Should handle decimals appropriately | | |
| **Non-numeric input** | 1. Type "abc" in bet field<br>2. Try to start game | Should reject invalid input | | |

### 1.2 Mine Count Validation
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Minimum mines** | 1. Set mines to 0<br>2. Try starting game | Error: "Mine count must be between 1 and 10" | | |
| **Maximum mines** | 1. Set mines to 11<br>2. Try starting game | Error: "Mine count must be between 1 and 10" | | |
| **Negative mines** | 1. Set mines to -5<br>2. Try starting game | Should reject negative values | | |

---

## 2. Game Logic Testing

### 2.1 Multiplier Calculations
| Mine Count | Expected Multiplier | Actual Multiplier | Pass/Fail |
|------------|-------------------|------------------|-----------|
| 1 mine | 0.2x | | |
| 2 mines | 0.3x | | |
| 3 mines | 0.4x | | |
| 4 mines | 0.5x | | |
| 5 mines | 0.6x | | |
| 6 mines | 0.7x | | |
| 7 mines | 0.8x | | |
| 8 mines | 0.9x | | |
| 9 mines | 1.0x | | |
| 10 mines | 1.0x | | |

### 2.2 Potential Winnings Calculation
| Test Scenario | Steps | Expected Calculation | Actual Result | Pass/Fail |
|---------------|-------|---------------------|---------------|-----------|
| **Basic calculation** | 1. Bet $50, 5 mines<br>2. Reveal 2 safe squares | $50 × (1 + (2 × 0.6)) = $110 | | |
| **Zero squares revealed** | 1. Start game<br>2. Check potential winnings | Should show $0 or original bet | | |
| **Maximum reveals** | 1. 10 mines, reveal 14 safe squares | Calculate max possible winnings | | |

### 2.3 Balance Updates
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Losing bet** | 1. Start with $100<br>2. Bet $30, hit mine | Balance should be $70 | | |
| **Winning cash-out** | 1. Bet $20, reveal squares<br>2. Cash out with $40 winnings | Balance should increase by $40 | | |
| **Complete win** | 1. Reveal all safe squares | Balance should include full winnings | | |

### 2.4 Mine Placement
| Test Run | Mine Count | Mine Positions | Unique? | Random? | Pass/Fail |
|----------|------------|----------------|---------|---------|-----------|
| Run 1 | 5 | _____________ | Y/N | Y/N | |
| Run 2 | 5 | _____________ | Y/N | Y/N | |
| Run 3 | 5 | _____________ | Y/N | Y/N | |
| Run 4 | 10 | _____________ | Y/N | Y/N | |
| Run 5 | 1 | _____________ | Y/N | Y/N | |

---

## 3. UI/UX Testing

### 3.1 Button State Management
| Game State | Start Button | Cash Out Button | Input Fields | Pass/Fail |
|------------|--------------|-----------------|--------------|-----------|
| **Initial load** | Visible | Hidden | Enabled | |
| **Game active** | Hidden | Visible | Disabled | |
| **Game ended** | Visible | Hidden | Enabled | |
| **Game over (no money)** | Hidden | Hidden | Disabled | |

### 3.2 Modal Behavior
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Game over modal** | 1. Lose all money<br>2. Check modal appears | Modal should display with correct message | | |
| **Close X button** | 1. Open modal<br>2. Click X | Modal should close | | |
| **Play Again button** | 1. In modal, click Play Again | Reset balance to $100, close modal | | |
| **Back Out button** | 1. Click Back Out | Should navigate (or show error if no target) | | |

### 3.3 Square Reveal Mechanics
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Safe square reveal** | 1. Click safe square | Shows 💰, green background, can't click again | | |
| **Mine square reveal** | 1. Click mine square | Shows 💣, red background, game ends | | |
| **Already revealed** | 1. Click revealed square | No action, square stays same | | |
| **Game not active** | 1. Try clicking before starting game | No action | | |

---

## 4. Edge Cases & Boundary Testing

### 4.1 Balance Edge Cases
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Zero balance** | 1. Lose all money<br>2. Try starting new game | Should prevent game start | | |
| **Exactly $10 balance** | 1. Set balance to $10<br>2. Try betting $10 | Should allow bet | | |
| **$9 balance** | 1. Set balance to $9<br>2. Try any bet | Should show game over | | |

### 4.2 Rapid Interaction Testing
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Double-click Start** | 1. Double-click Start Game rapidly | Should start only one game | | |
| **Rapid Cash Out** | 1. Reveal squares<br>2. Click Cash Out multiple times rapidly | Should cash out only once | | |
| **Same square clicking** | 1. Click same square 5 times rapidly | Should reveal only once | | |
| **Multiple square rapid clicking** | 1. Rapidly click different squares | Each should reveal only once | | |

### 4.3 Browser Edge Cases
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Page refresh during game** | 1. Start game<br>2. Refresh page | Game should reset to initial state | | |
| **Browser back button** | 1. Start game<br>2. Use browser back | Should handle gracefully | | |
| **Small screen** | 1. Resize to mobile size | UI should remain functional | | |

---

## 5. Security & Exploit Testing

### 5.1 Console Manipulation
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Balance manipulation** | 1. Open console<br>2. Type: `game.balance = 999999`<br>3. Check if it works | For demo: works (security flaw)<br>For production: should be prevented | | |
| **Mine position viewing** | 1. Start game<br>2. Console: `game.mines` | For demo: shows positions (flaw)<br>For production: should be hidden | | |
| **Force win** | 1. Console: `game.gameOver(true)` | Should complete game with win | | |

### 5.2 Input Injection
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **HTML injection** | 1. Try entering `<script>alert('xss')</script>` in inputs | Should not execute | | |
| **SQL injection** | 1. Try entering `'; DROP TABLE users; --` | Should not cause issues (no DB) | | |

---

## 6. Performance Testing

### 6.1 Game Performance
| Test Case | Steps | Expected Result | Actual Result | Pass/Fail |
|-----------|-------|-----------------|---------------|-----------|
| **Grid generation speed** | 1. Time how long grid takes to appear | Should be near-instant | | |
| **Mine generation** | 1. Start 10 games quickly | Should generate without lag | | |
| **Animation smoothness** | 1. Watch square reveals and transitions | Should be smooth | | |

---

## 7. Cross-Browser Testing

| Browser | Version | All Tests Pass? | Specific Issues | Notes |
|---------|---------|----------------|----------------|-------|
| Chrome | _______ | Y/N | | |
| Firefox | _______ | Y/N | | |
| Safari | _______ | Y/N | | |
| Edge | _______ | Y/N | | |

---

## 8. Mobile Testing

| Device/Size | Portrait | Landscape | Touch Interactions | Issues Found |
|-------------|----------|-----------|-------------------|--------------|
| iPhone | Y/N | Y/N | Y/N | |
| Android | Y/N | Y/N | Y/N | |
| Tablet | Y/N | Y/N | Y/N | |

---

## Bug Report Template

### Bug #: _____
- **Severity:** Critical / High / Medium / Low
- **Priority:** P1 / P2 / P3 / P4
- **Title:** Brief description
- **Environment:** Browser, OS, Device
- **Steps to Reproduce:**
  1. Step 1
  2. Step 2
  3. Step 3
- **Expected Result:** What should happen
- **Actual Result:** What actually happens
- **Screenshot/Video:** Attach if helpful
- **Workaround:** If any exists
- **Notes:** Additional information

---

## Test Summary

| Category | Tests Planned | Tests Executed | Passed | Failed | Pass Rate |
|----------|---------------|----------------|--------|---------|-----------|
| Input Validation | | | | | |
| Game Logic | | | | | |
| UI/UX | | | | | |
| Edge Cases | | | | | |
| Security | | | | | |
| Performance | | | | | |
| **TOTAL** | | | | | |

### Critical Issues Found:
1. _________________________________
2. _________________________________
3. _________________________________

### High Priority Issues:
1. _________________________________
2. _________________________________
3. _________________________________

### Recommendations:
1. _________________________________
2. _________________________________
3. _________________________________

**Tester Signature:** _________________ **Date:** _________

**Overall Assessment:** Ready for Release / Needs Minor Fixes / Needs Major Fixes / Not Ready