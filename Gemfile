source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
# gem "rails", "~> 7.0.7", ">= 7.0.7.2"
gem 'rails', '7.0.7.2'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# JavaScript
gem "jsbundling-rails", "~> 1.2"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
gem "cssbundling-rails"

# CMS
gem 'trestle'
gem 'trestle-tinymce'
gem 'trestle-auth'
# gem 'tinymce-rails'
# gem 'trestle-mobility'

# i18n
gem 'mobility'

# active storage
gem 'image_processing', '~> 1.2'

group :development, :test do
  gem 'foreman'
end

group :development do
  gem "web-console"
  gem "letter_opener"
end
