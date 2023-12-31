require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
# require "action_cable/engine"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SibstargroupCms
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.exceptions_app = ->(env) {
      ErrorsController.action(:show).call(env)
    }

    config.assets.precompile += %w( gsap swiper choices.js )
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    # config.assets.js_compressor = :esbuild
    # config.esbuild_options = {
    #   # as an external module
    #   external: %w[gsap swiper choices.js]
    # }

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Don't generate system test files.
    config.generators.system_tests = nil

    config.i18n.available_locales = [:zh, :en, :ru]
    config.i18n.default_locale = :ru

    config.autoloader = :classic
    config.autoload_paths << "#{config.root}/lib"
    config.eager_load_paths << "#{config.root}/lib"
  end
end
