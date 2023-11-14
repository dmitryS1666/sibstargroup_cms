class PagesController < ApplicationController
  include ApplicationHelper
  layout 'application'

  def home
    load_data

    @news = News.items

    @slides = Slider.items
    @timer = SliderConfig.find_by(name: 'slider_timer')['value']
  end
end
