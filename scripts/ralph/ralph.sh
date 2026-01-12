#!/bin/bash

# =============================================================================
# Ralph - Autonomous AI Development Loop
# =============================================================================
# Usage: ./ralph.sh [max_iterations] [delay_seconds]
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PRD_FILE="$SCRIPT_DIR/prd.json"
PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
PROMPT_FILE="$SCRIPT_DIR/prompt.md"
ARCHIVE_DIR="$PROJECT_ROOT/archive"

MAX_ITERATIONS="${1:-10}"
DELAY_SECONDS="${2:-5}"
COMPLETION_PROMISE="COMPLETE"

MAX_NO_PROGRESS=3
MAX_SAME_ERROR=5

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_ralph() { echo -e "${PURPLE}[RALPH]${NC} $1"; }

timestamp() { date "+%Y-%m-%d %H:%M:%S"; }
append_progress() { echo "[$(timestamp)] $1" >> "$PROGRESS_FILE"; }

all_stories_complete() {
    [[ -f "$PRD_FILE" ]] || return 1
    local incomplete=$(jq '[.userStories[] | select(.passes == false)] | length' "$PRD_FILE" 2>/dev/null || echo "1")
    [[ "$incomplete" == "0" ]]
}

count_completed_stories() {
    [[ -f "$PRD_FILE" ]] && jq '[.userStories[] | select(.passes == true)] | length' "$PRD_FILE" 2>/dev/null || echo "0"
}

get_next_story() {
    [[ -f "$PRD_FILE" ]] && jq -r '.userStories[] | select(.passes == false) | "\(.id): \(.title)"' "$PRD_FILE" 2>/dev/null | head -1
}

get_branch_name() {
    [[ -f "$PRD_FILE" ]] && jq -r '.branchName // "ralph/feature"' "$PRD_FILE" 2>/dev/null || echo "ralph/feature"
}

get_project_name() {
    [[ -f "$PRD_FILE" ]] && jq -r '.project // "Project"' "$PRD_FILE" 2>/dev/null || echo "Project"
}

setup_branch() {
    local branch_name=$(get_branch_name)
    cd "$PROJECT_ROOT"
    if git show-ref --verify --quiet "refs/heads/$branch_name" 2>/dev/null; then
        log_info "Switching to existing branch: $branch_name"
        git checkout "$branch_name"
    else
        log_info "Creating new branch: $branch_name"
        git checkout -b "$branch_name"
    fi
}

preflight_checks() {
    log_ralph "Running pre-flight checks..."
    [[ -f "$PRD_FILE" ]] || { log_error "prd.json not found. Run /ralph-heavy first."; exit 1; }
    [[ -f "$PROMPT_FILE" ]] || { log_error "prompt.md not found."; exit 1; }
    command -v jq &>/dev/null || { log_error "jq required. Install: brew install jq"; exit 1; }
    command -v claude &>/dev/null || { log_error "claude CLI not found."; exit 1; }
    jq empty "$PRD_FILE" 2>/dev/null || { log_error "Invalid JSON in prd.json"; exit 1; }
    log_success "Pre-flight checks passed"
}

main() {
    echo ""
    log_ralph "=========================================="
    log_ralph "  Ralph - Autonomous Development Loop"
    log_ralph "=========================================="
    echo ""

    preflight_checks

    local project_name=$(get_project_name)
    local branch_name=$(get_branch_name)
    local total_stories=$(jq '.userStories | length' "$PRD_FILE")

    log_info "Project: $project_name"
    log_info "Branch: $branch_name"
    log_info "Stories: $total_stories | Max iterations: $MAX_ITERATIONS | Delay: ${DELAY_SECONDS}s"
    echo ""

    setup_branch

    [[ -f "$PROGRESS_FILE" ]] && [[ -s "$PROGRESS_FILE" ]] || cat > "$PROGRESS_FILE" << EOF
# Ralph Progress Log
## Feature: $project_name
## Branch: $branch_name
## Started: $(timestamp)

---

## Patterns Discovered

## Gotchas & Warnings

## Iteration Log
EOF

    local no_progress_count=0
    local last_completed_count=$(count_completed_stories)
    local last_error="" same_error_count=0
    local iteration=1

    while [[ $iteration -le $MAX_ITERATIONS ]]; do
        echo ""
        log_ralph "Iteration $iteration / $MAX_ITERATIONS"

        if all_stories_complete; then
            log_success "All stories complete!"
            append_progress "ALL STORIES COMPLETE"
            echo -e "\n${GREEN}<promise>$COMPLETION_PROMISE</promise>${NC}\n"
            break
        fi

        local next_story=$(get_next_story)
        local completed=$(count_completed_stories)
        log_info "Progress: $completed / $total_stories | Next: $next_story"
        append_progress "Iteration $iteration - Starting: $next_story"

        log_ralph "Running Claude..."
        echo ""
        local output exit_code=0
        output=$(cat "$PROMPT_FILE" | claude --continue 2>&1) || exit_code=$?
        echo "$output"

        local current_completed=$(count_completed_stories)
        if [[ "$current_completed" -eq "$last_completed_count" ]]; then
            ((no_progress_count++))
            log_warn "No progress ($no_progress_count/$MAX_NO_PROGRESS)"
            [[ $no_progress_count -ge $MAX_NO_PROGRESS ]] && { log_error "Circuit breaker: No progress"; break; }
        else
            no_progress_count=0
            last_completed_count=$current_completed
            log_success "Progress! Stories: $current_completed"
        fi

        append_progress "Iteration $iteration - Completed"
        [[ $iteration -lt $MAX_ITERATIONS ]] && sleep "$DELAY_SECONDS"
        ((iteration++))
    done

    echo ""
    log_ralph "Ralph Complete - $(count_completed_stories) / $total_stories stories"
    all_stories_complete && echo -e "${GREEN}<promise>$COMPLETION_PROMISE</promise>${NC}"
}

trap 'echo ""; log_warn "Interrupted!"; append_progress "INTERRUPTED"; exit 130' SIGINT SIGTERM
main "$@"
