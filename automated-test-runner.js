/**
 * Automated Test Runner for Mines Game
 * This script can be run in the browser console on the mines-game.html page
 * to automatically test various game scenarios and detect bugs.
 */

class MinesGameTester {
    constructor() {
        this.testResults = [];
        this.originalGame = null;
        this.testCount = 0;
        this.passCount = 0;
        this.failCount = 0;
    }

    // Initialize tester and store reference to game
    init() {
        this.originalGame = window.game || this.findGameInstance();
        if (!this.originalGame) {
            console.error("❌ Cannot find game instance. Make sure you're running this on mines-game.html");
            return false;
        }
        console.log("🎯 Mines Game Automated Tester Initialized");
        console.log("==========================================");
        return true;
    }

    // Try to find game instance in global scope
    findGameInstance() {
        // Check if game is attached to window or document
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            if (script.innerHTML.includes('class MinesGame')) {
                return window.game;
            }
        }
        return null;
    }

    // Utility function to run a test
    runTest(testName, testFunction) {
        this.testCount++;
        console.log(`\n🧪 Running Test ${this.testCount}: ${testName}`);
        console.log("-".repeat(50));

        try {
            const result = testFunction();
            if (result.passed) {
                console.log(`✅ PASS: ${result.message}`);
                this.passCount++;
            } else {
                console.log(`❌ FAIL: ${result.message}`);
                this.failCount++;
            }
            this.testResults.push({
                name: testName,
                passed: result.passed,
                message: result.message,
                details: result.details || null
            });
        } catch (error) {
            console.log(`💥 ERROR: ${error.message}`);
            this.failCount++;
            this.testResults.push({
                name: testName,
                passed: false,
                message: `Test threw error: ${error.message}`,
                details: error.stack
            });
        }
    }

    // Test 1: Input validation bypass
    testInputValidationBypass() {
        return this.runTest("Input Validation Bypass", () => {
            const originalBalance = this.originalGame.balance;

            // Try to set bet amount higher than balance
            const betInput = document.getElementById('bet-amount');
            const highBet = originalBalance + 50;

            // Simulate rapid typing
            betInput.value = highBet;

            // Try to start game immediately
            try {
                this.originalGame.startGame();
                const actualBet = this.originalGame.currentBet;

                if (actualBet > originalBalance) {
                    return {
                        passed: false,
                        message: `BUG CONFIRMED: Was able to bet $${actualBet} with only $${originalBalance} balance`,
                        details: { attemptedBet: highBet, actualBet, balance: originalBalance }
                    };
                } else {
                    return {
                        passed: true,
                        message: `Input validation working: Bet corrected to $${actualBet}`,
                        details: { attemptedBet: highBet, actualBet, balance: originalBalance }
                    };
                }
            } catch (error) {
                return {
                    passed: true,
                    message: "Input validation prevented invalid bet",
                    details: error.message
                };
            }
        });
    }

    // Test 2: Multiplier calculation accuracy
    testMultiplierCalculations() {
        return this.runTest("Multiplier Calculations", () => {
            const expectedMultipliers = {
                1: 0.2,
                2: 0.3,
                3: 0.4,
                4: 0.5,
                5: 0.6,
                6: 0.7,
                7: 0.8,
                8: 0.9,
                9: 1.0,
                10: 1.0
            };

            let allCorrect = true;
            let details = [];

            for (let mines = 1; mines <= 10; mines++) {
                // Set mine count and trigger multiplier update
                document.getElementById('mine-count').value = mines;
                this.originalGame.updateMultiplier();

                const actualMultiplier = this.originalGame.multiplier;
                const expectedMultiplier = expectedMultipliers[mines];

                if (Math.abs(actualMultiplier - expectedMultiplier) > 0.01) {
                    allCorrect = false;
                    details.push(`${mines} mines: expected ${expectedMultiplier}, got ${actualMultiplier}`);
                }
            }

            return {
                passed: allCorrect,
                message: allCorrect ?
                    "All multiplier calculations are correct" :
                    "Some multiplier calculations are incorrect",
                details: details
            };
        });
    }

    // Test 3: Potential winnings calculation
    testPotentialWinnings() {
        return this.runTest("Potential Winnings Calculation", () => {
            // Start a game with known parameters
            this.originalGame.balance = 100;
            document.getElementById('bet-amount').value = 50;
            document.getElementById('mine-count').value = 5;

            this.originalGame.startGame();

            // Simulate revealing 3 safe squares
            this.originalGame.revealedSquares = 3;
            this.originalGame.updatePotentialWinnings();

            const actualWinnings = this.originalGame.potentialWinnings;
            const expectedWinnings = Math.floor(50 * (1 + (3 * 0.6))); // 50 * (1 + 1.8) = 140

            return {
                passed: actualWinnings === expectedWinnings,
                message: `Potential winnings: expected $${expectedWinnings}, got $${actualWinnings}`,
                details: {
                    bet: 50,
                    revealedSquares: 3,
                    multiplier: 0.6,
                    calculation: "50 * (1 + (3 * 0.6)) = 50 * 2.8 = 140"
                }
            };
        });
    }

    // Test 4: Mine generation uniqueness
    testMineGeneration() {
        return this.runTest("Mine Generation Uniqueness", () => {
            const testRuns = 10;
            let allUnique = true;
            let details = [];

            for (let run = 0; run < testRuns; run++) {
                this.originalGame.mineCount = 5;
                this.originalGame.generateMines();

                const mines = this.originalGame.mines;
                const uniqueMines = [...new Set(mines)];

                if (mines.length !== uniqueMines.length) {
                    allUnique = false;
                    details.push(`Run ${run + 1}: Found duplicate mines - ${mines}`);
                }

                if (mines.length !== 5) {
                    allUnique = false;
                    details.push(`Run ${run + 1}: Wrong mine count - expected 5, got ${mines.length}`);
                }
            }

            return {
                passed: allUnique,
                message: allUnique ?
                    `All ${testRuns} mine generation tests passed` :
                    "Mine generation has issues",
                details: details
            };
        });
    }

    // Test 5: Balance manipulation detection
    testBalanceManipulation() {
        return this.runTest("Balance Manipulation Security", () => {
            const originalBalance = this.originalGame.balance;

            // Try to manipulate balance directly
            this.originalGame.balance = 999999;
            this.originalGame.updateDisplay();

            const displayedBalance = document.getElementById('balance').textContent;
            const manipulatedBalance = this.originalGame.balance;

            // This test will always "fail" because the manipulation works
            return {
                passed: false,
                message: "SECURITY FLAW: Balance can be manipulated client-side",
                details: {
                    originalBalance,
                    manipulatedBalance,
                    displayedBalance,
                    note: "This is a critical security vulnerability in a real gambling application"
                }
            };
        });
    }

    // Test 6: Double click protection
    testDoubleClickProtection() {
        return this.runTest("Double Click Protection", () => {
            // Reset game state
            this.originalGame.balance = 100;
            this.originalGame.gameActive = false;

            // Start a game
            document.getElementById('bet-amount').value = 20;
            this.originalGame.startGame();

            // Simulate revealing a safe square
            this.originalGame.revealedSquares = 1;
            this.originalGame.updatePotentialWinnings();

            const balanceBeforeCashOut = this.originalGame.balance;
            const potentialWinnings = this.originalGame.potentialWinnings;

            // Try to cash out multiple times rapidly
            this.originalGame.cashOut();
            const balanceAfterFirst = this.originalGame.balance;

            this.originalGame.cashOut(); // Second attempt
            const balanceAfterSecond = this.originalGame.balance;

            const doubleCashOut = balanceAfterSecond > balanceAfterFirst;

            return {
                passed: !doubleCashOut,
                message: doubleCashOut ?
                    "BUG: Double cash-out possible" :
                    "Double cash-out properly prevented",
                details: {
                    balanceBeforeCashOut,
                    potentialWinnings,
                    balanceAfterFirst,
                    balanceAfterSecond,
                    doubleCashOut
                }
            };
        });
    }

    // Test 7: Edge case - exact minimum balance
    testMinimumBalanceEdgeCase() {
        return this.runTest("Minimum Balance Edge Case", () => {
            // Set balance to exactly $10
            this.originalGame.balance = 10;
            this.originalGame.updateDisplay();

            // Try to bet $10
            document.getElementById('bet-amount').value = 10;

            try {
                this.originalGame.startGame();
                const gameStarted = this.originalGame.gameActive;
                const currentBet = this.originalGame.currentBet;

                return {
                    passed: gameStarted && currentBet === 10,
                    message: gameStarted ?
                        "Successfully started game with minimum balance" :
                        "Failed to start game with minimum balance",
                    details: {
                        balance: 10,
                        betAmount: 10,
                        gameStarted,
                        currentBet
                    }
                };
            } catch (error) {
                return {
                    passed: false,
                    message: "Error starting game with minimum balance",
                    details: error.message
                };
            }
        });
    }

    // Test 8: Rapid mine clicking
    testRapidMineClicking() {
        return this.runTest("Rapid Mine Clicking", () => {
            // Start a fresh game
            this.originalGame.balance = 100;
            document.getElementById('bet-amount').value = 20;
            this.originalGame.startGame();

            // Get the first square element
            const firstSquare = document.querySelector('.mine-square[data-index="0"]');

            // Simulate rapid clicking on the same square
            let clickResults = [];
            for (let i = 0; i < 5; i++) {
                const wasRevealed = firstSquare.classList.contains('revealed');
                this.originalGame.revealSquare(0);
                const nowRevealed = firstSquare.classList.contains('revealed');
                clickResults.push({ clickNumber: i + 1, wasRevealed, nowRevealed });
            }

            // Check if multiple reveals happened
            const multipleReveals = clickResults.filter(result =>
                !result.wasRevealed && result.nowRevealed).length > 1;

            return {
                passed: !multipleReveals,
                message: multipleReveals ?
                    "BUG: Multiple reveals possible on same square" :
                    "Rapid clicking properly handled",
                details: clickResults
            };
        });
    }

    // Run all tests
    runAllTests() {
        if (!this.init()) {
            return;
        }

        console.log("🚀 Starting Comprehensive Test Suite");
        console.log("====================================\n");

        // Reset counters
        this.testCount = 0;
        this.passCount = 0;
        this.failCount = 0;
        this.testResults = [];

        // Run all tests
        this.testInputValidationBypass();
        this.testMultiplierCalculations();
        this.testPotentialWinnings();
        this.testMineGeneration();
        this.testBalanceManipulation();
        this.testDoubleClickProtection();
        this.testMinimumBalanceEdgeCase();
        this.testRapidMineClicking();

        // Print summary
        this.printSummary();
    }

    // Print test summary
    printSummary() {
        console.log("\n" + "=".repeat(60));
        console.log("🎯 TEST SUMMARY");
        console.log("=".repeat(60));
        console.log(`Total Tests: ${this.testCount}`);
        console.log(`Passed: ${this.passCount} ✅`);
        console.log(`Failed: ${this.failCount} ❌`);
        console.log(`Success Rate: ${((this.passCount / this.testCount) * 100).toFixed(1)}%`);

        console.log("\n📋 DETAILED RESULTS:");
        console.log("-".repeat(40));

        this.testResults.forEach((result, index) => {
            const status = result.passed ? "✅ PASS" : "❌ FAIL";
            console.log(`${index + 1}. ${status}: ${result.name}`);
            console.log(`   ${result.message}`);
            if (result.details) {
                console.log(`   Details:`, result.details);
            }
            console.log("");
        });

        // Critical issues summary
        const criticalIssues = this.testResults.filter(r =>
            !r.passed && (
                r.name.includes("Validation") ||
                r.name.includes("Security") ||
                r.name.includes("Double")
            )
        );

        if (criticalIssues.length > 0) {
            console.log("\n🚨 CRITICAL ISSUES FOUND:");
            console.log("-".repeat(40));
            criticalIssues.forEach(issue => {
                console.log(`⚠️  ${issue.name}: ${issue.message}`);
            });
        }

        console.log("\n💡 TESTING RECOMMENDATIONS:");
        console.log("-".repeat(40));
        console.log("1. Fix input validation to prevent typing values beyond limits");
        console.log("2. Implement server-side validation for real applications");
        console.log("3. Add race condition protection for critical operations");
        console.log("4. Consider adding input sanitization and rate limiting");
        console.log("5. Test with different browsers and devices");
    }

    // Get test results as JSON for export
    exportResults() {
        return {
            timestamp: new Date().toISOString(),
            summary: {
                totalTests: this.testCount,
                passed: this.passCount,
                failed: this.failCount,
                successRate: (this.passCount / this.testCount) * 100
            },
            results: this.testResults
        };
    }
}

// Create global instance for easy access
const minesGameTester = new MinesGameTester();

// Instructions for use
console.log("🎯 Mines Game Automated Tester Loaded");
console.log("=====================================");
console.log("");
console.log("USAGE INSTRUCTIONS:");
console.log("1. Open mines-game.html in your browser");
console.log("2. Open developer console (F12)");
console.log("3. Copy and paste this entire script");
console.log("4. Run: minesGameTester.runAllTests()");
console.log("");
console.log("AVAILABLE COMMANDS:");
console.log("- minesGameTester.runAllTests()          // Run complete test suite");
console.log("- minesGameTester.testInputValidationBypass()  // Test specific area");
console.log("- minesGameTester.exportResults()        // Get results as JSON");
console.log("");
console.log("NOTE: Make sure the game is loaded before running tests!");

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MinesGameTester;
}