build:
	docker-compose -f docker-compose.development.yml build

dev-up:
	docker-compose -f docker-compose.development.yml up

dev-down:
	docker-compose -f docker-compose.development.yml down