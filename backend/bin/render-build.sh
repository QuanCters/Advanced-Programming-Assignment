#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
<<<<<<< HEAD
bundle exec rails assets:clean
=======
bundle exec rails assets:clean
>>>>>>> b226d445095f81dbc1abe9907720977bde9dacd4
