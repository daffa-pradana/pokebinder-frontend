# ================
# Docker Commands
# ================

build:
	docker build -t pokebinder-frontend .

run:
	docker run -p 3000:80 --name pokebinder-frontend pokebinder-frontend

stop:
	docker stop pokebinder-frontend || true
	docker rm pokebinder-frontend || true

rebuild: stop build run

# ================
# Local Commands
# ================

dev:
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test

# ================
# Docker Compose Commands (Development)
# ================

dev-docker:
	docker compose up

dev-docker-build:
	docker compose build

dev-docker-down:
	docker compose down
