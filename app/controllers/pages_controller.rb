class PagesController < ApplicationController
  include ApplicationHelper
  layout 'application'
  before_action :load_data

  def home
    @news = News.items
    @slides = Slider.items
    @timer = Config.find_by(name: 'slider_timer')['value']
    @coal_count = Config.find_by(name: 'coal_count')['value']
  end

  def about; end

  def sale_petroleum
    @slides_sales = SliderSale.items
  end
end
