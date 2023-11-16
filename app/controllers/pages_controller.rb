class PagesController < ApplicationController
  include ApplicationHelper
  layout 'application'

  def home
    load_data

    @news = News.items
    @slides = Slider.items
    @timer = Config.find_by(name: 'slider_timer')['value']
    @coal_count = Config.find_by(name: 'coal_count')['value']
  end
end
