# =====================
# Docker Compose (Frontend Dev)
# =====================

dev-docker:
	docker compose up

dev-docker-build:
	docker compose up --build

dev-docker-down:
	docker compose down

# Force rebuild without cache (optional)
dev-docker-rebuild:
	docker compose build --no-cache && docker compose up

restart:
	docker compose down && docker compose up

# =====================
# Local Development (No Docker)
# =====================

dev:
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test
