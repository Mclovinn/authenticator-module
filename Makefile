start_server:
	node ./bin/www

test:
	@./node_modules/.bin/mocha

.PHONY: test
